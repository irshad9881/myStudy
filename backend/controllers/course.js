const Course = require("../models/course");
const User = require("../models/user");
const Category = require("../models/category");
const Section = require("../models/section");
const SubSection = require("../models/subSection");
const CourseProgress = require("../models/courseProgress");

const {
  uploadImageToCloudinary,
  deleteResourceFromCloudinary,
} = require("../utils/imageUploader");
const { convertSecondsToDuration } = require("../utils/secToDuration");

// ================ create new course ================
exports.createCourse = async (req, res) => {
  try {
    // extract data
    let {
      courseName,
      courseDescription,
      whatYouWillLearn,
      price,
      category,
      instructions: _instructions,
      status,
      tag: _tag,
      thumbnail,
    } = req.body;
    console.log("req.body = ", req.body);
    // Convert the tag and instructions from stringified Array to Array
    // const tag = JSON.parse(_tag);
    // const instructions = JSON.parse(_instructions);
    console.log("tag = ", _tag);
    console.log("instructions = ", _instructions);
    console.log("type of tag = ", typeof _tag);
    console.log("type of instructions = ", typeof _instructions);
    // if (typeof _tag !== "string" || typeof _instructions !== "string") {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Tag and Instructions must be valid JSON strings.",
    //   });
    // }
    // let tag, instructions;

    // try {
    //   tag = Array.isArray(_tag) ? _tag : JSON.parse(_tag);
    //   instructions = Array.isArray(_instructions)
    //     ? _instructions
    //     : JSON.parse(_instructions);
    // } catch (parseError) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Invalid JSON format in tag or instructions.",
    //     error: parseError.message,
    //   });
    // }
    // Accept tag and instructions directly as array or string
    let tag = _tag;
    let instructions = _instructions;

    // If accidentally sent as string (from form-data), parse it
    if (typeof _tag === "string") {
      try {
        tag = JSON.parse(_tag);
      } catch {
        return res.status(400).json({
          success: false,
          message: "Tag must be a valid JSON array.",
        });
      }
    }
    if (typeof _instructions === "string") {
      try {
        instructions = JSON.parse(_instructions);
      } catch {
        return res.status(400).json({
          success: false,
          message: "Instructions must be a valid JSON array.",
        });
      }
    }

    // get thumbnail of course
    //  thumbnail = req.files?.thumbnailImage;
    // console.log("thumbnailImage = ", thumbnail);
    // validation
    if (
      !courseName ||
      !courseDescription ||
      !whatYouWillLearn ||
      !price ||
      !category ||
      // !thumbnail ||
      !instructions.length ||
      !tag.length
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required",
      });
    }

    if (!status) {
      status = "Draft";
    }
    // check current user is instructor or not , bcoz only instructor can create
    // we have insert user id in req.user , (payload , while auth )
    const instructorId = req?.user.id;
    console.log("instructorId = ", instructorId);
    // check given category is valid or not
    const categoryDetails = await Category.findById(category);
    if (!categoryDetails) {
      return res.status(401).json({
        success: false,
        message: "Category Details not found",
      });
    }

    // upload thumbnail to cloudinary
    // const thumbnailDetails = await uploadImageToCloudinary(
    //   thumbnail,
    //   process.env.FOLDER_NAME
    // );
    let thumbnailDetails;

    if (req.files?.thumbnailImage && req.files.thumbnailImage.tempFilePath) {
      thumbnailDetails = await uploadImageToCloudinary(
        req.files.thumbnailImage,
        process.env.FOLDER_NAME
      );
    } else if (typeof req.body.thumbnail === "string") {
      thumbnailDetails = { secure_url: req.body.thumbnail }; // use the URL directly
    } else {
      return res.status(400).json({
        success: false,
        message: "Thumbnail image is required (upload a file or provide URL).",
      });
    }

    console.log("thumbnailDetails = ", thumbnailDetails);
    // create new course - entry in DB
    const newCourse = await Course.create({
      courseName,
      courseDescription,
      instructor: instructorId,
      whatYouWillLearn,
      price,
      category: categoryDetails._id,
      tag,
      status,
      instructions,
      thumbnail: thumbnailDetails?.secure_url,
      createdAt: Date.now(),
    });

    // add course id to instructor courses list, this is bcoz - it will show all created courses by instructor
    await User.findByIdAndUpdate(
      instructorId,
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );

    // Add the new course to the Categories
    const courseInsideCatorry = await Category.findByIdAndUpdate(
      { _id: category },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );
    console.log("courseInsideCatorry = ", courseInsideCatorry);
    // return response
    res.status(200).json({
      success: true,
      data: newCourse,
      message: "New Course created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error while creating new course",
    });
  }
};

