const mongoose = require("mongoose");

const submittedWork = mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
<<<<<<< HEAD
    passport: { type: String, required: true },
    video: { type: String, required: true },
=======
    passport: {
      type: String,
      default:
        "https://res.cloudinary.com/dvc7i8g1a/image/upload/v1692259839/xqm81bw94x7h6velrwha.png",
    },
    video: {
      type: String,
      default:
        "https://res.cloudinary.com/dvc7i8g1a/image/upload/v1692259839/xqm81bw94x7h6velrwha.png",
    },
    coachAssisted: { type: Boolean, default: false },
>>>>>>> master
  },
  { versionKey: false },
  { timestamps: true }
);

const Work = mongoose.model("Work", submittedWork);

module.exports = Work;
