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
    <div className="hidden md:flex flex-col">
      <div className="flex items-center gap-x-2 px-4">
        <div className="w-[50px] h-[50px]">
          <img className="h-full w-full" src={Images.profile} />
        </div>
        <div className="flex flex-col text-sm">
          <h1 className="font-semibold">Samantha</h1>
          <p className="text-[10px] lg:text-sm text-gray-400">
            +998 (99) 436-46-15
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col pl-2">
        <div className="text-gray-500 px-2">Main Menu</div>
        <NavLink
          to="/"
          className="flex items-center gap-x-3 cursor-pointer py-2 px-2 rounded-tl-full rounded-bl-full"
        >
          <RiHome5Line className="text-[20px]" />
          <h1 className="text-sm">Dashboard</h1>
        </NavLink>

        <NavLink
          className="flex items-center gap-x-3 cursor-pointer py-2 px-2 rounded-tl-full rounded-bl-full"
          to="saudi-eLeagues"
        >
          <MdMotionPhotosAuto className="text-[20px]" />
          <h1 className="text-sm">Saudi eLeagues</h1>
        </NavLink>
        <NavLink
          className="flex items-center gap-x-3 cursor-pointer py-2 px-2 rounded-tl-full rounded-bl-full"
          to="rides"
        >
          <FaUserClock className="text-[20px]" />
          <h1 className="text-sm">Rides</h1>
        </NavLink>
        <NavLink
          className="flex items-center gap-x-3 cursor-pointer py-2 px-2 rounded-tl-full rounded-bl-full"
          to="players"
        >
          <PiUsersThreeLight className="text-[20px]" />
          <h1 className="text-sm">Players</h1>
        </NavLink>
        <NavLink
          to="orders"
          className="flex items-center gap-x-3 cursor-pointer py-2 px-2 rounded-tl-full rounded-bl-full"
        >
          <FaUserNurse className="text-[20px]" />
          <h1 className="text-sm">Orders</h1>
        </NavLink>
        <NavLink
          className="flex items-center gap-x-3 cursor-pointer py-2 px-2 rounded-tl-full rounded-bl-full"
          to="leagues"
        >
          <CiDollar className="text-[20px]" />
          <h1 className="text-sm">Leagues</h1>
        </NavLink>
        <NavLink
          className="flex items-center gap-x-3 cursor-pointer py-2 px-2 rounded-tl-full rounded-bl-full"
          to="live-map"
        >
          <TbWorldShare className="text-[20px]" />
          <h1 className="text-sm">Live map</h1>
        </NavLink>
        <NavLink
          to={"/car-classes"}
          className="flex items-center gap-x-3 cursor-pointer py-2 px-2 rounded-tl-full rounded-bl-full"
        >
          <FaCar className="text-[20px]" />
          <h1 className="text-sm">Car classes</h1>
        </NavLink>
        <NavLink
          className="flex items-center gap-x-3 cursor-pointer py-2 px-2 rounded-tl-full rounded-bl-full"
          to="branches"
        >
          <RxShare1 className="text-[20px]" />
          <h1 className="text-sm">Branches</h1>
        </NavLink>
        <NavLink
          className="flex items-center gap-x-3 cursor-pointer py-2 px-2 rounded-tl-full rounded-bl-full"
          to={"moderators"}
        >
          <TbUsers className="text-[20px]" />
          <h1 className="text-sm">Moderators</h1>
        </NavLink>
        <NavLink
          to={"/settings"}
          className="flex items-center gap-x-3 cursor-pointer py-2 px-2 rounded-tl-full rounded-bl-full"
        >
          <VscSettings className="text-[20px]" />
          <h1 className="text-sm">Settings</h1>
        </NavLink>
      </div>
    </div>
  );
}

export default SlideHeader;
