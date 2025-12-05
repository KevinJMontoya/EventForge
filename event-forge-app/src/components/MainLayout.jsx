import React from "react";
import Navbar from "../components/Navbar";
import '../styling/MainLayout.css';

export default function MainLayout({ children }) {

  const getNav = () => {
    if (role == "organizer"){
      return <OrganizerNavbar />
    } else {
      return <Navbar />
    }
  };

  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-content">{children}</main>
    </div>
  );
}

