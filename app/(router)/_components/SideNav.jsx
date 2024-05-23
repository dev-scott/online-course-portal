import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";
import React from "react";

function SideNav() {
  const menu = [

    { id: 2, name: "MemberShip", icon: BadgeIcon },
    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap,
    },
  ];

  return <div>SideNav</div>;
}

export default SideNav;
