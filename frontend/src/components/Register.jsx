import React from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Register = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center justify-center w-[550px] h-1/2 m-20 bg-gradient-to-b from-teal-600 to-teal-900 rounded-lg">
        <div className="w-[450px] bg-[#0d1b2a] text-white rounded-lg shadow-xl p-6 m-10">
          <div className="relative">
            <h2 className="absolute top-[-35px] left-1/2 transform -translate-x-1/2 bg-teal-400 text-gray-800 px-4 py-2 w-48 flex justify-center items-center rounded font-bold">
              SIGN UP
            </h2>
          </div>
          <div className="flex justify-center mt-4">
            <div className="rounded-full flex items-center justify-center">
              <AccountCircleRoundedIcon
                sx={{ fontSize: "80px", color: "gray" }}
              />
            </div>
          </div>
          <form className="space-y-4 py-5 px-8">
            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Date of Birth Input */}
            <div>
              <input
                type="date"
                placeholder="Date of Birth"
                className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <button className="w-full bg-teal-400 text-black font-bold py-2 mt-4 rounded-lg hover:bg-teal-500 transition-all duration-200">
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
