const nodemailer = require("nodemailer");
const ContactMessage = require("../models/ContactMessage");

exports.contactUsController = async (req, res) => {
  try {
    const { firstname, lastname, email, phoneNo, message } = req.body;

    if (!firstname || !email || !phoneNo || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    await ContactMessage.create({
      firstname,
      lastname,
      email,
      phoneNo,
      message,
    });
    // Create mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // Your Gmail
        pass: process.env.MAIL_PASS, // App password (not regular Gmail password)
      },
    });

    const mailOptions = {
      from: email,
      to: "moirshad588@gmail.com", // 📬 Send to admin email
      subject: "New Contact Form Message",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNo}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Message sent to admin successfully!",
    });
  } catch (error) {
    console.error("Error in contact form:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to send message",
      error: error.message,
    });
  }
};
