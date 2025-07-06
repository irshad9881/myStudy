import { useEffect } from "react"
import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../common/IconBtn"
import Img from './../../common/Img';



export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate();


  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <h1 className="mb-14 text-4xl font-medium text-richblack-5 font-boogaloo text-center sm:text-left"> My Profile</h1>

      <div className="flex items-center justify-between rounded-2xl border-[1px] border-richblack-700 bg-richblack-800 p-8 px-3 sm:px-12">
        <div className="flex items-center gap-x-4">
          <Img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-5 capitalize">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>

        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>

      <div className="my-10 flex flex-col gap-y-10 rounded-2xl border-[1px] border-richblack-700 bg-richblack-800 p-8 px-7 sm:px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>

        <p
          className={`${user?.additionalDetails?.about
            ? "text-richblack-5"
            : "text-richblack-400"
            } text-sm font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>

      <div className="my-10 flex flex-col gap-y-10 rounded-2xl border-[1px] border-richblack-700 bg-richblack-800 p-8 px-7 sm:px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>

        <div className="flex max-w-[500px] justify-between ">
          <div className="flex flex-col gap-y-5">

            <div>
              <p className="mb-2 text-sm text-richblack-600">First Name</p>
              <p className="text-sm font-semibold text-richblack-5 capitalize">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Account Type</p>
              <p className="text-sm font-semibold text-richblack-5 capitalize">
                {user?.accountType}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Email</p>
              <p className="text-sm font-semibold text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Gender</p>
              <p className="text-sm font-semibold text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">Last Name</p>
              <p className="text-sm font-semibold text-richblack-5 capitalize">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
              <p className="text-sm font-semibold text-richblack-5">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
              <p className="text-sm font-semibold text-richblack-5">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ?? "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// import { useEffect } from "react"
// import { RiEditBoxLine } from "react-icons/ri"
// import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"

// import { formattedDate } from "../../../utils/dateFormatter"
// import IconBtn from "../../common/IconBtn"
// import Img from "./../../common/Img"

// export default function MyProfile() {
//   const { user } = useSelector((state) => state.profile)
//   const navigate = useNavigate()

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])

//   return (
//     <>
//       <h1 className="mb-14 text-4xl font-medium text-richblack-5 font-boogaloo text-center sm:text-left">
//         My Profile
//       </h1>

//       {/* Profile Card */}
//       <div className="flex items-center justify-between rounded-2xl border border-richblack-700 bg-richblack-800 p-8 px-3 sm:px-12">
//         <div className="flex items-center gap-x-4">
//           <Img
//             src={user?.image}
//             alt={`profile-${user?.firstName}`}
//             className="aspect-square w-[78px] rounded-full object-cover"
//           />
//           <div className="space-y-1">
//             <p className="text-lg font-semibold text-richblack-5 capitalize">
//               {user?.firstName + " " + user?.lastName}
//             </p>
//             <p className="text-sm text-richblack-300">{user?.email}</p>
//           </div>
//         </div>

//         <IconBtn
//           text="Edit"
//           onClick={() => navigate("/dashboard/settings")}
//         >
//           <RiEditBoxLine />
//         </IconBtn>
//       </div>

//       {/* About Section */}
//       <div className="my-10 flex flex-col gap-y-10 rounded-2xl border border-richblack-700 bg-richblack-800 p-8 px-7 sm:px-12">
//         <div className="flex w-full items-center justify-between">
//           <p className="text-lg font-semibold text-richblack-5">About</p>
//           <IconBtn
//             text="Edit"
//             onClick={() => navigate("/dashboard/settings")}
//           >
//             <RiEditBoxLine />
//           </IconBtn>
//         </div>

//         <p
//           className={`text-sm font-medium ${
//             user?.additionalDetails?.about
//               ? "text-richblack-5"
//               : "text-richblack-400"
//           }`}
//         >
//           {user?.additionalDetails?.about ?? "Write Something About Yourself"}
//         </p>
//       </div>

//       {/* Personal Details */}
//       <div className="my-10 flex flex-col gap-y-10 rounded-2xl border border-richblack-700 bg-richblack-800 p-8 px-7 sm:px-12">
//         <div className="flex w-full items-center justify-between">
//           <p className="text-lg font-semibold text-richblack-5">
//             Personal Details
//           </p>
//           <IconBtn
//             text="Edit"
//             onClick={() => navigate("/dashboard/settings")}
//           >
//             <RiEditBoxLine />
//           </IconBtn>
//         </div>

//         <div className="flex max-w-[500px] flex-col gap-y-5 sm:flex-row sm:justify-between">
//           <div className="flex flex-col gap-y-5">
//             <Detail label="First Name" value={user?.firstName} />
//             <Detail label="Account Type" value={user?.accountType} />
//             <Detail label="Email" value={user?.email} />
//             <Detail
//               label="Gender"
//               value={user?.additionalDetails?.gender ?? "Add Gender"}
//             />
//           </div>

//           <div className="flex flex-col gap-y-5">
//             <Detail label="Last Name" value={user?.lastName} />
//             <Detail
//               label="Phone Number"
//               value={
//                 user?.additionalDetails?.contactNumber ?? "Add Contact Number"
//               }
//             />
//             <Detail
//               label="Date Of Birth"
//               value={
//                 formattedDate(user?.additionalDetails?.dateOfBirth) ??
//                 "Add Date Of Birth"
//               }
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// 🔹 Reusable detail field
// function Detail({ label, value }) {
//   return (
//     <div>
//       <p className="mb-2 text-sm text-richblack-600">{label}</p>
//       <p className="text-sm font-semibold text-richblack-5 capitalize">
//         {value}
//       </p>
//     </div>
//   )
// }
// import { useEffect, useState } from "react"
// import { RiEditBoxLine } from "react-icons/ri"
// import { useSelector, useDispatch } from "react-redux"
// import { formattedDate } from "../../../utils/dateFormatter"
// import IconBtn from "../../common/IconBtn"
// import Img from "../../common/Img"
// import Modal from "../../common/Modal"  // Assume you have a reusable Modal component
// import { updateProfile } from "../../../services/operations/profileAPI" // Your update API call

// export default function MyProfile() {
//   const { user, loading: profileLoading } = useSelector((state) => state.profile)
//   const dispatch = useDispatch()

//   const [isEditOpen, setIsEditOpen] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     about: "",
//     gender: "",
//     contactNumber: "",
//     dateOfBirth: "",
//   })

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         firstName: user.firstName || "",
//         lastName: user.lastName || "",
//         email: user.email || "",
//         about: user.additionalDetails?.about || "",
//         gender: user.additionalDetails?.gender || "",
//         contactNumber: user.additionalDetails?.contactNumber || "",
//         dateOfBirth: user.additionalDetails?.dateOfBirth || "",
//       })
//     }
//   }, [user])

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSave = async () => {
//     // Call your update API here (assumed updateProfile)
//     try {
//       await dispatch(updateProfile(formData))
//       setIsEditOpen(false)
//     } catch (err) {
//       console.error("Failed to update profile", err)
//     }
//   }

//   if (profileLoading || !user) {
//     return (
//       <div className="p-8 space-y-4 max-w-3xl mx-auto">
//         {/* Skeleton Loader */}
//         {[...Array(5)].map((_, i) => (
//           <div
//             key={i}
//             className="h-8 rounded-md bg-richblack-700 animate-pulse"
//           />
//         ))}
//       </div>
//     )
//   }

//   return (
//     <>
//       <h1 className="mb-14 text-4xl font-medium text-richblack-5 font-boogaloo text-center sm:text-left">
//         My Profile
//       </h1>

//       <div className="flex flex-col sm:flex-row items-center justify-between rounded-2xl border border-richblack-700 bg-richblack-800 p-6 sm:p-8 max-w-3xl mx-auto gap-6">
//         <div className="flex items-center gap-x-4">
//           <Img
//             src={user.image}
//             alt={`profile-${user.firstName}`}
//             className="aspect-square w-[78px] rounded-full object-cover"
//           />
//           <div className="space-y-1">
//             <p className="text-lg font-semibold text-richblack-5 capitalize">
//               {user.firstName} {user.lastName}
//             </p>
//             <p className="text-sm text-richblack-300">{user.email}</p>
//           </div>
//         </div>

//         <IconBtn text="Edit" onClick={() => setIsEditOpen(true)}>
//           <RiEditBoxLine />
//         </IconBtn>
//       </div>

//       <div className="my-10 space-y-10 max-w-3xl mx-auto">
//         <section className="rounded-2xl border border-richblack-700 bg-richblack-800 p-6 sm:p-8">
//           <div className="flex justify-between items-center mb-4">
//             <p className="text-lg font-semibold text-richblack-5">About</p>
//             <IconBtn text="Edit" onClick={() => setIsEditOpen(true)}>
//               <RiEditBoxLine />
//             </IconBtn>
//           </div>
//           <p
//             className={`text-sm font-medium ${
//               user.additionalDetails?.about
//                 ? "text-richblack-5"
//                 : "text-richblack-400"
//             }`}
//           >
//             {user.additionalDetails?.about ?? "Write Something About Yourself"}
//           </p>
//         </section>

//         <section className="rounded-2xl border border-richblack-700 bg-richblack-800 p-6 sm:p-8">
//           <div className="flex justify-between items-center mb-4">
//             <p className="text-lg font-semibold text-richblack-5">Personal Details</p>
//             <IconBtn text="Edit" onClick={() => setIsEditOpen(true)}>
//               <RiEditBoxLine />
//             </IconBtn>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 max-w-[500px]">
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">First Name</p>
//               <p className="text-sm font-semibold text-richblack-5 capitalize">
//                 {user.firstName}
//               </p>
//             </div>
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">Last Name</p>
//               <p className="text-sm font-semibold text-richblack-5 capitalize">
//                 {user.lastName}
//               </p>
//             </div>
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">Account Type</p>
//               <p className="text-sm font-semibold text-richblack-5 capitalize">
//                 {user.accountType}
//               </p>
//             </div>
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
//               <p className="text-sm font-semibold text-richblack-5">
//                 {user.additionalDetails?.contactNumber ?? "Add Contact Number"}
//               </p>
//             </div>
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">Email</p>
//               <p className="text-sm font-semibold text-richblack-5">{user.email}</p>
//             </div>
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
//               <p className="text-sm font-semibold text-richblack-5">
//                 {formattedDate(user.additionalDetails?.dateOfBirth) ?? "Add Date Of Birth"}
//               </p>
//             </div>
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">Gender</p>
//               <p className="text-sm font-semibold text-richblack-5">
//                 {user.additionalDetails?.gender ?? "Add Gender"}
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Inline Edit Modal */}
//       {isEditOpen && (
//         <Modal onClose={() => setIsEditOpen(false)} title="Edit Profile">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault()
//               handleSave()
//             }}
//             className="space-y-6"
//           >
//             <div className="flex flex-col sm:flex-row gap-6">
//               <div className="flex-1">
//                 <label className="block text-sm font-semibold mb-1" htmlFor="firstName">
//                   First Name
//                 </label>
//                 <input
//                   id="firstName"
//                   name="firstName"
//                   type="text"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="w-full rounded-md border border-richblack-600 bg-richblack-900 px-3 py-2 text-richblack-5"
//                   required
//                 />
//               </div>
//               <div className="flex-1">
//                 <label className="block text-sm font-semibold mb-1" htmlFor="lastName">
//                   Last Name
//                 </label>
//                 <input
//                   id="lastName"
//                   name="lastName"
//                   type="text"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="w-full rounded-md border border-richblack-600 bg-richblack-900 px-3 py-2 text-richblack-5"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-semibold mb-1" htmlFor="about">
//                 About
//               </label>
//               <textarea
//                 id="about"
//                 name="about"
//                 value={formData.about}
//                 onChange={handleChange}
//                 rows={3}
//                 className="w-full rounded-md border border-richblack-600 bg-richblack-900 px-3 py-2 text-richblack-5 resize-none"
//               />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-semibold mb-1" htmlFor="gender">
//                   Gender
//                 </label>
//                 <select
//                   id="gender"
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   className="w-full rounded-md border border-richblack-600 bg-richblack-900 px-3 py-2 text-richblack-5"
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold mb-1" htmlFor="contactNumber">
//                   Contact Number
//                 </label>
//                 <input
//                   id="contactNumber"
//                   name="contactNumber"
//                   type="tel"
//                   value={formData.contactNumber}
//                   onChange={handleChange}
//                   className="w-full rounded-md border border-richblack-600 bg-richblack-900 px-3 py-2 text-richblack-5"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-semibold mb-1" htmlFor="dateOfBirth">
//                 Date Of Birth
//               </label>
//               <input
//                 id="dateOfBirth"
//                 name="dateOfBirth"
//                 type="date"
//                 value={formData.dateOfBirth ? formData.dateOfBirth.split("T")[0] : ""}
//                 onChange={handleChange}
//                 className="w-full rounded-md border border-richblack-600 bg-richblack-900 px-3 py-2 text-richblack-5"
//               />
//             </div>

//             <div className="flex justify-end gap-4">
//               <button
//                 type="button"
//                 onClick={() => setIsEditOpen(false)}
//                 className="rounded-md border border-richblack-600 px-4 py-2 text-richblack-400 hover:bg-richblack-700"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="rounded-md bg-yellow-800 px-4 py-2 font-semibold text-yellow-50 hover:bg-yellow-900"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </Modal>
//       )}
//     </>
//   )
// }

