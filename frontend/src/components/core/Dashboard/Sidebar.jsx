// import { useEffect, useState } from "react";
// import { VscSignOut } from "react-icons/vsc";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import { sidebarLinks } from "./../../../../data/dashboard-links";
// import { logout } from "../../../services/operations/authAPI";
// import ConfirmationModal from "../../common/ConfirmationModal";
// import SidebarLink from "./SidebarLink";
// import Loading from "./../../common/Loading";

// import { HiMenuAlt1 } from "react-icons/hi";
// import { IoMdClose } from "react-icons/io";

// import { setOpenSideMenu, setScreenSize } from "../../../slices/sidebarSlice";

// export default function Sidebar() {
//   const { user, loading: profileLoading } = useSelector(
//     (state) => state.profile
//   );
//   const { loading: authLoading } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // to keep track of confirmation modal
//   const [confirmationModal, setConfirmationModal] = useState(null);

//   // handle side bar menu - open / close
//   // const [openSideMenu, setOpenSideMenu] = useState(false)
//   // const [screenSize, setScreenSize] = useState(undefined)

//   const { openSideMenu, screenSize } = useSelector((state) => state.sidebar);
//   // console.log('openSideMenu ======' , openSideMenu)
//   // console.log('screenSize ======' , screenSize)

//   useEffect(() => {
//     const handleResize = () => dispatch(setScreenSize(window.innerWidth));

//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // If screen size is small then close the side bar
//   useEffect(() => {
//     if (screenSize <= 640) {
//       dispatch(setOpenSideMenu(false));
//     } else dispatch(setOpenSideMenu(true));
//   }, [screenSize]);

//   if (profileLoading || authLoading) {
//     return (
//       <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
//         <Loading />
//       </div>
//     );
//   }

//   return (
//     <>
//       <div
//         className="sm:hidden text-white absolute left-7 top-3 cursor-pointer "
//         onClick={() => dispatch(setOpenSideMenu(!openSideMenu))}
//       >
//         {openSideMenu ? <IoMdClose size={33} /> : <HiMenuAlt1 size={33} />}
//       </div>

//       {openSideMenu && (
//         <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10 ">
//           <div className="flex flex-col mt-6">
//             {sidebarLinks.map((link) => {
//               if (link.type && user?.accountType !== link.type) return null;
//               return (
//                 <SidebarLink
//                   key={link.id}
//                   link={link}
//                   iconName={link.icon}
//                   setOpenSideMenu={setOpenSideMenu}
//                 />
//               );
//             })}
//           </div>

//           <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />

//           <div className="flex flex-col">
//             <SidebarLink
//               link={{ name: "Settings", path: "/dashboard/settings" }}
//               iconName={"VscSettingsGear"}
//               // setOpenSideMen={setOpenSideMenu}
//               setOpenSideMenu={setOpenSideMenu}
//             />

//             <button
//               onClick={() =>
//                 setConfirmationModal({
//                   text1: "Are you sure ?",
//                   text2: "You will be logged out of your account.",
//                   btn1Text: "Logout",
//                   btn2Text: "Cancel",
//                   btn1Handler: () => dispatch(logout(navigate)),
//                   btn2Handler: () => setConfirmationModal(null),
//                 })
//               }
//               className=" "
//             >
//               <div className="flex items-center gap-x-2 px-8 py-2 text-sm font-medium text-richblack-300 hover:bg-richblack-700 relative">
//                 <VscSignOut className="text-lg" />
//                 <span>Logout</span>
//               </div>
//             </button>
//           </div>
//         </div>
//       )}

//       {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import { VscSignOut } from "react-icons/vsc";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import { sidebarLinks } from "./../../../../data/dashboard-links";
// import { logout } from "../../../services/operations/authAPI";
// import ConfirmationModal from "../../common/ConfirmationModal";
// import SidebarLink from "./SidebarLink";
// import Loading from "./../../common/Loading";

// import { HiMenuAlt1 } from "react-icons/hi";
// import { IoMdClose } from "react-icons/io";

// import { setOpenSideMenu, setScreenSize } from "../../../slices/sidebarSlice";

// export default function Sidebar() {
//   const { user, loading: profileLoading } = useSelector(
//     (state) => state.profile
//   );
//   const { loading: authLoading } = useSelector((state) => state.auth);
//   const { openSideMenu, screenSize } = useSelector((state) => state.sidebar);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [confirmationModal, setConfirmationModal] = useState(null);

//   // Handle screen resizing
//   useEffect(() => {
//     const handleResize = () => dispatch(setScreenSize(window.innerWidth));
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Close sidebar for mobile on screen size change
//   useEffect(() => {
//     if (screenSize <= 640) {
//       dispatch(setOpenSideMenu(false));
//     } else {
//       dispatch(setOpenSideMenu(true));
//     }
//   }, [screenSize]);

