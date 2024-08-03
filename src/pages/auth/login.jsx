import { Link } from "react-router-dom";
import { Images } from "../../assets";

function Login() {
  return (
    <div className="h-screen flex w-full bg-primary px-[5%] lg:px-[10%]  py-6 items-center ">
      <div className="w-1/2 h-full hidden md:flex">
        <img className="w-full h-full" src={Images.LoginBackground} />
      </div>
      <div className="w-full md:w-1/2 bg-secondary rounded-tl-[30px] rounded-bl-[30px] md:rounded-tl-[0] md:rounded-bl-[0]  rounded-tr-[30px] rounded-br-[30px] px-6 h-full ">
        <div className="flex w-full justify-center ">
          <img className="w-[200px] h-[150px] mr-14" src={Images.logo} />
        </div>
        <div>
          <h1 className="text-2xl text-center font-semibold py-2">
            Log In to Admin Panel
          </h1>
          <p className="text-center text-gray-300">
            Enter your phone number and password below
          </p>
        </div>
        <div className="flex flex-col gap-y-4 mt-6">
          <div className="flex flex-col gap-y-1">
            <p>PHONE NUMBER</p>
            <input
              className="w-full py-2 outline-none px-2 border border-black rounded-md"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <p>PASSWORD</p>
            <input
              className="w-full py-2 outline-none px-2 border border-black rounded-md"
              placeholder="Enter your phone number"
            />
          </div>

          <Link
            to="/dashboard"
            className="bg-[#101010] text-white py-2 flex justify-center rounded-md cursor-pointer mt-1"
          >
            Login
          </Link>
          <div className="flex justify-center">
            Don-t have an account{" "}
            <span className="font-semibold pl-2 cursor-pointer">Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
