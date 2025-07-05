const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT, // Required
      secure: process.env.MAIL_SECURE === "true", // true for 465, false for 587
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      //   from: "StudyNotion || by Irshad",
      from: `"StudyNotion || by Irshad" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    // console.log('Info of sent mail - ', info);
    return info;
  } catch (error) {
    // console.log("Error while sending mail (mailSender) - ", email);
    console.error("Error while sending mail (mailSender):", error);
    throw error;
  }
};

module.exports = mailSender;
