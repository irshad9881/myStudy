// const mongoose = require('mongoose');

// const subSectionSchema = new mongoose.Schema({
//     title: {
//         type: String
//     },
//     timeDuration: {
//         type: String
//     },
//     description: {
//         type: String
//     },
//     videoUrl: {
//         type: String
//     }

// });

// module.exports = mongoose.model('SubSection', subSectionSchema)
const mongoose = require("mongoose");

const subSectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    timeDuration: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      trim: true,
    },
    videoUrl: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SubSection", subSectionSchema);
