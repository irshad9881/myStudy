// import { useEffect } from "react";

// export default function Modal({ onClose, title, children }) {
//   // ESC key to close modal
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     };
//     document.addEventListener("keydown", handleEsc);
//     return () => document.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   // Prevent background scroll
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fadeIn"
//         onClick={onClose}
//       />

//       {/* Modal content */}
//       <div
//         className="fixed top-1/2 left-1/2 z-50 max-w-lg w-full bg-richblack-800 rounded-md p-6 transform -translate-x-1/2 -translate-y-1/2 shadow-lg transition-all animate-slideIn"
//         onClick={(e) => e.stopPropagation()} // prevent click inside modal from closing
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-xl font-semibold text-richblack-5">{title}</h3>
//           <button
//             className="text-richblack-400 hover:text-richblack-100 text-2xl font-bold"
//             onClick={onClose}
//             aria-label="Close modal"
//           >
//             &times;
//           </button>
//         </div>

//         {/* Modal body */}
//         <div>{children}</div>
//       </div>
//     </>
//   );
// }
