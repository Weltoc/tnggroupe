// AppLayout.jsx
import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import "./layout.css";

import RentAppartment from "./RentAppartment";

export default function AppLayout() {
  const [sbCollapsed, setSbCollapsed] = useState(false);
  const [sbHidden, setSbHidden] = useState(false);
  const [sbMobileOpen, setSbMobileOpen] = useState(false);

  const layoutClass = [
    "layout-root",
    sbCollapsed ? "layout-sbCollapsed" : "",
    sbHidden ? "layout-sbHidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <NavBar
        mobileSidebarOpen={sbMobileOpen}
        onOpenSidebar={() => setSbMobileOpen(true)}
        onCloseSidebar={() => setSbMobileOpen(false)}
        onToggleSidebar={() => setSbCollapsed((v) => !v)} // desktop collapse
      />

      <div className={layoutClass}>
        <SideBar
          collapsed={sbCollapsed}
          hidden={sbHidden}
          mobileOpen={sbMobileOpen}
          onCloseMobile={() => setSbMobileOpen(false)}
          onToggleCollapse={() => setSbCollapsed((v) => !v)}
          onToggleHidden={() => setSbHidden((v) => !v)}
        />

        <main className="layout-main">
          <RentAppartment />
        </main>
      </div>
    </>
  );
}
