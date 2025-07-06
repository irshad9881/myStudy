import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import CountryCode from "../../../../data/countrycode.json";
import { apiConnector } from "../../../services/apiConnector";
import { contactusEndpoint } from "../../../services/apis";
import toast from "react-hot-toast";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("Form Data - ", data);
    try {
      setLoading(true);
      // const res = await apiConnector(
      //   "POST",
      //   contactusEndpoint.CONTACT_US_API,
      //   data
      // )
      // console.log("Email Res - ", res)
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      console.log("Email Res - ", res);

      if (res?.data?.success) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message.");
      }
      setLoading(false);
    } catch (error) {
      console.log("ERROR WHILE CONATACT US  - ", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    // <form
    //   className="flex flex-col gap-7"
    //   onSubmit={handleSubmit(submitContactForm)}
    // >
    //   <div className="flex flex-col gap-5 lg:flex-row">
    //     <div className="flex flex-col gap-2 lg:w-[48%]">
    //       <label htmlFor="firstname" className="lable-style">
    //         First Name
    //       </label>
    //       <input
    //         type="text"
    //         name="firstname"
    //         id="firstname"
    //         placeholder="Enter first name"
    //         className="form-style"
    //         {...register("firstname", { required: true })}
    //       />
    //       {errors.firstname && (
    //         <span className="-mt-1 text-[12px] text-yellow-100">
    //           Please enter your name.
    //         </span>
    //       )}
    //     </div>

    //     <div className="flex flex-col gap-2 lg:w-[48%]">
    //       <label htmlFor="lastname" className="lable-style">
    //         Last Name
    //       </label>
    //       <input
    //         type="text"
    //         name="lastname"
    //         id="lastname"
    //         placeholder="Enter last name"
    //         className="form-style"
    //         {...register("lastname")}
    //       />
    //     </div>
    //   </div>

    //   <div className="flex flex-col gap-2">
    //     <label htmlFor="email" className="lable-style">
    //       Email Address
    //     </label>
    //     <input
    //       type="email"
    //       name="email"
    //       id="email"
    //       placeholder="Enter email address"
    //       className="form-style"
    //       {...register("email", { required: true })}
    //     />
    //     {errors.email && (
    //       <span className="-mt-1 text-[12px] text-yellow-100">
    //         Please enter your Email address.
    //       </span>
    //     )}
    //   </div>

    //   <div className="flex flex-col gap-2">
    //     <label htmlFor="phonenumber" className="lable-style">
    //       Phone Number
    //     </label>

    //     <div className="flex gap-5">
    //       <div className="flex w-[81px] flex-col gap-2">
    //         <select
    //           type="text"
    //           name="firstname"
    //           id="firstname"
    //           placeholder="Enter first name"
    //           className="form-style"
    //           {...register("countrycode", { required: true })}
    //         >
    //           {CountryCode.map((ele, i) => {
    //             return (
    //               <option key={i} value={ele.code}>
    //                 {ele.code} -{ele.country}
    //               </option>
    //             );
    //           })}
    //         </select>
    //       </div>

    //       <div className="flex w-[calc(100%-90px)] flex-col gap-2">
    //         <input
    //           type="number"
    //           name="phonenumber"
    //           id="phonenumber"
    //           placeholder="12345 67890"
    //           className="form-style"
    //           {...register("phoneNo", {
    //             required: {
    //               value: true,
    //               message: "Please enter your Phone Number.",
    //             },
    //             maxLength: { value: 12, message: "Invalid Phone Number" },
    //             minLength: { value: 10, message: "Invalid Phone Number" },
    //           })}
    //         />
    //       </div>
    //     </div>
    //     {errors.phoneNo && (
    //       <span className="-mt-1 text-[12px] text-yellow-100">
    //         {errors.phoneNo.message}
    //       </span>
    //     )}
    //   </div>

    //   <div className="flex flex-col gap-2">
    //     <label htmlFor="message" className="lable-style">
    //       Message
    //     </label>
    //     <textarea
    //       name="message"
    //       id="message"
    //       cols="30"
    //       rows="7"
    //       placeholder="Enter your message here"
    //       className="form-style"
    //       {...register("message", { required: true })}
    //     />
    //     {errors.message && (
    //       <span className="-mt-1 text-[12px] text-yellow-100">
    //         Please enter your Message.
    //       </span>
    //     )}
    //   </div>

    //   <button
    //     disabled={loading}
    //     type="submit"
    //     className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
    //      ${
    //        !loading &&
    //        "transition-all duration-200 hover:scale-95 hover:shadow-none"
    //      }  disabled:bg-richblack-500 sm:text-[16px] `}
    //   >
    //     Send Message
    //   </button>
    // </form>
    <form
      onSubmit={handleSubmit(submitContactForm)}
      className="flex flex-col gap-7 rounded-xl bg-gradient-to-br from-[#1f1c2c] via-[#2e2e5e] to-[#0f2027] p-6 shadow-2xl backdrop-blur-md transition-all duration-300 sm:p-8 md:p-10 lg:p-12 border border-white/10"
    >
      {/* First + Last Name */}
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="firstname"
            className="text-sm font-semibold text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter first name"
            className="rounded-md bg-[#141824] px-4 py-2 text-white placeholder:text-gray-400 border border-transparent focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="text-xs text-yellow-100">
              Please enter your name.
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="lastname"
            className="text-sm font-semibold text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="Enter last name"
            className="rounded-md bg-[#141824] px-4 py-2 text-white placeholder:text-gray-400 border border-transparent focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
            {...register("lastname")}
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-white">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email address"
          className="rounded-md bg-[#141824] px-4 py-2 text-white placeholder:text-gray-400 border border-transparent focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-xs text-yellow-100">
            Please enter your Email address.
          </span>
        )}
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phoneNo" className="text-sm font-semibold text-white">
          Phone Number
        </label>
        <div className="flex gap-3">
          <select
            {...register("countrycode", { required: true })}
            className="w-[90px] rounded-md bg-[#141824] px-2 py-2 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
          >
            {CountryCode.map((ele, i) => (
              <option key={i} value={ele.code}>
                {ele.code} - {ele.country}
              </option>
            ))}
          </select>

          <input
            type="number"
            id="phonenumber"
            placeholder="12345 67890"
            className="w-full rounded-md bg-[#141824] px-4 py-2 text-white placeholder:text-gray-400 border border-transparent focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
            {...register("phoneNo", {
              required: {
                value: true,
                message: "Please enter your Phone Number.",
              },
              maxLength: { value: 12, message: "Invalid Phone Number" },
              minLength: { value: 10, message: "Invalid Phone Number" },
            })}
          />
        </div>
        {errors.phoneNo && (
          <span className="text-xs text-yellow-100">
            {errors.phoneNo.message}
          </span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-white">
          Message
        </label>
        <textarea
          id="message"
          rows="6"
          placeholder="Enter your message here"
          className="rounded-md bg-[#141824] px-4 py-2 text-white placeholder:text-gray-400 border border-transparent focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && (
          <span className="text-xs text-yellow-100">
            Please enter your Message.
          </span>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className={`rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-center text-sm font-bold text-white shadow-lg hover:scale-105 hover:shadow-blue-400/50 transition-all duration-300 ${
          loading && "cursor-not-allowed opacity-60"
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactUsForm;
