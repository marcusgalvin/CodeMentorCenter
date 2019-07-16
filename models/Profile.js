const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* tom blais notes:   how will we keep track of who needs
 mentorship, and how mentorship is requested */

const ProfileSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  //if available true, else false
  status: {
    type: Boolean,
    default: false
  },
  bio: {
    type: String
  },
  company: {
    type: String
  },
  //senior, associate, etc
  jobDevRole: {
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
  social: {
    githubURL: {
      type: String
    },
    twitterURL: {
      type: String
    },
    linkedInURL: {
      type: String
    },
    otherURL: {
      type: String
    }
  },
  languages: [
    {
      language: {
        type: String
      }
    }
  ],
  projects: [
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      githubRepoURL: {
        type: String
      }
    }
  ],
  beMentee: {
    check: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
    },
    //for now pick one language, maybe change to more later
    language: {
      type: String,
    },
    speakingLanguage: {
      type: String,
    }
  },
  beMentor: {
    check: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
    },
    languages: [
      {
        language: {
          type: String,
        },
        // roman numeral "I" through "V"
        experience: {
          type: String,
        }
      }
    ],
    speakingLanguages: [
      {
        language: {
          type: String,
        }
      }
    ]
  },
  currentMentors: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      description: {
        type: String
      },
      language: {
        type: String
      },
      startDate: {
        type: Date,
        default: Date.now
      }
    }
  ],
  currentMentees: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      description: {
        type: String
      },
      language: {
        type: String
      },
      startDate: {
        type: Date,
        default: Date.now
      }
    }
  ],
  previousMentors: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      description: {
        type: String
      },
      language: {
        type: String
      },
      startDate: {
        type: Date
      },
      endDate: {
        type: Date,
        default: Date.now
      }
    }
  ],
  previousMentees: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      description: {
        type: String
      },
      language: {
        type: String
      },
      //get from current mentees
      startDate: {
        type: Date
      },
      endDate: {
        type: Date,
        default: Date.now
      }
    }
  ],
  requests: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      requestType: {
        type: String,
      },
      description: {
        type: String
      },
      language: {
        type: String
      }
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
