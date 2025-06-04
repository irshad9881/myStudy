const cloudinary = require("cloudinary").v2;

exports.cloudinaryConnect = () => {
  if (
    !process.env.CLOUD_NAME ||
    !process.env.API_KEY ||
    !process.env.API_SECRET
  ) {
    console.error("❌ Cloudinary environment variables missing.");
    return;
  }

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  console.log("✅ Cloudinary connected successfully");
};
