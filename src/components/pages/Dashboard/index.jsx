import { AppSidebar } from "@/components/ui/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import NavigationMenu from "../../custom-ui/NavigationMenu";
import { useState } from "react";
import Analytics from "./components/Analytics";
import Services from "./components/Services";
import Bookings from "./components/Bookings";
import Messages from "./components/Messages";
import Profile from "./components/Profile";

const Dashboard = () => {
  const [pageSelected, setPageSelected] = useState("Dashboard");

  const pages = {
    Dashboard: Analytics,
    Services: Services,
    Bookings: Bookings,
    Messages: Messages,
    Profile: Profile,
  };

  const PageComponent = pages[pageSelected];

  return (
    <div className="w-[100vw] h-[100vh] overflow-y-auto overflow-x-hidden relative">
      <NavigationMenu />
      <SidebarProvider>
        <AppSidebar onClick={setPageSelected} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbPage href="#">
                      {pageSelected}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          
          <PageComponent />
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
};

export default Dashboard;