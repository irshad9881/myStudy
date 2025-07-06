// import React from "react";

// import FoundingStory from "../assets/Images/FoundingStory.png";
// import BannerImage1 from "../assets/Images/aboutus1.webp";
// import BannerImage2 from "../assets/Images/aboutus2.webp";
// import BannerImage3 from "../assets/Images/aboutus3.webp";

// import Footer from "../components/common/Footer";
// import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
// import LearningGrid from "../components/core/AboutPage/LearningGrid";
// import Quote from "../components/core/AboutPage/Quote";
// import StatsComponenet from "../components/core/AboutPage/Stats";
// import HighlightText from "../components/core/HomePage/HighlightText";
// import Img from "../components/common/Img";
// import ReviewSlider from "./../components/common/ReviewSlider";

// import { motion } from "framer-motion";
// import { fadeIn } from "../components/common/motionFrameVarients";
// import { FaEyeLowVision } from "react-icons/fa6";
// import { FaBullseye, FaEye } from "react-icons/fa";
// import { GiArcheryTarget } from "react-icons/gi";
// const fadeUpVariant = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// const About = () => {
//   return (
//     <div>
//       <section className="bg-richblack-700">
//         <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
//           <motion.header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
//             <motion.p
//               variants={fadeIn("down", 0.1)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.1 }}
//             >
//               {" "}
//               Driving Innovation in Online Education for a
//               <HighlightText text={"Brighter Future"} />
//             </motion.p>

//             <motion.p
//               variants={fadeIn("up", 0.1)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.1 }}
//               className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]"
//             >
//               IqraLight is at the forefront of driving innovation in online
//               education. We're passionate about creating a brighter future by
//               offering cutting-edge courses, leveraging emerging technologies,
//               and nurturing a vibrant learning community.
//             </motion.p>
//           </motion.header>

//           <div className="sm:h-[70px] lg:h-[150px]"></div>

//           {/* <div className=" absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
//             <Img src={BannerImage1} alt="" />
//             <Img src={BannerImage2} alt="" />
//             <Img src={BannerImage3} alt="" />
//           </div> */}
//           {/* <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-[30%] px-4 sm:px-8">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 items-end">
//               {[BannerImage1, BannerImage2, BannerImage3].map((src, i) => (
//                 <div
//                   key={i}
//                   className="group relative overflow-hidden rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
//                 >
//                   <img
//                     src={src}
//                     alt={`Banner ${i + 1}`}
//                     className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-in-out group-hover:scale-110"
//                   />

//                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 rounded-xl"></div>
//                 </div>
//               ))}
//             </div>
//           </div> */}
//           <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-[30%] px-2 sm:px-4 md:px-8">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 items-end">
//               {[BannerImage1, BannerImage2, BannerImage3].map((src, i) => (
//                 <div
//                   key={i}
//                   className="group relative overflow-hidden rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
//                 >
//                   <img
//                     src={src}
//                     alt={`Banner ${i + 1}`}
//                     className="w-full max-h-[220px] sm:max-h-[250px] lg:max-h-[320px] object-cover rounded-xl transition-transform duration-700 ease-in-out group-hover:scale-110"
//                   />
//                   {/* Optional: Cool overlay on hover */}
//                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 rounded-xl"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="border-b border-richblack-700">
//         <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
//           <div className="h-[100px] "></div>
//           <Quote />
//         </div>
//       </section>

//       <section>
//         <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
//           <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
//             <motion.div
//               variants={fadeIn("right", 0.1)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.1 }}
//               className="my-24 flex lg:w-[50%] flex-col gap-10"
//             >
//               <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
//                 Our Founding Story
//               </h1>
//               <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
//                 Our e-learning platform was born out of a shared vision and
//                 passion for transforming education. It all began with a group of
//                 educators, technologists, and lifelong learners who recognized
//                 the need for accessible, flexible, and high-quality learning
//                 opportunities in a rapidly evolving digital world.
//               </p>
//               <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
//                 As experienced educators ourselves, we witnessed firsthand the
//                 limitations and challenges of traditional education systems. We
//                 believed that education should not be confined to the walls of a
//                 classroom or restricted by geographical boundaries. We
//                 envisioned a platform that could bridge these gaps and empower
//                 individuals from all walks of life to unlock their full
//                 potential.
//               </p>
//             </motion.div>

//             <motion.div
//               variants={fadeIn("left", 0.1)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.1 }}
//             >
//               <Img
//                 src={FoundingStory}
//                 alt="FoundingStory"
//                 className="shadow-[0_0_20px_0] shadow-[#FC6767]"
//               />
//             </motion.div>
//           </div>

