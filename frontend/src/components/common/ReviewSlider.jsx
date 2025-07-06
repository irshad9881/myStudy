// import React, { useEffect, useState } from "react"
// import ReactStars from "react-rating-stars-component"
// import Img from './Img';

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react"
// // import SwiperCore, { Autoplay, FreeMode, Pagination } from 'swiper/core';
// // Import Swiper styles
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"

// // Icons
// import { FaStar } from "react-icons/fa"

// // Get apiFunction and the endpoint
// import { apiConnector } from "../../services/apiConnector";
// import { ratingsEndpoints } from "../../services/apis"

// function ReviewSlider() {
//   const [reviews, setReviews] = useState(null)
//   const truncateWords = 15

//   useEffect(() => {
//     ; (async () => {
//       const { data } = await apiConnector(
//         "GET",
//         ratingsEndpoints.REVIEWS_DETAILS_API
//       )
//       if (data?.success) {
//         setReviews(data?.data)
//       }
//     })()
//   }, [])

//   // console.log('reviews= ', reviews)
//   if(!reviews) return;

//   return (
//     <div className="text-white">
//       <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
//         <Swiper
//           // slidesPerView={4}
//           // slidesPerView={1}
//           breakpoints={{
//             // Configure the number of slides per view for different screen sizes
//             640: {
//               slidesPerView: 1, // Show 1 slide at a time on smaller screens
//             },
//             768: {
//               slidesPerView: 2, // Show 2 slides at a time on screens wider than 768px
//             },
//             1024: {
//               slidesPerView: 4, // Show 4 slides at a time on screens wider than 1024px
//             },
//           }}
//           spaceBetween={25}
//           loop={true}
//           freeMode={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           // modules={[FreeMode, Pagination, Autoplay]}
//           className="w-full "
//         >
//           {reviews.map((review, i) => {
//             return (
//               <SwiperSlide key={i}>
//                 <div className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25 min-h-[180px] max-h-[180px] glass-bg">
//                   <div className="flex items-center gap-4">
//                     <Img
//                       src={
//                         review?.user?.image
//                           ? review?.user?.image
//                           : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
//                       }
//                       alt=""
//                       className="h-9 w-9 rounded-full object-cover"
//                     />
//                     <div className="flex flex-col">
//                       <h1 className="font-semibold text-richblack-5 capitalize">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
//                       <h2 className="text-[12px] font-medium text-richblack-500">
//                         {review?.course?.courseName}
//                       </h2>
//                     </div>
//                   </div>

//                   <p className="font-medium text-richblack-25">
//                     {review?.review.split(" ").length > truncateWords
//                       ? `${review?.review
//                         .split(" ")
//                         .slice(0, truncateWords)
//                         .join(" ")} ...`
//                       : `${review?.review}`}
//                   </p>

//                   <div className="flex items-center gap-2 ">
//                     <h3 className="font-semibold text-yellow-100">
//                       {/* {isNaN(review.rating) ? "N/A" : review.rating.toFixed(1)} */}
//                       {review.rating}
//                     </h3>
//                     <ReactStars
//                       count={5}
//                       value={parseInt(review.rating)} // Convert to a number
//                       size={20}
//                       edit={false}
//                       activeColor="#ffd700"
//                       emptyIcon={<FaStar />}
//                       fullIcon={<FaStar />}
//                     />
//                   </div>
//                 </div>
//               </SwiperSlide>
//             )
//           })}
//           {/* <SwiperSlide>Slide 1</SwiperSlide> */}
//         </Swiper>
//       </div>
//     </div>
//   )
// }

// export default ReviewSlider

import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Img from "./Img";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { apiConnector } from "../../services/apiConnector";
import { ratingsEndpoints } from "../../services/apis";

function ReviewSlider() {
  const [reviews, setReviews] = useState(null);
  const truncateWords = 15;

  useEffect(() => {
    (async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      );
      if (data?.success) {
        setReviews(data?.data);
      }
    })();
  }, []);

  if (!reviews) return;

  return (
    <div className="text-white w-full px-4 md:px-8 lg:px-16">
      <div className="my-12">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="group rounded-xl bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] p-[2px]">
                <div className="flex flex-col justify-between gap-3 bg-richblack-800 p-5 rounded-xl min-h-[200px] transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-xl">
                  <div className="flex items-center gap-4">
                    <Img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      }
                      alt="user-avatar"
                      className="h-10 w-10 rounded-full object-cover border border-richblack-600"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-bold text-lg text-richblack-5 capitalize">
                        {`${review?.user?.firstName} ${review?.user?.lastName}`}
                      </h1>
                      <h2 className="text-[13px] text-richblack-300">
                        {review?.course?.courseName}
                      </h2>
                    </div>
                  </div>

                  <p className="text-richblack-25 text-sm font-medium leading-relaxed">
                    {review?.review.split(" ").length > truncateWords
                      ? `${review?.review
                          .split(" ")
                          .slice(0, truncateWords)
                          .join(" ")}...`
                      : review?.review}
                  </p>

                  <div className="flex items-center gap-2">
                    <h3 className="text-yellow-100 font-bold text-md">
                      {review.rating}
                    </h3>
                    <ReactStars
                      count={5}
                      value={parseFloat(review.rating)}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewSlider;