// ================ show all courses ================
exports.getAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find(
      {},
      {
        courseName: true,
        courseDescription: true,
        price: true,
        thumbnail: true,
        instructor: true,
        ratingAndReviews: true,
        studentsEnrolled: true,
      }
    )
      .populate({
        path: "instructor",
        select: "firstName lastName email image",
      })
      .exec();

    return res.status(200).json({
      success: true,
      data: allCourses,
      message: "Data for all courses fetched successfully",
    });
  } catch (error) {
    // console.log('Error while fetching data of all courses');
    // console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error while fetching data of all courses",
    });
  }
};

// ================ Get Course Details ================
exports.getCourseDetails = async (req, res) => {
  try {
    // get course ID
    const { courseId } = req.body;

    // find course details
    const courseDetails = await Course.findOne({
      _id: courseId,
    })
      .populate({
        path: "instructor",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate("category")
      .populate("ratingAndReviews")

      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
          select: "-videoUrl",
        },
      })
      .exec();

    //validation
    if (!courseDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find the course with ${courseId}`,
      });
    }

    // if (courseDetails.status === "Draft") {
    //   return res.status(403).json({
    //     success: false,
    //     message: `Accessing a draft course is forbidden`,
    //   });
    // }

    // console.log('courseDetails -> ', courseDetails)
    let totalDurationInSeconds = 0;
    courseDetails.courseContent.forEach((content) => {
      content.subSection.forEach((subSection) => {
        const timeDurationInSeconds = parseInt(subSection?.timeDuration || 0);
        totalDurationInSeconds += timeDurationInSeconds;
      });
    });

    const totalDuration = convertSecondsToDuration(totalDurationInSeconds);

    //return response
    return res.status(200).json({
      success: true,
      data: {
        courseDetails,
        totalDuration,
      },
      message: "Fetched course data successfully",
    });
  } catch (error) {
    // console.log('Error while fetching course details');
    // console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Error while fetching course details",
    });
  }
};

// ================ Get Full Course Details ================
exports.getFullCourseDetails = async (req, res) => {
  try {
    const { courseId } = req.body;
    const userId = req.user.id;
    // console.log('courseId userId  = ', courseId, " == ", userId)

    const courseDetails = await Course.findOne({
      _id: courseId,
    })
      .populate({
        path: "instructor",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate("category")
      .populate("ratingAndReviews")
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();

    let courseProgressCount = await CourseProgress.findOne({
      courseID: courseId,
      userId: userId,
    });

    //   console.log("courseProgressCount : ", courseProgressCount)

    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: `Could not find course with id: ${courseId}`,
      });
    }

    // if (courseDetails.status === "Draft") {
    //   return res.status(403).json({
    //     success: false,
    //     message: `Accessing a draft course is forbidden`,
    //   });
    // }

    //   count total time duration of course
    let totalDurationInSeconds = 0;
    courseDetails.courseContent.forEach((content) => {
      content.subSection.forEach((subSection) => {
        const timeDurationInSeconds = parseInt(subSection.timeDuration || 0);
        totalDurationInSeconds += timeDurationInSeconds;
      });
    });

    const totalDuration = convertSecondsToDuration(totalDurationInSeconds);

    return res.status(200).json({
      success: true,
      data: {
        courseDetails,
        totalDuration,
        completedVideos: courseProgressCount?.completedVideos
          ? courseProgressCount?.completedVideos
          : [],
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================ Edit Course Details ================
exports.editCourse = async (req, res) => {
  try {
    // const { courseId } = req.body;
    // const updates = req.body;
    const { courseId, ...updates } = req.body;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // If Thumbnail Image is found, update it
    if (req.files) {
      // console.log("thumbnail update")
      const thumbnail = req.files.thumbnailImage;
      const thumbnailImage = await uploadImageToCloudinary(
        thumbnail,
        process.env.FOLDER_NAME
      );
      course.thumbnail = thumbnailImage.secure_url;
    }

    // Update only the fields that are present in the request body
    for (const key in updates) {
      if (updates.hasOwnProperty(key)) {
        if (key === "tag" || key === "instructions") {
          course[key] = JSON.parse(updates[key]);
        } else {
          course[key] = updates[key];
        }
      }
    }

    // updatedAt
    course.updatedAt = Date.now();

    //   save data
    await course.save();

    const updatedCourse = await Course.findOne({
      _id: courseId,
    })
      .populate({
        path: "instructor",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate("category")
      .populate("ratingAndReviews")
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();

    // success response
    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: updatedCourse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error while updating course",
      error: error.message,
    });
  }
};

// ================ Get a list of Course for a given Instructor ================
exports.getInstructorCourses = async (req, res) => {
  try {
    // Get the instructor ID from the authenticated user or request body
    const instructorId = req.user.id;

    // Find all courses belonging to the instructor
    const instructorCourses = await Course.find({
      instructor: instructorId,
    }).sort({ createdAt: -1 });

    // Return the instructor's courses
    res.status(200).json({
      success: true,
      data: instructorCourses,
      // totalDurationInSeconds:totalDurationInSeconds,
      message: "Courses made by Instructor fetched successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve instructor courses",
      error: error.message,
    });
  }
};

// ================ Delete the Course ================
exports.deleteCourse = async (req, res) => {
  try {
    const { courseId } = req.body;

    // Find the course
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Unenroll students from the course
    const studentsEnrolled = course.studentsEnrolled;
    //    Note: This runs sequentially and could be slow if many students.
    //     for (const studentId of studentsEnrolled) {
    //       await User.findByIdAndUpdate(studentId, {
    //         $pull: { courses: courseId },
    //       });
    //     }
    //
    // Uses Promise.all for parallel:
    await Promise.all(
      studentsEnrolled.map((studentId) =>
        User.findByIdAndUpdate(studentId, { $pull: { courses: courseId } })
      )
    );
    // delete course thumbnail From Cloudinary
    await deleteResourceFromCloudinary(course?.thumbnail);

    // Delete sections and sub-sections
    const courseSections = course.courseContent;
    // for (const sectionId of courseSections) {
    //   // Delete sub-sections of the section
    //   const section = await Section.findById(sectionId);
    //   if (section) {
    //     const subSections = section.subSection;
    //     for (const subSectionId of subSections) {
    //       const subSection = await SubSection.findById(subSectionId);
    //       if (subSection) {
    //         await deleteResourceFromCloudinary(subSection?.videoUrl); // delete course videos From Cloudinary
    //       }
    //       await SubSection.findByIdAndDelete(subSectionId);
    //     }
    //   }

    //   // Delete the section
    //   await Section.findByIdAndDelete(sectionId);
    // }
    await Promise.all(
      courseSections.map(async (sectionId) => {
        const section = await Section.findById(sectionId);
        if (section) {
          await Promise.all(
            section.subSection.map(async (subSectionId) => {
              const subSection = await SubSection.findById(subSectionId);
              if (subSection?.videoUrl) {
                await deleteResourceFromCloudinary(subSection.videoUrl);
              }
              await SubSection.findByIdAndDelete(subSectionId);
            })
          );
        }
        await Section.findByIdAndDelete(sectionId);
      })
    );
    // Delete the course
    await Course.findByIdAndDelete(courseId);

    return res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error while Deleting course",
      error: error.message,
    });
  }
};