//           <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
//             <div className="my-24 flex lg:w-[40%] flex-col gap-10">
//               {/* <FaEye className="text-5xl" />
//               <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
//                 Our Vision
//               </h1> */}
//               {/* <div className="flex items-center gap-3">
//                 <FaEye className="text-5xl text-[#FF512F]" />
//                 <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
//                   Our Vision
//                 </h1>
//               </div> */}
//               <div className="flex items-center gap-3 group transition-all duration-500">
//                 <FaEye className="text-5xl text-[#FF512F] transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
//                 <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[65%] transition-all duration-500 group-hover:tracking-wider group-hover:scale-105">
//                   Our Vision
//                 </h1>
//               </div>
//               <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
//                 With this vision in mind, we set out on a journey to create an
//                 e-learning platform that would revolutionize the way people
//                 learn. Our team of dedicated experts worked tirelessly to
//                 develop a robust and intuitive platform that combines
//                 cutting-edge technology with engaging content, fostering a
//                 dynamic and interactive learning experience.
//               </p>
//             </div>

//             <div className="my-24 flex lg:w-[40%] flex-col gap-10">
//               {/* <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
//                 Our Mission
//               </h1> */}
//               {/* <div className="flex items-center gap-3">
//                 <GiArcheryTarget className="text-5xl text-[#1FA2FF]" />
//                 <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%]">
//                   Our Mission
//                 </h1>
//               </div> */}
//               <div className="flex items-center gap-3 group">
//                 <GiArcheryTarget className="text-5xl text-[#1FA2FF] transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
//                 <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] transition-all duration-700 group-hover:tracking-wide group-hover:scale-105">
//                   Our Mission
//                 </h1>
//               </div>
//               <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
//                 Our mission goes beyond just delivering courses online. We
//                 wanted to create a vibrant community of learners, where
//                 individuals can connect, collaborate, and learn from one
//                 another. We believe that knowledge thrives in an environment of
//                 sharing and dialogue, and we foster this spirit of collaboration
//                 through forums, live sessions, and networking opportunities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <StatsComponenet />

//       <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
//         <LearningGrid />
//         <ContactFormSection />
//       </section>

//       {/* Reviws from Other Learner */}
//       <div className=" my-20 px-5 text-white ">
//         {/* <h1 className="text-center text-4xl font-semibold mt-8">
//           Reviews from other learners
//         </h1> */}
//         <h1
//           className="text-center text-4xl sm:text-5xl font-extrabold mt-8
//              bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]
//              bg-clip-text text-transparent
//              animate-fadeInUp tracking-tight"
//         >
//           Reviews from other learners
//         </h1>
//         <ReviewSlider />
//       </div>

//       {/* footer */}
//       <Footer />
//     </div>
//   );
// };

// export default About;

// import React from "react";
// import FoundingStory from "../assets/Images/FoundingStory.png";
// import BannerImage1 from "../assets/Images/aboutus1.webp";
// import BannerImage2 from "../assets/Images/aboutus2.webp";
// import BannerImage3 from "../assets/Images/aboutus3.webp";

// import Footer from "../components/common/Footer";
// import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
// import LearningGrid from "../components/core/AboutPage/LearningGrid";
// import Quote from "../components/core/AboutPage/Quote";
// import StatsComponenet from "../components/core/AboutPage/Stats";
// import HighlightText from "../components/core/HomePage/HighlightText";
// import Img from "../components/common/Img";
// import ReviewSlider from "./../components/common/ReviewSlider";

// import { motion } from "framer-motion";
// import { fadeIn } from "../components/common/motionFrameVarients";
// import { FaEye } from "react-icons/fa";
// import { GiArcheryTarget } from "react-icons/gi";

// const About = () => {
//   return (
//     <div>
//       <section className="bg-richblack-700">
//         <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
//           <motion.header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
//             <motion.p
//               variants={fadeIn("down", 0.1)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.1 }}
//             >
//               Driving Innovation in Online Education for a
//               <HighlightText text={"Brighter Future"} />
//             </motion.p>

//             <motion.p
//               variants={fadeIn("up", 0.1)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.1 }}
//               className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]"
//             >
//               IqraLight is at the forefront of driving innovation in online
//               education. We're passionate about creating a brighter future by
//               offering cutting-edge courses, leveraging emerging technologies,
//               and nurturing a vibrant learning community.
//             </motion.p>
//           </motion.header>

