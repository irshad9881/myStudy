// import React from "react";
// import * as Icon1 from "react-icons/bi";
// import * as Icon3 from "react-icons/hi2";
// import * as Icon2 from "react-icons/io5";

// const contactDetails = [
//   {
//     icon: "HiChatBubbleLeftRight",
//     heading: "Chat on us",
//     description: "Our friendly team is here to help.",
//     details: "info@IqraLight.com",
//   },
//   {
//     icon: "BiWorld",
//     heading: "Visit us",
//     description: "Come and say hello at our office HQ.",
//     details:
//       "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
//   },
//   {
//     icon: "IoCall",
//     heading: "Call us",
//     description: "Mon - Fri From 8am to 5pm",
//     details: "+123 456 7869",
//   },
// ];

// const ContactDetails = () => {
//   return (
//     <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6">
//       {contactDetails.map((ele, i) => {
//         let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
//         return (
//           <div
//             className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
//             key={i}
//           >
//             <div className="flex flex-row items-center gap-3">
//               <Icon size={25} />

//               <h1 className="text-lg font-semibold text-richblack-5">
//                 {ele?.heading}
//               </h1>
//             </div>

//             <p className="font-medium">{ele?.description}</p>
//             <p className="font-semibold">{ele?.details}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ContactDetails;

import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon3 from "react-icons/hi2";
import * as Icon2 from "react-icons/io5";

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat with Us",
    description: "Our friendly team is here to help.",
    details: "info@IqraLight.com",
  },
  {
    icon: "BiWorld",
    heading: "Visit Us",
    description: "Visit and explore our office HQ.",
    details:
      "1st floar, Radhakrishna residency A, No 69/1, 64th cross, 3rd Main Rd, RMV 2nd Stage, Ashwath Nagar, Armane Nagar, Bengaluru, Karnataka 560094",
  },
  {
    icon: "IoCall",
    heading: "Call Us",
    description: "Mon - Fri | 8am to 5pm",
    details: "+91-989722XXXX",
  },
];

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-gradient-to-br from-[#1F1C2C] via-[#2e2e5e] to-[#0F2027] p-6 md:p-8 text-white shadow-xl animate-fade-in">
      {contactDetails.map((ele, i) => {
        const Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
        return (
          <div
            key={i}
            className="group flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:scale-[1.015] hover:bg-white/10 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <Icon className="text-3xl text-cyan-400 group-hover:animate-bounce" />
              <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {ele.heading}
              </h2>
            </div>
            <p className="text-sm text-gray-300">{ele.description}</p>
            <p className="text-md font-semibold text-white">{ele.details}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
