import { IoMdMenu } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { Images } from "../assets";
import { FaSearch } from "react-icons/fa";

function Orders() {
  return (
    <div className="px-6 pt-6">
      {/*top header */}

      <div className="flex justify-between w-full border-b pb-4">
        <div className="md:w-1/2 flex items-center gap-x-4">
          <IoMdMenu className="text-xl cursor-pointer" />
          <h1 className="text-base md:text-xl">Good morning, Mudasir</h1>
        </div>
        <LuLogOut className="text-2xl" />
      </div>

      <div className="flex justify-between w-full py-4 relative">
        <h1 className="text-xl py-2 font-semibold">Tournaments List</h1>
        <input
          className="shadow-md rounded-md outline-none py-1 px-4"
          placeholder="search"
        />
        <FaSearch className="absolute right-2 text-gray-300 top-8" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 bg-[#F7F9FC]  overflow-x-hidden overflow-y-auto p-6 gap-6">
        <div className="h-fit ">
          <div className="flex flex-col rounded-md bg-white p-4">
            <img className="w-full h-[80px]" src={Images.product} />
          </div>
          <h1 className=" text-center py-2 font-semibold">Team Falcons</h1>
        </div>
        <div className="  h-fit">
          <div className="flex flex-col rounded-md bg-white p-4">
            <img className="w-full h-[80px]" src={Images.product} />
          </div>
          <h1 className="text- text-center py-2 font-semibold">Team Falcons</h1>
        </div>
        <div className="  h-fit">
          <div className="flex flex-col rounded-md bg-white p-4">
            <img className="w-full h-[80px]" src={Images.product} />
          </div>
          <h1 className="text- text-center py-2 font-semibold">Team Falcons</h1>
        </div>
        <div className="  h-fit">
          <div className="flex flex-col rounded-md bg-white p-4">
            <img className="w-full h-[80px]" src={Images.product} />
          </div>
          <h1 className="text- text-center py-2 font-semibold">Team Falcons</h1>
        </div>
        <div className="  h-fit">
          <div className="flex flex-col rounded-md bg-white p-4">
            <img className="w-full h-[80px]" src={Images.product} />
          </div>
          <h1 className="text- text-center py-2 font-semibold">Team Falcons</h1>
        </div>
        <div className="  h-fit">
          <div className="flex flex-col rounded-md bg-white p-4">
            <img className="w-full h-[80px]" src={Images.product} />
          </div>
          <h1 className="text- text-center py-2 font-semibold">Team Falcons</h1>
        </div>{" "}
        <div className="  h-fit">
          <div className="flex flex-col rounded-md bg-white p-4">
            <img className="w-full h-[80px]" src={Images.product} />
          </div>
          <h1 className="text- text-center py-2 font-semibold">Team Falcons</h1>
        </div>
        <div className="  h-fit">
          <div className="flex flex-col rounded-md bg-white p-4">
            <img className="w-full h-[80px]" src={Images.product} />
          </div>
          <h1 className="text- text-center py-2 font-semibold">Team Falcons</h1>
        </div>
        <div className="  h-fit">
          <div className="flex flex-col rounded-md bg-white p-4">
            <img className="w-full h-[80px]" src={Images.product} />
          </div>
          <h1 className="text- text-center py-2 font-semibold">Team Falcons</h1>
        </div>{" "}
        <div className="  h-fit">
          <div className="flex flex-col rounded-md bg-white p-4">
            <img className="w-full h-[80px]" src={Images.product} />
          </div>
          <h1 className="text- text-center py-2 font-semibold">Team Falcons</h1>
        </div>
        <div className="  h-fit">
          <div className="flex flex-col rounded-md bg-white p-4">
            <img className="w-full h-[80px]" src={Images.product} />
          </div>
          <h1 className="text- text-center py-2 font-semibold">Team Falcons</h1>
        </div>
        <div className="  h-fit">
          <div className="flex flex-col rounded-md bg-white p-4">
            <img className="w-full h-[80px]" src={Images.product} />
          </div>
          <h1 className="text- text-center py-2 font-semibold">Team Falcons</h1>
        </div>
      </div>
    </div>
  );
}

export default Orders;
