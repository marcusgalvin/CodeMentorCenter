const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* tom blais notes:   how will we keep track of who needs
 mentorship, and how mentorship is requested */

const ProfileSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true
  },

  social: {
    githubURL: {
      type: String
    },
    instagramURL: {
      type: String
    },
    linkedIn: {
      type: String
    },
    otherURL: {
      type: String
    }
  },
  bio: {
    type: String
  },
  languages: [
    {
      language: {
        type: String
      }
    }
  ],
  frameworks: [
    {
      language: {
        type: String
      }
    }
  ],
  otherTech: [
    {
      language: {
        type: String
      }
    }
  ],
  mentored: [
    {
      user: {
        type: Schema.Types.ObjectId,
        required: true
      },
      //start and end dates?
      startDate: {
        type: Date,
        default: Date.now
      },
      description: {
        type: String
      },
      languages: [
        {
          language: {
            type: String
          }
        }
      ]
    }
  ],
  reviews: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      rating: {
        type: Number,
        required: true
      },
      text: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
