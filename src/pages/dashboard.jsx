import { Outlet } from "react-router-dom";
import SlideHeader from "./slideHeader";

function Dashboard() {
  return (
    <div className=" bg-primary p-4 h-screen flex ">
      <div className="w-[20vw] bg-primary text-secondary">
        <SlideHeader />
      </div>
      <div className="w-[80vw] bg-secondary h-full rounded-3xl">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
