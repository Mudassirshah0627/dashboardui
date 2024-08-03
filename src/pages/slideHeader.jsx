import { RiHome5Line } from "react-icons/ri";
import { Images } from "../assets";
import { FaCar, FaUserClock, FaUserNurse } from "react-icons/fa";
import { PiUsersThreeLight } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { TbUsers, TbWorldShare } from "react-icons/tb";
import { RxShare1 } from "react-icons/rx";
import { VscSettings } from "react-icons/vsc";
import { MdMotionPhotosAuto } from "react-icons/md";
import { NavLink } from "react-router-dom";

function SlideHeader() {
  return (
    <div>
      <div className="flex items-center gap-x-2">
        <div className="w-[50px] h-[50px]">
          <img className="h-full w-full" src={Images.profile} />
        </div>
        <div className="flex flex-col text-sm">
          <h1 className="font-semibold">Samantha</h1>
          <p className="text-xs text-gray-400">+998 (99) 436-46-15</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-y-4">
        <div className="text-gray-500">Main Menu</div>
        <NavLink
          to="/dashboard"
          className="flex items-center gap-x-3 cursor-pointer"
        >
          <RiHome5Line className="text-[20px]" />
          <h1 className="text-sm">Dashboard</h1>
        </NavLink>

        <NavLink
          className="flex items-center gap-x-3 cursor-pointer"
          to="saudi-eLeagues"
        >
          <MdMotionPhotosAuto className="text-[20px]" />
          <h1 className="text-sm">Saudi eLeagues</h1>
        </NavLink>
        <NavLink className="flex items-center gap-x-3 cursor-pointer">
          <FaUserClock className="text-[20px]" />
          <h1 className="text-sm">Rides</h1>
        </NavLink>
        <NavLink className="flex items-center gap-x-3 cursor-pointer">
          <PiUsersThreeLight className="text-[20px]" />
          <h1 className="text-sm">Clients</h1>
        </NavLink>
        <NavLink className="flex items-center gap-x-3 cursor-pointer">
          <FaUserNurse className="text-[20px]" />
          <h1 className="text-sm">Drivers</h1>
        </NavLink>
        <NavLink className="flex items-center gap-x-3 cursor-pointer">
          <CiDollar className="text-[20px]" />
          <h1 className="text-sm">Shift</h1>
        </NavLink>
        <NavLink className="flex items-center gap-x-3 cursor-pointer">
          <TbWorldShare className="text-[20px]" />
          <h1 className="text-sm">Live map</h1>
        </NavLink>
        <NavLink className="flex items-center gap-x-3 cursor-pointer">
          <FaCar className="text-[20px]" />
          <h1 className="text-sm">Car classes</h1>
        </NavLink>
        <NavLink className="flex items-center gap-x-3 cursor-pointer">
          <RxShare1 className="text-[20px]" />
          <h1 className="text-sm">Branches</h1>
        </NavLink>
        <NavLink className="flex items-center gap-x-3 cursor-pointer">
          <TbUsers className="text-[20px]" />
          <h1 className="text-sm">Moderators</h1>
        </NavLink>
        <NavLink className="flex items-center gap-x-3 cursor-pointer">
          <VscSettings className="text-[20px]" />
          <h1 className="text-sm">Settings</h1>
        </NavLink>
      </div>
    </div>
  );
}

export default SlideHeader;
