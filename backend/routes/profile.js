const express = require("express");
const router = express.Router();
const validateRequest = require("../middleware/validateRequest");
const { updateProfileSchema } = require("../validators/profileValidator");
const { auth, isInstructor } = require("../middleware/auth");

// controllers
const {
  updateProfile,
  updateUserProfileImage,
  getUserDetails,
  getEnrolledCourses,
  deleteAccount,
  instructorDashboard,
} = require("../controllers/profile");

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************

// Delete User Account
router.delete("/deleteProfile", auth, deleteAccount);
// router.put("/updateProfile", auth, updateProfile);
router.put(
  "/updateProfile",
  auth,
  validateRequest(updateProfileSchema),
  updateProfile
);
router.get("/getUserDetails", auth, getUserDetails);

// Get Enrolled Courses
router.get("/getEnrolledCourses", auth, getEnrolledCourses);

// update profile image
router.put("/updateUserProfileImage", auth, updateUserProfileImage);

// instructor Dashboard Details
router.get("/instructorDashboard", auth, isInstructor, instructorDashboard);

module.exports = router;
