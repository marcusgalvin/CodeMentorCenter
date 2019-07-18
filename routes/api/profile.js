const express = require("express");
const router = express.Router();
const config = require("config");
const auth = require("../../middleware/auth");
const {
  check,
  validationResult
} = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const nodemailer = require("nodemailer");

//@route GET api/profile/me
//@desc  get current users profile
//@access  private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate(
      "user",
      //do we need username or email???
      ["name", "image"]
    );

    if (!profile) {
      return res.status(404).json({
        msg: "No profile found for this user"
      });
    }
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.send(500).send("server error");
  }
});

//@route GET api/profile/user/:user_id
//@desc  get profile by user id
//@access  public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
      //do we need username or email???
    }).populate("user", ["name", "image"]);

    if (!profile) {
      return res.status(404).json({
        msg: "No profile found with this id"
      });
    }

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    //if the type of error is object id error res.send the same error as above
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        msg: "No profile found with this id"
      });
    }
    res.send(500).send("server error");
  }
});

//@route GET api/profile
//@desc  get all profiles
//@access  public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "image"]);
    if (profiles.length === 0) {
      return res.status(404).json({
        msg: "No profiles found"
      });
    }
    res.json(profiles);
  } catch (error) {
    console.error(error.message);
    res.send(500).send("server error");
  }
});

