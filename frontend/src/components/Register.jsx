import React, { useState } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    dateOfBirth: "",
    email: "",
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

    console.log("formdata", formData);

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();

      setMessage(data.message || "Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration Error:", error);
      setMessage(error.message || "An error occurred during registration.");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center justify-center w-[550px] h-1/2 m-10 bg-gradient-to-b from-teal-600 to-teal-900 rounded-lg">
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
          <form className="space-y-4 py-5 px-8" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="username"
                className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Date of Birth Input */}
            <div>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Password Input */}
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

            <button className="w-full bg-teal-400 text-black font-bold py-2 mt-4 rounded-lg hover:bg-teal-500 transition-all duration-200">
              REGISTER
            </button>
          </form>
          {message && <p className="text-center mt-4">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
