import { AiOutlineMessage } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { Images } from "../assets";
import { MdOutlineDelete } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaRegEdit, FaSearch } from "react-icons/fa";

function Players() {
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

      <section className=" px-4 mx-auto">
        <div className="flex flex-col ">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="w-[1%] px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      ></th>
                      <th
                        scope="col"
                        className="w-[60px] py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      ></th>
                      <th
                        scope="col"
                        className="w-[16%] px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Players
                      </th>
                      <th
                        scope="col"
                        className="w-[50px] py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Team
                      </th>
                      <th
                        scope="col"
                        className="w-[4%] px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Game
                      </th>
                      <th
                        scope="col"
                        className=" py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className=" px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        DOB
                      </th>
                      <th
                        scope="col"
                        className="w-[200px] py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        History
                      </th>
                      <th
                        scope="col"
                        className="w- py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Achievments
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                      <td className="    px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <AiOutlineMessage className="text-2xl" />
                      </td>
                      <td className=" px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <img className="" src={Images.player} />
                      </td>
                      <td className="    px-2 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <h2 className="text-sm font-normal ">Mudasir</h2>
                      </td>
                      <td className=" px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <img className="" src={Images.team} />
                      </td>{" "}
                      <td className=" px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <img className="" src={Images.game} />
                      </td>
                      <td className=" px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <img className="" src={Images.role} />
                      </td>
                      <td className="    px-2 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <h2 className="text-sm font-normal">27/5/2005</h2>
                      </td>
                      <td className=" w-[100px]   px-2 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <p className="text-sm font-normal  w-[200px] text-wrap">
                          01 Esports, Onyx Esports, Twisted Minds
                        </p>
                      </td>
                      <td className="relative py-3.5 px-4">
                        <div className="flex items-center gap-x-2 text-lg">
                          <FaXTwitter />
                          <MdOutlineDelete />
                          <FaRegEdit />
                          <FaInstagram />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Players;
