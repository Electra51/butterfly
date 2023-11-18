import DashBoardNav from "@/components/shared/DashBoardNav";
import SideBar from "@/components/shared/SideBar";

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <SideBar />
      <div>
        <DashBoardNav />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
