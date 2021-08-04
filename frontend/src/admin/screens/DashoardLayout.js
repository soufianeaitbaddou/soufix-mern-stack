import React, { useState } from "react";
import AdminNavBar from "../components/AdminNavBar";
import AdminDrawer from "../components/AdminDrawer";
import Container from "@material-ui/core/Container";

const DashoardLayout = (props) => {
  const [drawerOpen, setdrawerOpen] = useState(false);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setdrawerOpen(false);
  };

  const openDrawerHandller = () => {
    setdrawerOpen(true);
  };
  return (
    <div>
      <AdminNavBar openDrawerHandller={openDrawerHandller} />
      <AdminDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <Container maxWidth="md">{props.children}</Container>
    </div>
  );
};

export default DashoardLayout;
