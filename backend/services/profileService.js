// services/profileService.js
const User = require("../models/user");
const Profile = require("../models/profile");
const Course = require("../models/course");
// const Profile = require('../models/profile');
// const User = require('../models/user');
const { deleteResourceFromCloudinary } = require("../utils/imageUploader");
// const User = require("../models/user");
const CourseProgress = require("../models/courseProgress");
const { convertSecondsToDuration } = require("../utils/secToDuration");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.updateUserProfileService = async ({ userId, profileData }) => {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  const profile = await Profile.findById(user.additionalDetails);
  if (!profile) throw new Error("Profile not found");

  const { firstName, lastName, gender, dateOfBirth, about, contactNumber } =
    profileData;

  user.firstName = firstName;
  user.lastName = lastName;
  await user.save();

  Object.assign(profile, { gender, dateOfBirth, about, contactNumber });
  await profile.save();

  return await User.findById(userId).populate("additionalDetails");
};
exports.deleteUserAccountService = async (userId) => {
  const userDetails = await User.findById(userId);
  if (!userDetails) throw new Error("User not found");

  // Delete profile image from Cloudinary
  await deleteResourceFromCloudinary(userDetails.image);

  // Remove user from each course's enrolled list
  const enrolledCourses = userDetails.courses;
  for (const courseId of enrolledCourses) {
    await Course.findByIdAndUpdate(courseId, {
      $pull: { studentsEnrolled: userId },
    });
  }

  // Delete user profile
  await Profile.findByIdAndDelete(userDetails.additionalDetails);

  // Delete user account
  await User.findByIdAndDelete(userId);
};
exports.getUserEnrolledCoursesService = async (userId) => {
  let userDetails = await User.findOne({ _id: userId })
    .populate({
      path: "courses",
      populate: {
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      },
    })
    .exec();

  if (!userDetails) throw new Error("User not found");

  userDetails = userDetails.toObject();

  for (let i = 0; i < userDetails.courses.length; i++) {
    let totalDurationInSeconds = 0;
    let subSectionCount = 0;

    const course = userDetails.courses[i];

    // calculate total duration and subSection count
    for (const content of course.courseContent) {
      totalDurationInSeconds += content.subSection.reduce(
        (acc, curr) => acc + parseInt(curr.timeDuration || 0),
        0
      );
      subSectionCount += content.subSection.length;
    }

    course.totalDuration = convertSecondsToDuration(totalDurationInSeconds);

    const courseProgress = await CourseProgress.findOne({
      courseID: course._id,
      userId: userId,
    });

    const completedCount = courseProgress?.completedVideos?.length || 0;

    // calculate progress
    course.progressPercentage =
      subSectionCount === 0
        ? 100
        : Math.round((completedCount / subSectionCount) * 10000) / 100;
  }

  return userDetails.courses;
};
exports.updateUserProfileImageService = async (userId, profileImage) => {
  if (!profileImage) {
    throw new Error("No profile image provided");
  }

  const image = await uploadImageToCloudinary(
    profileImage,
    process.env.FOLDER_NAME,
    1000,
    1000
  );

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { image: image.secure_url },
    { new: true }
  ).populate("additionalDetails");

  return updatedUser;
};
exports.getUserDetailsService = async (userId) => {
  const userDetails = await User.findById(userId).populate("additionalDetails").exec();

  if (!userDetails) {
    throw new Error("User not found");
  }

  return userDetails;
};
exports.getInstructorDashboardService = async (instructorId) => {
  const courseDetails = await Course.find({ instructor: instructorId });

  const courseData = courseDetails.map((course) => {
    const totalStudentsEnrolled = course.studentsEnrolled.length;
    const totalAmountGenerated = totalStudentsEnrolled * course.price;

    return {
      _id: course._id,
      courseName: course.courseName,
      courseDescription: course.courseDescription,
      totalStudentsEnrolled,
      totalAmountGenerated,
    };
  });

  return courseData;
};