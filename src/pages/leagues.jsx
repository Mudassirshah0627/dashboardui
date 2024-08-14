import { FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { Images } from "../assets";

function Leagues() {
  return (
    <div className="px-6 pt-6">
      <div className="flex justify-between w-full border-b pb-4">
        <div className="md:w-1/2 flex items-center gap-x-4">
          <IoMdMenu className="text-xl cursor-pointer" />
          <h1 className="text-base md:text-xl">Good morning, Mudasir</h1>
        </div>
        <LuLogOut className="text-2xl" />
      </div>

      <div className="flex justify-between w-full py-4 relative ">
        <h1 className="text-xl py-2 font-semibold">Tournaments List</h1>
        <input
          className="shadow-md rounded-md outline-none py-1 px-4"
          placeholder="search"
        />
        <FaSearch className="absolute right-2 text-gray-300 top-8" />
      </div>

      <div className="bg-[#F7F9FC] grid grid-cols-6 p-6 gap-6 rounded-md">
        <div className="flex flex-col items-center gap-y-4">
          <div className="bg-white min-w-[10vw] h-[8rem] p-2 rounded-md">
            <img className="w-full h-full" src={Images.leagues} />
          </div>
          <h1 className="text-sm font-semibold">Esports World Cup</h1>
        </div>

        <div className="flex flex-col items-center gap-y-4">
          <div className="bg-white min-w-[10vw] h-[8rem] p-2 rounded-md">
            <img className="w-full h-full" src={Images.leagues} />
          </div>
          <h1 className="text-sm font-semibold">Esports World Cup</h1>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <div className="bg-white min-w-[10vw] h-[8rem] p-2 rounded-md">
            <img className="w-full h-full" src={Images.leagues} />
          </div>
          <h1 className="text-sm font-semibold">Esports World Cup</h1>
        </div>
        <div className="bg-white min-w-[10vw] h-[8rem] p-2 rounded-md flex justify-center items-center">
          <FaPlus className="cursor-pointer" />
        </div>
      </div>

      <div className="">
        <div className="py-2">
          <h1 className="text-xl py-2 font-semibold">SEL Points</h1>
        </div>

        <div className="bg-[#F7F9FC] grid grid-cols-6 p-6 gap-6 rounded-md">
          <div className="flex flex-col items-center gap-y-1">
            <div className="bg-white min-w-[10vw] h-[8rem] p-2 rounded-md">
              <img className="w-full h-full" src={Images.leagues} />
            </div>
            <h1 className="text-sm font-semibold">1010</h1>
            <div className="flex w-full rounded-md bg-gray-200 py-2">
              <p className="flex justify-center w-1/2 items-center border-r border-[#757474]">
                <FaPlus className="text-xs font-normal cursor-pointer text-[#757474] " />
              </p>
              <p className="flex justify-center w-1/2 ">
                <FaMinus className="text-xs font-normal cursor-pointer text-[#757474]" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leagues;
