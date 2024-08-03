import { Outlet } from "react-router-dom";
import SlideHeader from "./slideHeader";

function Dashboard() {
  return (
    <div className=" bg-primary p-4 h-screen flex ">
      <div className="md:w-[20vw] bg-primary text-secondary">
        <SlideHeader />
      </div>
      <div className="w-full overflow-x-hidden overflow-y-auto md:w-[80vw] bg-secondary h-full rounded-3xl">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
