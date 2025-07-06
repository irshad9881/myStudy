// import React from "react";
// import HighlightText from "../../../components/core/HomePage/HighlightText";
// import CTAButton from "../../../components/core/HomePage/Button";

// const LearningGridArray = [
//   {
//     order: -1,
//     heading: "World-Class Learning for",
//     highlightText: "Anyone, Anywhere",
//     description:
//       "IqraLight partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
//     BtnText: "Learn More",
//     BtnLink: "/",
//   },
//   {
//     order: 1,
//     heading: "Curriculum Based on Industry Needs",
//     description:
//       "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
//   },
//   {
//     order: 2,
//     heading: "Our Learning Methods",
//     description:
//       "IqraLight partners with more than 275+ leading universities and companies to bring",
//   },
//   {
//     order: 3,
//     heading: "Certification",
//     description:
//       "IqraLight partners with more than 275+ leading universities and companies to bring",
//   },
//   {
//     order: 4,
//     heading: `Rating "Auto-grading"`,
//     description:
//       "IqraLight partners with more than 275+ leading universities and companies to bring",
//   },
//   {
//     order: 5,
//     heading: "Ready to Work",
//     description:
//       "IqraLight partners with more than 275+ leading universities and companies to bring",
//   },
// ];

// const LearningGrid = () => {
//   return (
//     <div className="grid mx-auto w-[350px] lg:w-fit grid-cols-1 lg:grid-cols-4 mb-12">
//       {LearningGridArray.map((card, i) => {
//         return (
//           // <div
//           //   key={i}
//           //   className={`${i === 0 && "lg:col-span-2 lg:h-[294px]"}  ${
//           //     card.order % 2 === 1
//           //       ? "bg-richblack-700 h-[294px]"
//           //       : card.order % 2 === 0
//           //       ? "bg-richblack-800 h-[294px]"
//           //       : "bg-transparent"
//           //   } ${card.order === 3 && "lg:col-start-2"}  `}
//           // >
//           //   {card.order < 0 ? (
//           //     <div className="lg:w-[90%] flex flex-col gap-3 pb-10 lg:pb-0">
//           //       <div className="text-4xl font-semibold ">
//           //         {card.heading}
//           //         <HighlightText text={card.highlightText} />
//           //       </div>
//           //       <p className="text-richblack-300 font-medium">
//           //         {card.description}
//           //       </p>

//           //       <div className="w-fit mt-2">
//           //         <CTAButton active={true} linkto={card.BtnLink}>
//           //           {card.BtnText}
//           //         </CTAButton>
//           //       </div>
//           //     </div>
//           //   ) : (
//           //     <div className="p-8 flex flex-col gap-8">
//           //       <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

//           //       <p className="text-richblack-300 font-medium">
//           //         {card.description}
//           //       </p>
//           //     </div>
//           //   )}
//           // </div>
//           <div
//             key={i}
//             className={`group relative overflow-hidden transition-all duration-300
//     ${i === 0 && "lg:col-span-2 lg:h-[294px]"}
//     ${
//       card.order % 2 === 1
//         ? "bg-richblack-700 h-[294px]"
//         : card.order % 2 === 0
//         ? "bg-richblack-800 h-[294px]"
//         : "bg-gradient-to-tr from-richblack-700 to-richblack-800 shadow-lg"
//     }
//     ${card.order === 3 && "lg:col-start-2"}
//     hover:scale-[1.02] hover:shadow-[0_4px_40px_rgba(255,255,255,0.15)] rounded-xl p-6 transition-transform duration-500
//   `}
//           >
//             {/* Fancy border glow animation */}
//             <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-richblue-300 animate-pulse"></div>
//             </div>

//             {card.order < 0 ? (
//               <div className="lg:w-[90%] flex flex-col gap-3 pb-10 lg:pb-0 transition-all duration-700 group-hover:translate-y-[-4px]">
//                 <div className="text-4xl font-semibold">
//                   {card.heading}
//                   <HighlightText text={card.highlightText} />
//                 </div>
//                 <p className="text-richblack-300 font-medium">
//                   {card.description}
//                 </p>

//                 <div className="w-fit mt-2">
//                   <CTAButton active={true} linkto={card.BtnLink}>
//                     {card.BtnText}
//                   </CTAButton>
//                 </div>
//               </div>
//             ) : (
//               <div className="p-1 sm:p-4 md:p-6 lg:p-8 flex flex-col gap-5 transition-all duration-700 group-hover:translate-y-[-4px]">
//                 <h1 className="text-richblack-5 text-lg group-hover:text-yellow-50 transition-colors duration-500">
//                   {card.heading}
//                 </h1>

//                 <p className="text-richblack-300 font-medium text-sm leading-relaxed group-hover:text-richblack-100 transition-colors duration-500">
//                   {card.description}
//                 </p>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default LearningGrid;
import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";
import { motion } from "framer-motion";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "IqraLight partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The IqraLight curriculum is designed to align with real-world industry standards and expectations.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Empowering students with structured content, practical projects, and guided mentorship from experts.",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Get recognized with certifications that reflect your dedication and learning across any subject.",
  },
  {
    order: 4,
    heading: `Smart Auto-Grading`,
    description:
      "Evaluate your skills instantly with auto-graded quizzes and projects across a wide variety of fields.",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Build a portfolio that gets noticed. Our learners get job-ready with real-world training.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const LearningGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 md:px-10 lg:px-16 mx-auto w-full max-w-[1400px] mb-20">
      {LearningGridArray.map((card, i) => (
        <motion.div
          key={i}
          className={`group relative overflow-hidden border border-richblack-600 rounded-2xl backdrop-blur-sm p-6 shadow-lg transition-all duration-300
            ${i === 0 && "sm:col-span-2 lg:col-span-2"}
            ${
              card.order % 2 === 1
                ? "bg-gradient-to-tr from-richblack-800 to-richblack-900"
                : card.order % 2 === 0
                ? "bg-gradient-to-tr from-richblack-700 to-richblack-800"
                : "bg-gradient-to-br from-[#1FA2FF]/60 via-[#12D8FA]/60 to-[#A6FFCB]/60"
            }
            ${card.order === 3 && "lg:col-start-2"}
            hover:scale-[1.015] hover:border-richblue-200
            hover:shadow-[0_4px_40px_rgba(173,216,230,0.15)]`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
          variants={fadeInUp}
        >
          {card.order < 0 ? (
            <div className="flex flex-col gap-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-richblack-5">
                {card.heading}
                <HighlightText text={card.highlightText} />
              </div>
              <p className="text-richblack-300 font-medium text-sm sm:text-base leading-relaxed">
                {card.description}
              </p>
              <div className="mt-2">
                <CTAButton active={true} linkto={card.BtnLink}>
                  {card.BtnText}
                </CTAButton>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 transition-all duration-300 group-hover:translate-y-[-4px]">
              <h2 className="text-richblack-5 text-lg sm:text-xl font-semibold group-hover:text-richblack-50 transition-colors duration-300">
                {card.heading}
              </h2>
              <p className="text-richblack-300 text-sm sm:text-base leading-normal group-hover:text-richblack-100 transition-colors duration-300">
                {card.description}
              </p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default LearningGrid;
