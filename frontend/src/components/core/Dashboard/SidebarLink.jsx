 
import * as Icons from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, matchPath, useLocation } from "react-router-dom";

import { resetCourseState } from "../../../slices/courseSlice";
import { setOpenSideMenu } from "../../../slices/sidebarSlice";

export default function SidebarLink({ link, iconName }) {
  const Icon = Icons[iconName];
  const location = useLocation();
  const dispatch = useDispatch();
  const { screenSize } = useSelector((state) => state.sidebar);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const handleClick = () => {
    dispatch(resetCourseState());
    if (screenSize <= 640) {
      dispatch(setOpenSideMenu(false));
    }
  };

  const isActive = matchRoute(link.path);

  return (
    <NavLink
      to={link.path}
      onClick={handleClick}
      className={`relative group px-8 py-2 text-sm font-medium transition-all duration-300
        ${
          isActive
            ? "bg-yellow-800 text-yellow-50"
            : "text-richblack-300 hover:bg-richblack-700 hover:text-white"
        }
      `}
    >
      {/* 🔸 Sliding Left Indicator */}
      <span
        className={`absolute left-0 top-0 h-full w-[0.25rem] rounded-r-md bg-yellow-300 transition-all duration-300
          ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"}
        `}
      />

      {/* 🔸 Icon and Label */}
      <div className="flex items-center gap-x-2 transition-transform group-hover:translate-x-1 duration-300">
        <Icon className="text-lg" />
        <span>{link.name}</span>
      </div>
    </NavLink>
  );
}