//@route POST api/profile
//@desc  create or edit a profile
//@access  private
router.post("/", auth, async (req, res) => {
  //  none of the fields are required as of now, add errors as needed
  //add url checks

  const {
    status,
    bio,
    company,
    jobDevRole,
    school,
    country,
    state,
    city,
    githubURL,
    twitterURL,
    linkedInURL,
    otherURL,
    languages,
    projects,
    beMentee,
    beMentor
  } = req.body;

  //build profile object, check to make sure fields exist
  const profileFields = {};
  profileFields.user = req.user.id;
  if (status) profileFields.status = status;
  if (bio) profileFields.bio = bio;
  if (company) profileFields.company = company;
  if (jobDevRole) profileFields.jobDevRole = jobDevRole;
  if (school) profileFields.school = school;
  profileFields.location = {};
  if (country) profileFields.location.country = country;
  if (state) profileFields.location.state = state;
  if (city) profileFields.location.city = city;
  profileFields.social = {};
  if (githubURL) profileFields.social.githubURL = githubURL;
  if (twitterURL) profileFields.social.twitterURL = twitterURL;
  if (linkedInURL) profileFields.social.linkedInURL = linkedInURL;
  if (otherURL) profileFields.social.otherURL = otherURL;
  if (languages) profileFields.languages = languages;
  if (projects) profileFields.projects = projects;
  if (beMentee) profileFields.beMentee = beMentee;
  if (beMentor) profileFields.beMentor = beMentor;

  try {
    //check for profile and if it exists update, else create a new profile
    let profile = await Profile.findOne({
      user: req.user.id
    });

    if (profile) {
      //update profile
      profile = await Profile.findOneAndUpdate({
        user: req.user.id
      }, {
        $set: profileFields
      }, {
        new: true
      });
      return res.json(profile);
    }

    //create new profile
    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

//@route POST api/profile/:user_id/request
//@desc  request a mentor/mentee
//@access  private
router.post(
  "/:user_id/request",
  [
    auth,
    [
      //type will be either "needMentor" or "wantToMentor"
      check("requestType", "Request type is required")
      .not()
      .isEmpty(),
      check("requestType").custom((value, {
        req
      }) => {
        if (value !== "needMentor" || value !== "wantToMentor") {
          throw new Error(
            "Request type must be either needMentor or wantToMentor"
          );
        } else {
          return true;
        }
      }),
      //description and language may be unneccassery if the info comes from the users profile under mentor/mentee section
      check("description", "Description is required")
      .not()
      .isEmpty(),
      check("language", "Language is required")
      .not()
      .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    try {
      let profile = await Profile.findOne({
        user: req.params.user_id
      });

      //check if user has an existing request
      const request = profile.requests.filter(
        request => request.user.toString() === req.user.id
      );

      const newRequest = {
        description: req.body.description,
        requestType: req.body.requestType,
        language: req.body.language,
        user: req.user.id
      };

      //if request exists update with new content
      if (request.length > 0) {
        return res.status(400).json({
          msg: "A request already exists for this user"
        });
      }

      profile.requests.unshift(newRequest);
      await profile.save();

      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route POST api/profile/request/:request_id/accept
//@desc  accept request
//@access  private
router.post("/request/:request_id/accept", auth, async (req, res) => {
  try {
    let profile = await Profile.findOne({
      user: req.user.id
    });

    const request = profile.requests.find(
      request => request.id === req.params.request_id
    );

    let requestUserProfile = await Profile.findOne({
      user: request.user
    });

    //type will be either "needMentor" or "wantToMentor"
    const requestType = request.requestType;
    const payload = {
      description: request.description,
      language: request.language,
      user: request.user
    };

    //this may be overkill calling both users. look into refactoring this somehow
    //get email and name of request user
    
    //email and name may be available through user when logged in already CHECK THIS!!!!
    let requestUser = await User.findById(request.user);
    //get email and name of current user
    let currentUser = await User.findById(req.user.id);

    let emailSubject = "";
    let emailText = "";

    if (requestType === "needMentor") {
      profile.currentMentees.unshift(payload);
      requestUserProfile.currentMentors.unshift(payload);
      emailSubject = "I would like to mentor you!";
      emailText = `Hi ${requestUser.name}! My name is ${
        currentUser.name
      } and I have accepted your request to be your mentor. Please send an email at your earliest convenience to ${
        currentUser.email
      } with either your Facebook messenger or Slack info so we can chat and get your mentorship underway. Have a nice day!`;
    } else {
      profile.currentMentors.unshift(payload);
      requestUserProfile.currentMentees.unshift(payload);
      emailSubject = "I would like you to mentor me!";
      emailText = `Hi ${requestUser.name}! My name is ${
        currentUser.name
      }and I have accepted your request to be your mentee. Please send an email at your earliest convenience to ${
        currentUser.email
      } with either your Facebook messenger or Slack info so we can chat. Have a nice day!`;
    }
    //get index of request to remove
    const removeIndex = profile.requests
      .map(request => request.id)
      .indexOf(req.params.request_id);

    profile.requests.splice(removeIndex, 1);
    //save both profiles
    await profile.save();
    await requestUserProfile.save();
    res.json(profile);

    //  Send E-mail to requester!

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "codementorcenter@gmail.com",
        pass: config.get("emailPass")
      }
    });

    const mailOptions = {
      from: "CodeMentorCenter@gmail.com",
      to: requestUser.email,
      subject: emailSubject,
      text: emailText
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  } catch (error) {
    console.error(error.message);
    res.send(500).send("server error");
  }
});

//@route POST api/profile/mentorship/:user_id/finish
//@desc  for mentor to complete mentorship with a mentee
//@access  private
router.post("/mentorship/:user_id/finish", auth, async (req, res) => {
  try {
    //current users profile
    let profile = await Profile.findOne({
      user: req.user.id
    });

    const mentee = profile.currentMentees.find(
      mentee => mentee.user.toString() === req.params.user_id
    );
    //mentees profile
    let menteeProfile = await Profile.findOne({
      user: req.params.user_id
    });

    //this may be overkill calling both users. look into refactoring this somehow
    //get email and name of request user
    let menteeUser = await User.findById(req.params.user_id);
    //get email and name of current user
    let currentUser = await User.findById(req.user.id);

    let emailSubject = "";
    let emailText = "";

    const menteePayload = {
      description: mentee.description,
      language: mentee.language,
      user: req.user.id,
      startDate: mentee.startDate
    };

    const mentorPayload = {
      description: mentee.description,
      language: mentee.language,
      user: mentee.user,
      startDate: mentee.startDate
    };

    profile.previousMentees.unshift(mentorPayload);
    menteeProfile.previousMentors.unshift(menteePayload);

    emailSubject = "Mentorship Complete!";
    //URL for reviewing mentors needs to be updated once complete
    emailText = `Hi ${menteeUser.name}! Your mentorship with ${
      currentUser.name
    } has completed. Thank you for using the Code Mentor Center to further your programming skills. Please take a minute to leave a review of your mentor here http://www.codementorcenter.com/review/:mentor_id`

    //get index of currentMentee to remove
    const removeMenteeIndex = profile.currentMentees
      .map(mentee => mentee.user)
      .indexOf(req.params.mentee_id);

    profile.currentMentees.splice(removeMenteeIndex, 1);

    //get index of currentMentor to remove
    const removeMentorIndex = profile.currentMentors
      .map(mentor => mentor.user)
      .indexOf(req.user.id);

    profile.currentMentors.splice(removeMentorIndex, 1);

    //save both profiles
    await profile.save();
    await menteeProfile.save();
    res.json(profile);

    //  Send E-mail to mentee!

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "codementorcenter@gmail.com",
        pass: config.get("emailPass")
      }
    });

    const mailOptions = {
      from: "CodeMentorCenter@gmail.com",
      to: menteeUser.email,
      subject: emailSubject,
      text: emailText
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  } catch (error) {
    console.error(error.message);
    res.send(500).send("server error");
  }
});

//@route DELETE api/profile/:user_id/request/:request_id
//@desc  delete / deny request
//@access  private
router.delete("/:user_id/request/:request_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    });

    const request = profile.requests.find(
      request => request.id === req.params.request_id
    );
    //make sure request exists
    if (!request) {
      return res.status(404).json({
        msg: "request not found"
      });
    }
    //make sure user matches either profile user or request user
    //  ===> is this a SECURE method??? <===
    if (
      request.user.toString() !== req.user.id &&
      profile.user.toString() !== req.user.id
    ) {
      return res.status(401).json({
        msg: "Unautharized user"
      });
    }
    //get index of request to remove
    const removeIndex = profile.requests
      .map(request => request.id)
      .indexOf(req.params.request_id);

    profile.requests.splice(removeIndex, 1);
    await profile.save();
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.send(500).send("server error");
  }
});

//@route POST api/profile/:user_id/review
//@desc  review a mentor
//@access  private
router.post(
  "/:user_id/review",
  [
    auth,
    [
      check("rating", "Rating is required")
      .not()
      .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    try {
      let profile = await Profile.findOne({
        user: req.params.user_id
      });

      //check if user has an existing review
      const review = profile.reviews.filter(
        review => review.user.toString() === req.user.id
      );

      const newReview = {
        rating: parseInt(req.body.rating),
        text: req.body.text,
        user: req.user.id
      };

      //if review exists update with new content
      if (review.length > 0) {
        profile = await Profile.findOneAndUpdate({
          user: req.params.user_id,
          "reviews.user": req.user.id
        }, {
          $set: {
            "reviews.$.rating": req.body.rating,
            "reviews.$.text": req.body.text,
            "reviews.$.date": Date.now()
          }
        }, {
          new: true
        });
        return res.json(profile);
      }

      profile.reviews.unshift(newReview);
      await profile.save();

      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route DELETE api/profile/:user_id/review/:review_id
//@desc  delete review
//@access  private
router.delete("/:user_id/review/:review_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    });

    const review = profile.reviews.find(
      review => review.id === req.params.review_id
    );
    //make sure review exists
    if (!review) {
      return res.status(404).json({
        msg: "review not found"
      });
    }
    //make sure user matches
    //  ===> is this a SECURE method??? <===
    if (review.user.toString() !== req.user.id) {
      return res.status(401).json({
        msg: "Unautharized user"
      });
    }
    //get index of review to remove
    const removeIndex = profile.reviews
      .map(review => review.id)
      .indexOf(req.params.review_id);

    profile.reviews.splice(removeIndex, 1);
    await profile.save();
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.send(500).send("server error");
  }
});

//@route DELETE api/profile
//@desc  delete user and profile
//@access  private
router.delete("/", auth, async (req, res) => {
  try {
    //remove profile with user id
    await Profile.findOneAndRemove({
      user: req.user.id
    });
    await User.findOneAndRemove({
      _id: req.user.id
    });
    res.json({
      msg: "User has been successfully deleted"
    });
  } catch (error) {
    console.error(error.message);
    res.send(500).send("server error");
  }
});

module.exports = router;