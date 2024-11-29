// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-teal-600 text-white font-bold p-6 flex justify-normal items-center px-20 space-x-10">
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           isActive ? "font-bold underline-offset-2" : "hover:opacity-75"
//         }
//       >
//         Login
//       </NavLink>
//       <NavLink
//         to="/register"
//         className={({ isActive }) =>
//           isActive ? "font-bold underline" : "hover:opacity-75"
//         }
//       >
//         Register
//       </NavLink>
//       <NavLink
//         to="/dashboard"
//         className={({ isActive }) =>
//           isActive ? "font-bold underline" : "hover:opacity-75"
//         }
//       >
//         Dashboard
//       </NavLink>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

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

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="text-white hover:opacity-75 font-bold"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
