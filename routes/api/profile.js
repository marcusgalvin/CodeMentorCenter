const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

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
      profile = await Profile.findOneAndUpdate(
        {
          user: req.user.id
        },
        {
          $set: profileFields
        },
        {
          new: true
        }
      );
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
      check("requestType", "Request type is required")
        .not()
        .isEmpty(),
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
      let profile = await Profile.findOne({ user: req.params.user_id });

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
    let profile = await Profile.findOne({ user: req.user.id });

    const request = profile.requests.find(
      request => request.id === req.params.request_id
    );

    let requestUserProfile = await Profile.findOne({ user: request.user });
    //type will be either "needMentor" or "wantToMentor"
    const requestType = request.requestType;
    const payload = {
      description: request.description,
      language: request.language,
      user: request.user
    };
    if (requestType === "needMentor") {
      profile.currentMentees.unshift(payload);
      requestUserProfile.currentMentors.unshift(payload);
    } else {
      profile.currentMentors.unshift(payload);
      requestUserProfile.currentMentees.unshift(payload);
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
    const profile = await Profile.findOne({ user: req.params.user_id });

    const request = profile.requests.find(
      request => request.id === req.params.request_id
    );
    //make sure request exists
    if (!request) {
      return res.status(404).json({ msg: "request not found" });
    }
    //make sure user matches either profile user or request user
    //  ===> is this a SECURE method??? <===
    if (
      request.user.toString() !== req.user.id &&
      profile.user.toString() !== req.user.id
    ) {
      return res.status(401).json({ msg: "Unautharized user" });
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
      let profile = await Profile.findOne({ user: req.params.user_id });

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
        profile = await Profile.findOneAndUpdate(
          {
            user: req.params.user_id,
            "reviews.user": req.user.id
          },
          {
            $set: {
              "reviews.$.rating": req.body.rating,
              "reviews.$.text": req.body.text,
              "reviews.$.date": Date.now()
            }
          },
          {
            new: true
          }
        );
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
    const profile = await Profile.findOne({ user: req.params.user_id });

    const review = profile.reviews.find(
      review => review.id === req.params.review_id
    );
    //make sure review exists
    if (!review) {
      return res.status(404).json({ msg: "review not found" });
    }
    //make sure user matches
    //  ===> is this a SECURE method??? <===
    if (review.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unautharized user" });
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
