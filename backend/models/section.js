// const mongoose = require('mongoose');

// const sectionSchema = new mongoose.Schema({
//     sectionName: {
//         type: String,
//     },
//     subSection: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'SubSection',
//             required:true
//         }
//     ]

// });

// module.exports = mongoose.model('Section', sectionSchema);
const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    sectionName: {
      type: String,
      required: true,
      trim: true,
    },
    subSection: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubSection",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Section", sectionSchema);
