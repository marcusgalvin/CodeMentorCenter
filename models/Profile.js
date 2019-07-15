const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* tom blais notes:   how will we keep track of who needs
 mentorship, and how mentorship is requested */

const ProfileSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  status: {
    type: String
  },
  bio: {
    type: String
  },
  company: {
    type: String
  },
  school: {
    type: String
  },
  location: {
    country: {
      type: String
    },
    state: {
      type: String
    },
    city: {
      type: String
    }
  },
  needMentorship: {
    check: {
      type: Boolean,
      default: false
    },
    description: {
      type: String
    },
    language: {
      type: String,
      required: true
    },
    speakingLanguage: [{
      language: {
        type: String,
        default: "English",
        required: true
      }
    }]
  },
  mentor: {
    check: {
      type: Boolean,
      default: false
    },
    languages: [{
      language: {
        type: String,
        required: true
      },
      experience: {
        type: Number,
        required: true
      }
    }],
    speakingLanguage: [{
      language: {
        type: String,
        default: "English",
        required: true
      }
    }],
    languages: [{
      language: {
        type: String
      },
      experience: {
        type: Number,
        required: true
      }
    }],
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
  languages: [{
    language: {
      type: String
    }
  }],
  mentored: [{
    user: {
      type: Schema.Types.ObjectId,
      required: true
    },
    //start and end dates?
    Date: {
      type: Date,
      default: Date.now
    },
    description: {
      type: String
    },
    languages: [{
      language: {
        type: String
      }
    }]
  }],
  reviews: [{
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
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);