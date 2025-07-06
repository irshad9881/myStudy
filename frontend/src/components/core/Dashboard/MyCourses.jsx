// import { useEffect, useState } from "react"
// import { VscAdd } from "react-icons/vsc"
// import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"

// import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
// import IconBtn from "../../common/IconBtn"
// import CoursesTable from "./InstructorCourses/CoursesTable"



// export default function MyCourses() {
//   const { token } = useSelector((state) => state.auth)
//   const navigate = useNavigate()
//   const [courses, setCourses] = useState([])
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     const fetchCourses = async () => {
//       setLoading(true);
//       const result = await fetchInstructorCourses(token)
//       // console.log('Instructors all courses  ', result);
//       setLoading(false);
//       if (result) {
//         setCourses(result)
//       }
//     }
//     fetchCourses()
//   }, [])


//   // Scroll to the top of the page when the component mounts
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [])

//   return (
//     <div>
//       <div className="mb-14 flex justify-between">
//         {/* <div className="mb-14 flex items-center justify-between"> */}
//         <h1 className="text-4xl font-medium text-richblack-5 font-boogaloo text-center lg:text-left">My Courses</h1>
//         <IconBtn
//           text="Add Course"
//           onclick={() => navigate("/dashboard/add-course")}
//         >
//           <VscAdd />
//         </IconBtn>
//       </div>

//       {/* course Table */}
//       {courses && <CoursesTable courses={courses} setCourses={setCourses} loading={loading} setLoading={setLoading} />}
//     </div>
//   )
// }
import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import IconBtn from "../../common/IconBtn"
import CoursesTable from "./InstructorCourses/CoursesTable"

// Simple Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="space-y-4">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="h-10 rounded-md bg-richblack-700 animate-pulse"
      />
    ))}
  </div>
)

export default function MyCourses() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    const fetchCourses = async () => {
      setLoading(true)
      const result = await fetchInstructorCourses(token)
      setLoading(false)
      if (result) setCourses(result)
    }

    fetchCourses()
  }, [token])

  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-4xl font-medium text-richblack-5 font-boogaloo text-center lg:text-left">
          My Courses
        </h1>
        <IconBtn
          text="Add Course"
          onClick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </IconBtn>
      </div>

      {/* Loading Skeleton */}
      {loading && <SkeletonLoader />}

      {/* No Courses Message */}
      {!loading && courses.length === 0 && (
        <p className="text-center text-richblack-400 text-lg mt-10">
          You have no courses yet. Click "Add Course" to create one!
        </p>
      )}

      {/* Courses Table with fade-in animation */}
      {!loading && courses.length > 0 && (
        <div
          className="transition-opacity duration-500 ease-in"
          style={{ opacity: loading ? 0 : 1 }}
        >
          <CoursesTable
            courses={courses}
            setCourses={setCourses}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      )}
    </div>
  )
}
