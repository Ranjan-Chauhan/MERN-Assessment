import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-teal-600 text-white font-bold p-6 flex justify-normal items-center px-20 space-x-10">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "font-bold underline-offset-2" : "hover:opacity-75"
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? "font-bold underline" : "hover:opacity-75"
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "font-bold underline" : "hover:opacity-75"
        }
      >
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Navbar;
