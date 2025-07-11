const Section = require("../models/section");
const SubSection = require("../models/subSection");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

// ================ create SubSection ================
exports.createSubSection = async (req, res) => {
  try {
    // extract data
    const { title, description, sectionId, timeDuration } = req.body;

    // extract video file

    const videoFile = req.files?.video;
    if (!videoFile) {
      return res.status(400).json({
        success: false,
        message: "Video file is required",
      });
    }
    console.log("videoFile ", videoFile);
    console.log("req.body ", req.body);
    // console.log("videoUrl ", videoUrl);
    console.log("timeDuration ", timeDuration);
    console.log("sectionId ", sectionId);
    console.log("title ", title);
    console.log("description ", description);
    // validation
    if (
      !title ||
      !description ||
      !videoFile ||
      !sectionId
      // !timeDuration
      // !videoUrl
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const section = await Section.findById(sectionId);
    if (!section) {
      return res.status(404).json({
        success: false,
        message: "Section not found",
      });
    }
    // // upload video to cloudinary
    // const videoFileDetails = await uploadImageToCloudinary(
    //   videoFile,
    //   process.env.FOLDER_NAME
    // );

    // // create entry in DB
    // const SubSectionDetails = await SubSection.create({
    //   title,
    //   // timeDuration: videoFileDetails.duration,
    //   timeDuration: videoFileDetails.duration || timeDuration, // fallback to input
    //   description,
    //   videoUrl: videoFileDetails.secure_url,
    // });
    // Upload to Cloudinary
    const videoFileDetails = await uploadImageToCloudinary(
      videoFile,
      process.env.FOLDER_NAME
    );

    // Validate cloudinary response
    if (!videoFileDetails || !videoFileDetails.secure_url) {
      return res.status(500).json({
        success: false,
        message: "Video upload failed",
      });
    }

    // Save to DB
    const SubSectionDetails = await SubSection.create({
      title,
      timeDuration: videoFileDetails.duration || timeDuration,
      description,
      videoUrl: videoFileDetails.secure_url,
    });
    // link subsection id to section
    // Update the corresponding section with the newly created sub-section
    const updatedSection = await Section.findByIdAndUpdate(
      { _id: sectionId },
      { $push: { subSection: SubSectionDetails._id } },
      { new: true }
    ).populate("subSection");

    // return response
    res.status(200).json({
      success: true,
      data: updatedSection,
      message: "SubSection created successfully",
    });
  } catch (error) {
    console.log("Error while creating SubSection");
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error while creating SubSection",
    });
  }
};

// ================ Update SubSection ================
exports.updateSubSection = async (req, res) => {
  try {
    const { sectionId, subSectionId, title, description } = req.body;

    // validation
    if (!subSectionId) {
      return res.status(400).json({
        success: false,
        message: "subSection ID is required to update",
      });
    }

    // find in DB
    const subSection = await SubSection.findById(subSectionId);

    if (!subSection) {
      return res.status(404).json({
        success: false,
        message: "SubSection not found",
      });
    }

    // add data
    if (title) {
      subSection.title = title;
    }

    if (description) {
      subSection.description = description;
    }

    // upload video to cloudinary
    if (req.files && req.files.videoFile !== undefined) {
      const video = req.files.videoFile;
      const uploadDetails = await uploadImageToCloudinary(
        video,
        process.env.FOLDER_NAME
      );
      subSection.videoUrl = uploadDetails.secure_url;
      subSection.timeDuration = uploadDetails.duration;
    }

    // save data to DB
    await subSection.save();

    const updatedSection = await Section.findById(sectionId).populate(
      "subSection"
    );

    return res.json({
      success: true,
      data: updatedSection,
      message: "Section updated successfully",
    });
  } catch (error) {
    console.error("Error while updating the section");
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Error while updating the section",
    });
  }
};

// ================ Delete SubSection ================
exports.deleteSubSection = async (req, res) => {
  try {
    const { subSectionId, sectionId } = req.body;

    if (!subSectionId || !sectionId) {
      return res.status(400).json({
        success: false,
        message: "subSectionId and sectionId are required",
      });
    }

    await Section.findByIdAndUpdate(
      { _id: sectionId },
      {
        $pull: {
          subSection: subSectionId,
        },
      }
    );

    // delete from DB
    const subSection = await SubSection.findByIdAndDelete({
      _id: subSectionId,
    });

    if (!subSection) {
      return res
        .status(404)
        .json({ success: false, message: "SubSection not found" });
    }

    const updatedSection = await Section.findById(sectionId).populate(
      "subSection"
    );

    // In frontned we have to take care - when subsection is deleted we are sending ,
    // only section data not full course details as we do in others

    // success response
    return res.json({
      success: true,
      data: updatedSection,
      message: "SubSection deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,

      error: error.message,
      message: "An error occurred while deleting the SubSection",
    });
  }
};
