// AUTH , IS STUDENT , IS INSTRUCTOR , IS ADMIN

const jwt = require("jsonwebtoken");
require("dotenv").config();

// ================ AUTH ================
// user Authentication by checking token validating
exports.auth = (req, res, next) => {
  try {
    // extract token by anyone from this 3 ways

    const authHeader = req.header("Authorization");
    // console.log("authHeader => ", authHeader);
    const token =
      req.body?.token ||
      req.cookies?.token ||
      (authHeader && authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : null);
    // console.log("token => ", token);
    // if token is missing
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is Missing",
      });
    }
    // verify token
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      // console.log('verified decode token => ', decode);

      // *********** example from console ***********
      // verified decode token =>  {
      //     email: 'buydavumli@biyac.com',
      //     id: '650d6ae2914831142c702e4c',
      //     accountType: 'Student',
      //     iat: 1699452446,
      //     exp: 1699538846
      //   }
      console.log("decode => ", decode);
      req.user = decode;
      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        error: error.message,
        message: "Error while decoding token",
      });
    }
    // go to next middleware
    // next();
  } catch (error) {
    console.log("Error while token validating");
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while token validating",
    });
  }
};

// ================ IS STUDENT ================
exports.isStudent = (req, res, next) => {
  try {
    if (req.user?.accountType != "Student") {
      return res.status(401).json({
        success: false,
        message: "This Page is protected only for student",
      });
    }
    // go to next middleware
    next();
  } catch (error) {
    console.log("Error while checking user validity with student accountType");
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Error while checking user validity with student accountType",
    });
  }
};

// ================ IS INSTRUCTOR ================
exports.isInstructor = (req, res, next) => {
  try {
    if (req.user?.accountType != "Instructor") {
      return res.status(401).json({
        success: false,
        message: "This Page is protected only for Instructor",
      });
    }
    // go to next middleware
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Error while checking user validity with Instructor accountType",
    });
  }
};

// ================ IS ADMIN ================
exports.isAdmin = (req, res, next) => {
  try {
    if (req.user?.accountType != "Admin") {
      // return res.status(401).json({
      //   success: false,
      //   message: "This Page is protected only for Admin",
      // });
      return res.status(403).json({
        success: false,
        message: "This Page is protected only for Admin",
      });
    }
    // go to next middleware
    next();
  } catch (error) {
    console.log("Error while checking user validity with Admin accountType");
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Error while checking user validity with Admin accountType",
    });
  }
};
