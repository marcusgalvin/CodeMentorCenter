const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MentorSchema = new mongoose.Schema({
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
    description: {
      type: String
    },
    languages: [{
      language: {
        type: String,
        required: true
      },
      experience: {
        type: String,
        required: true
      }
    }],
    speakingLanguage: [{
      language: {
        type: String,
        default: "English",
        required: true
      }
    }]
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
  requests: [{
    user: {
      type: Schema.Types.ObjectId,
      required: true
    },
    requestType: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    language: {
      type: String
    }
  }],
  mentor: [{
    user: {
      type: Schema.Types.ObjectId,
      required: true
    }
  }],
  mentoring: [{
    user: {
      type: Schema.Types.ObjectId,
      required: true
    },
    startDate: {
      type: Date,
      default: Date.now
    },
    description: {
      type: String
    },
    language: {
      type: String
    }
  }],
  previousMentors: [{
    user: {
      type: Schema.Types.ObjectId,
      required: true
    }
  }],
  mentored: [{
    user: {
      type: Schema.Types.ObjectId,
      required: true
    },
    startDate: {
      type: Date
    },
    endDate: {
      type: Date,
      default: Date.now
    },
    description: {
      type: String
    },
    language: {
      type: String
    }
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