//   if (profileLoading || authLoading) {
//     return (
//       <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
//         <Loading />
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Toggle Button for small screens */}
//       <div
//         className="sm:hidden text-white absolute left-7 top-3 z-30 cursor-pointer"
//         onClick={() => dispatch(setOpenSideMenu(!openSideMenu))}
//       >
//         {openSideMenu ? <IoMdClose size={33} /> : <HiMenuAlt1 size={33} />}
//       </div>

//       {/* Backdrop for mobile sidebar */}
//       {openSideMenu && screenSize <= 640 && (
//         <div
//           onClick={() => dispatch(setOpenSideMenu(false))}
//           className="fixed inset-0 bg-black opacity-50 z-10"
//         ></div>
//       )}

//       {/* Sidebar content with transition */}
//       {openSideMenu && (
//         <div
//           className={`fixed sm:relative z-20 sm:z-0 top-[3.5rem] sm:top-0 transition-all duration-300 transform ${
//             screenSize <= 640 ? "translate-x-0" : ""
//           } flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10`}
//         >
//           <div className="flex flex-col mt-6">
//             {sidebarLinks.map((link) => {
//               if (link.type && user?.accountType !== link.type) return null;
//               return (
//                 <SidebarLink
//                   key={link.id}
//                   link={link}
//                   iconName={link.icon}
//                   // setOpenSideMenu={setOpenSideMenu}
//                 />
//               );
//             })}
//           </div>

//           <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />

//           <div className="flex flex-col">
//             <SidebarLink
//               link={{ name: "Settings", path: "/dashboard/settings" }}
//               iconName={"VscSettingsGear"}
//               // setOpenSideMenu={setOpenSideMenu}
//             />

//             <button
//               onClick={() =>
//                 setConfirmationModal({
//                   text1: "Are you sure?",
//                   text2: "You will be logged out of your account.",
//                   btn1Text: "Logout",
//                   btn2Text: "Cancel",
//                   btn1Handler: () => dispatch(logout(navigate)),
//                   btn2Handler: () => setConfirmationModal(null),
//                 })
//               }
//             >
//               <div className="flex items-center gap-x-2 px-8 py-2 text-sm font-medium text-richblack-300 hover:bg-richblack-700 relative">
//                 <VscSignOut className="text-lg" />
//                 <span>Logout</span>
//               </div>
//             </button>
//           </div>
//         </div>
//       )}

//       {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { sidebarLinks } from "./../../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import ConfirmationModal from "../../common/ConfirmationModal";
import SidebarLink from "./SidebarLink";
import Loading from "./../../common/Loading";

import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import { setOpenSideMenu, setScreenSize } from "../../../slices/sidebarSlice";

export default function Sidebar() {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { openSideMenu, screenSize } = useSelector((state) => state.sidebar);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [confirmationModal, setConfirmationModal] = useState(null);

  useEffect(() => {
    const handleResize = () => dispatch(setScreenSize(window.innerWidth));
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 640) {
      dispatch(setOpenSideMenu(false));
    } else {
      dispatch(setOpenSideMenu(true));
    }
  }, [screenSize]);

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <Loading />
      </div>
    );
  }

  return (
    <>
      {/* 🍔 Mobile Menu Toggle */}
      <div
        className="sm:hidden text-white absolute left-7 top-3 cursor-pointer z-[30]"
        onClick={() => dispatch(setOpenSideMenu(!openSideMenu))}
      >
        {openSideMenu ? <IoMdClose size={33} /> : <HiMenuAlt1 size={33} />}
      </div>

      {/* 🕶️ Backdrop for Mobile Sidebar */}
      {openSideMenu && screenSize <= 640 && (
        <div
          onClick={() => dispatch(setOpenSideMenu(false))}
          className="fixed inset-0 bg-black opacity-50 z-10"
        ></div>
      )}

      {/* 🧱 Sidebar */}
      <div
        className={`fixed sm:static top-0 left-0 z-20 h-[calc(100vh-3.5rem)] min-w-[220px] border-r border-r-richblack-700 bg-richblack-800 py-10
          transform transition-transform duration-300 ease-in-out
          ${
            openSideMenu
              ? "translate-x-0"
              : "-translate-x-full sm:translate-x-0"
          }
        `}
      >
        {/* Links */}
        <div className="flex flex-col mt-6">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null;
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            );
          })}
        </div>

        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />

        {/* Settings and Logout */}
        <div className="flex flex-col">
          <SidebarLink
            link={{ name: "Settings", path: "/dashboard/settings" }}
            iconName={"VscSettingsGear"}
          />

          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="px-8 py-2 text-sm font-medium text-richblack-300 hover:bg-richblack-700 flex items-center gap-x-2"
          >
            <VscSignOut className="text-lg" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
}
