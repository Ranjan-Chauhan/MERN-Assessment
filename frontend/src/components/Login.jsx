import React, { useState } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("authToken", response.data.token);

      setMessage(response.data.message || "Login successful!");
      navigate("/dashboard");
    } catch (error) {
      setMessage(
        error.response?.data?.message || "An error occurred during login."
      );
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center justify-center w-1/3 h-1/2 m-10 p-16 bg-gradient-to-b from-teal-600 to-teal-900 rounded-lg">
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
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
                required
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
              <Link to="#" className="text-teal-400 hover:underline">
                Forgot your password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-400 text-black font-bold py-2 mt-4 rounded-lg hover:bg-teal-500 transition-all duration-200"
            >
              LOGIN
            </button>
          </form>

          {message && <p className="text-center mt-4">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
