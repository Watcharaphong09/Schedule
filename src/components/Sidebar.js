import React, { useState } from "react";
import CreateEventButton from "./CreateEventButton";
import Labels from "./Labels";

const Sidebar = () => {
  return (
    <aside className="border p-1 sm:p-5 w-[3rem] sm:w-56 relative">
        <CreateEventButton />
        <Labels />
    </aside>
  );
};

export default Sidebar;