//           {/* Spacer for image section */}
//           <div className="h-[100px] sm:h-[140px] md:h-[180px] lg:h-[240px]"></div>

//           {/* Responsive Image Grid */}
//           {/* <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-[30%] px-4 sm:px-6">
//             <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
//               {[BannerImage1, BannerImage2, BannerImage3].map((src, i) => (
//                 <div
//                   key={i}
//                   className="group relative overflow-hidden rounded-xl shadow-xl transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
//                 >
//                   <img
//                     src={src}
//                     alt={`Banner ${i + 1}`}
//                     className="w-full h-auto max-h-[180px] sm:max-h-[220px] md:max-h-[260px] lg:max-h-[300px] object-cover object-center rounded-xl transition-transform duration-700 ease-in-out group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 rounded-xl"></div>
//                 </div>
//               ))}
//             </div>
//           </div> */}
//           <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-[30%] px-2 sm:px-6">
//             <div className="flex flex-row items-end gap-4 overflow-x-auto scrollbar-hide sm:justify-center">
//               {[BannerImage1, BannerImage2, BannerImage3].map((src, i) => (
//                 <div
//                   key={i}
//                   className="group relative flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px] overflow-hidden rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
//                 >
//                   <img
//                     src={src}
//                     alt={`Banner ${i + 1}`}
//                     className="w-full h-auto object-cover rounded-xl transition-transform duration-700 ease-in-out group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 rounded-xl"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="border-b border-richblack-700">
//         <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
//           <div className="h-[100px]" />
//           <Quote />
//         </div>
//       </section>

//       <section>
//         <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
//           <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
//             <motion.div
//               variants={fadeIn("right", 0.1)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.1 }}
//               className="my-24 flex lg:w-[50%] flex-col gap-10"
//             >
//               <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
//                 Our Founding Story
//               </h1>
//               <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
//                 Our e-learning platform was born out of a shared vision and
//                 passion for transforming education...
//               </p>
//               <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
//                 As experienced educators ourselves, we witnessed firsthand the
//                 limitations and challenges of traditional education systems...
//               </p>
//             </motion.div>

//             <motion.div
//               variants={fadeIn("left", 0.1)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.1 }}
//             >
//               <Img
//                 src={FoundingStory}
//                 alt="FoundingStory"
//                 className="shadow-[0_0_20px_0] shadow-[#FC6767]"
//               />
//             </motion.div>
//           </div>

//           <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
//             <div className="my-24 flex lg:w-[40%] flex-col gap-10">
//               <div className="flex items-center gap-3 group transition-all duration-500">
//                 <FaEye className="text-5xl text-[#FF512F] group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500" />
//                 <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[65%] group-hover:tracking-wider group-hover:scale-105 transition-all duration-500">
//                   Our Vision
//                 </h1>
//               </div>
//               <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
//                 With this vision in mind, we set out on a journey to create an
//                 e-learning platform...
//               </p>
//             </div>

//             <div className="my-24 flex lg:w-[40%] flex-col gap-10">
//               <div className="flex items-center gap-3 group">
//                 <GiArcheryTarget className="text-5xl text-[#1FA2FF] group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500" />
//                 <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] group-hover:tracking-wide group-hover:scale-105 transition-all duration-700">
//                   Our Mission
//                 </h1>
//               </div>
//               <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
//                 Our mission goes beyond just delivering courses online...
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <StatsComponenet />

//       <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
//         <LearningGrid />
//         <ContactFormSection />
//       </section>

//       {/* Reviews */}
//       <div className="my-20 px-5 text-white">
//         <h1
//           className="text-center text-4xl sm:text-5xl font-extrabold mt-8
//              bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]
//              bg-clip-text text-transparent animate-fadeInUp tracking-tight"
//         >
//           Reviews from other learners
//         </h1>
//         <ReviewSlider />
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default About;
import React, { useEffect, useRef } from "react";

import FoundingStory from "../assets/Images/FoundingStory.png";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import BannerImage4 from "../assets/Images/aboutus4.webp";
import BannerImage5 from "../assets/Images/aboutus5.webp";

import Footer from "../components/common/Footer";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponenet from "../components/core/AboutPage/Stats";
import HighlightText from "../components/core/HomePage/HighlightText";
import Img from "../components/common/Img";
import ReviewSlider from "./../components/common/ReviewSlider";

import { motion } from "framer-motion";
import { fadeIn } from "../components/common/motionFrameVarients";
import { FaEye } from "react-icons/fa";
import { GiArcheryTarget } from "react-icons/gi";


