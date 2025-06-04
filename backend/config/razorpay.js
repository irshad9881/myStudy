const Razorpay = require('razorpay');
require('dotenv').config();

if (!process.env.RAZORPAY_KEY || !process.env.RAZORPAY_SECRET) {
	console.error("❌ Razorpay environment variables missing.");
}

exports.instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY,
	key_secret: process.env.RAZORPAY_SECRET,
});
