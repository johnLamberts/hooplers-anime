import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import { Outlet } from "react-router-dom";

const AppPageLayout = () => {
  return (
    <>
      <div className="p-2">
        <Navbar />
      </div>

      <Separator className="bg-white" />
      <Outlet />
    </>
  );
};
export default AppPageLayout;