const About = () => {
  const carouselRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (carouselRef.current) {
  //       const container = carouselRef.current;
  //       const firstChild = container.children[0];
  //       container.style.transition = "transform 0.5s ease-in-out";
  //       container.style.transform = `translateX(-${
  //         firstChild.offsetWidth + 16
  //       }px)`;

  //       setTimeout(() => {
  //         container.appendChild(firstChild);
  //         container.style.transition = "none";
  //         container.style.transform = "translateX(0)";
  //       }, 500);
  //     }
  //   }, 2500);

  //   return () => clearInterval(interval);
  // }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const firstChild = container.children[0];
        const scrollDistance = firstChild.offsetWidth + 16;

        container.style.transition = "transform 0.7s ease-in-out";
        container.style.transform = `translateX(-${scrollDistance}px)`;

        setTimeout(() => {
          container.appendChild(firstChild);
          container.style.transition = "none";
          container.style.transform = "translateX(0)";
        }, 700);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <motion.header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            <motion.p
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              Driving Innovation in Online Education for a
              <HighlightText text={"Brighter Future"} />
            </motion.p>

            <motion.p
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]"
            >
              IqraLight is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </motion.p>
          </motion.header>

          <div className="sm:h-[70px] lg:h-[150px]" />

          {/* Carousel Section */}
          {/* <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-[30%] px-2 sm:px-6">
            <div className="overflow-hidden">
              <div
                ref={carouselRef}
                className="flex items-end gap-4"
                style={{ willChange: "transform" }}
              >
                {[
                  BannerImage1,
                  BannerImage5,
                  BannerImage3,
                  BannerImage4,
                  BannerImage2,
                  // BannerImage3,
                ].map((src, i) => (
                  <div
                    key={i}
                    className="group flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] rounded-xl shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
                  >
                    <img
                      src={src}
                      alt={`Banner ${i + 1}`}
                      className="w-full h-auto object-cover rounded-xl transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 rounded-xl" />
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          {/* <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-[30%] px-2 sm:px-6">
            <div className="overflow-hidden">
              <div
                ref={carouselRef}
                className="flex items-end gap-4"
                style={{ willChange: "transform" }}
              >
                {[
                  BannerImage1,
                  BannerImage5,
                  BannerImage3,
                  BannerImage4,
                  BannerImage2,
                ].map((src, i) => (
                  <div
                    key={i}
                    className="group flex-shrink-0 rounded-xl shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
                  >
                    <img
                      src={src}
                      alt={`Banner ${i + 1}`}
                      className="w-[160px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[260px] md:h-[160px] lg:w-[320px] lg:h-[250px] object-cover rounded-xl transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 rounded-xl" />
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-[30%] px-2 sm:px-6">
            <div className="overflow-hidden">
              <div
                ref={carouselRef}
                className="flex items-end gap-4 transition-transform duration-700 ease-in-out"
                style={{ willChange: "transform" }}
              >
                {[
                  BannerImage1,
                  BannerImage5,
                  BannerImage3,
                  BannerImage4,
                  BannerImage2,
                ].map((src, i) => (
                  <div
                    key={i}
                    className="group relative flex-shrink-0 rounded-xl shadow-xl overflow-hidden transition-transform duration-700 ease-in-out hover:scale-105 hover:-translate-y-2"
                  >
                    <img
                      src={src}
                      alt={`Banner ${i + 1}`}
                      className="w-[160px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[260px] md:h-[160px] lg:w-[390px] lg:h-[270px] object-cover rounded-xl transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-700 ease-in-out rounded-xl" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px]" />
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="my-24 flex lg:w-[50%] flex-col gap-10"
            >
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education...
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              <Img
                src={FoundingStory}
                alt="FoundingStory"
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </motion.div>
          </div>

          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <div className="flex items-center gap-3 group transition-all duration-500">
                <FaEye className="text-5xl text-[#FF512F] transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[65%] transition-all duration-500 group-hover:tracking-wider group-hover:scale-105">
                  Our Vision
                </h1>
              </div>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform...
              </p>
            </div>

            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <div className="flex items-center gap-3 group">
                <GiArcheryTarget className="text-5xl text-[#1FA2FF] transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] transition-all duration-700 group-hover:tracking-wide group-hover:scale-105">
                  Our Mission
                </h1>
              </div>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission goes beyond just delivering courses online...
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />

      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="my-20 px-5 text-white">
        <h1 className="text-center text-4xl sm:text-5xl font-extrabold mt-8 bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent animate-fadeInUp tracking-tight">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>

      <Footer />
    </div>
  );
};

export default About;
