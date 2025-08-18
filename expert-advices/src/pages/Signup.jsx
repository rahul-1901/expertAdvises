import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import user from "../assets/user.png";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`, formData);

      toast.success("Account created successfully 🎉", { autoClose: 1500 });
      setFormData({ name: "", email: "", password: "" });

      setTimeout(() => navigate("/login"), 1800);
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed!", { autoClose: 2000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">

        {/* Left Illustration */}
        <div className="hidden md:flex md:w-1/2 relative bg-gradient-to-b from-blue-800/80 to-indigo-300/80 overflow-hidden">
          <div className="absolute w-24 h-24 bg-purple-400/30 rounded-full top-10 left-10" />
          <div className="absolute w-16 h-16 bg-indigo-500/30 rounded-full bottom-20 right-12 animate-bounce" />
          <div className="absolute w-20 h-20 bg-white/10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-fast" />
          <div className="absolute w-10 h-10 bg-pink-200/20 rounded-full top-1/4 right-1/3 animate-pulse" />
          <svg
            className="absolute bottom-0 left-0 w-40 h-40 text-indigo-500/30"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M41.6,-62.5C53.5,-53.3,63.7,-44.3,67.2,-32.6C70.6,-21,67.3,-6.7,62.2,5.6C57.1,17.8,50.1,27.9,43.4,39.6C36.7,51.2,30.2,64.4,19.4,70.2C8.6,76.1,-6.5,74.7,-20.4,70.2C-34.3,65.7,-47,58.1,-56.2,47.4C-65.5,36.7,-71.4,22.9,-72.6,9C-73.8,-4.8,-70.3,-18.8,-63.7,-30.4C-57.1,-42.1,-47.4,-51.5,-36.5,-61.2C-25.5,-70.9,-12.7,-80.8,-0.3,-80.4C12.2,-79.9,24.5,-69.8,41.6,-62.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 bg-white px-6 sm:px-10 py-12 relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-violet-100 text-violet-600 p-2 rounded-full">
              <img className="h-12 w-12" src={user} alt="user" />
            </div>
          </div>

          <h2 className="text-center text-2xl font-semibold text-gray-900 mb-4">
            Create an account
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create your password"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
                {showPassword ? (
                  <Eye
                    className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <EyeOff
                    className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 cursor-pointer rounded-lg bg-blue-800/90 hover:bg-blue-800 text-white font-semibold transition disabled:opacity-70"
            >
              {loading ? "Creating..." : "Create an account"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 my-4">
            <hr className="w-full border-gray-300" />
            <span className="text-xs text-gray-400 font-medium">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          <button className="w-full flex items-center justify-center cursor-pointer gap-3 border border-gray-300 rounded-lg py-2 mb-4 hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm text-gray-700 font-medium">
              Create account with Google
            </span>
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?
            <Link
              to="/login"
              className="text-violet-600 font-semibold ml-1 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
