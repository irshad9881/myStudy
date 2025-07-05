const cloudinary = require("cloudinary").v2;

// exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
//   try {
//     const options = { folder };
//     if (height) options.height = height;
//     if (quality) options.quality = quality;

//     // // options.resourse_type = 'auto';
//     // options.resource_type = 'auto';
//     // return await cloudinary.uploader.upload(file.tempFilePath, options);
//     // Automatically detect whether to upload as image or video
//     const isVideo = file.mimetype && file.mimetype.startsWith("video");
//     options.resource_type = isVideo ? "video" : "image";

//     // Use chunked upload for large video files
//     if (isVideo) {
//       return await cloudinary.uploader.upload_large(file.tempFilePath, options);
//     }

//     return await cloudinary.uploader.upload(file.tempFilePath, options);
//   } catch (error) {
//     console.log("Error while uploading image");
//     console.log(error);
//   }
// };

// Function to delete a resource by public ID
// exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
//   try {
//     const options = { folder };
//     if (height) options.height = height;
//     if (quality) options.quality = quality;

//     const isVideo = file.mimetype && file.mimetype.startsWith("video");
//     options.resource_type = isVideo ? "video" : "image";

//     console.log("Uploading file to Cloudinary...");
//     console.log("File path:", file.tempFilePath);
//     console.log("Resource type:", options.resource_type);

//     const uploadFn = isVideo
//       ? cloudinary.uploader.upload_large
//       : cloudinary.uploader.upload;

//     const result = await uploadFn(file.tempFilePath, options);

//     console.log("✅ Cloudinary Upload Result:", result);
//     return result;
//   } catch (error) {
//     console.error("❌ Error during Cloudinary upload:");
//     console.error(error);
//     throw new Error("Cloudinary upload failed");
//   }
// };

const fs = require("fs");

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  try {
    const options = { folder };
    if (height) options.height = height;
    if (quality) options.quality = quality;

    const isVideo = file.mimetype && file.mimetype.startsWith("video");
    options.resource_type = isVideo ? "video" : "image";

    console.log("Uploading file to Cloudinary...");
    console.log("File path:", file.tempFilePath);
    console.log("Resource type:", options.resource_type);

    // Handle video upload with upload_large manually as a promise
    if (isVideo) {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_large(
          file.tempFilePath,
          options,
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
      });
      console.log("✅ Cloudinary Upload Result:", result);
      return result;
    }

    // Handle image upload
    const result = await cloudinary.uploader.upload(file.tempFilePath, options);
    console.log("✅ Cloudinary Upload Result:", result);
    return result;
  } catch (error) {
    console.error("❌ Error during Cloudinary upload:");
    console.error(error);
    throw new Error("Video upload failed");
  } finally {
    // Clean up temp file if exists
    if (fs.existsSync(file.tempFilePath)) {
      fs.unlinkSync(file.tempFilePath);
    }
  }
};

exports.deleteResourceFromCloudinary = async (url) => {
  if (!url) return;

  try {
    const result = await cloudinary.uploader.destroy(url);
    console.log(`Deleted resource with public ID: ${url}`);
    console.log("Delete Resourse result = ", result);
    return result;
  } catch (error) {
    console.error(`Error deleting resource with public ID ${url}:`, error);
    throw error;
  }
};
