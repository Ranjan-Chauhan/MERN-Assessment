import React from "react";
// import "../App.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center justify-center w-1/3 h-1/2 m-20 p-16  bg-gradient-to-b from-teal-600 to-teal-900 rounded-lg">
        <div className="w-96 bg-[#0d1b2a] text-white rounded-lg shadow-xl p-6">
          <div className="relative">
            <h2 className="absolute top-[-35px] left-1/2 transform -translate-x-1/2 bg-teal-400 text-gray-800 px-4 py-2 w-48 flex justify-center items-center rounded font-bold">
              SIGN IN
            </h2>
          </div>
          <div className="flex justify-center mt-8">
            <div className="rounded-full flex items-center justify-center">
              <AccountCircleRoundedIcon
                sx={{ fontSize: "80px", color: "gray" }}
              />
            </div>
          </div>
          <form className="mt-6 space-y-4">
            <div>
              <input
                type="text"
                placeholder="username"
                className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="password"
                className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="flex items-center justify-between text-sm mt-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-teal-500"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-teal-400 hover:underline">
                Forgot your password?
              </a>
            </div>
            <button className="w-full bg-teal-400 text-black font-bold py-2 mt-4 rounded-lg hover:bg-teal-500 transition-all duration-200">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
