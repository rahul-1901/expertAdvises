import React, { useState, useEffect } from "react";
import { Award, HandCoins, HeartPulse } from "lucide-react";
import "./Home.css";
import { toast } from "react-toastify";

const jobs = [
  {
    title: "Head Supervisor",
    type: "Full Time / Part Time",
    desc: "Lead and manage field teams, oversee daily operations, ensure service quality, and coordinate with management to achieve business targets and client satisfaction.",
  },
  {
    title: "Accountant",
    type: "Full Time",
    desc: "Handle company accounts, maintain financial records, manage invoices and taxation, and ensure compliance with accounting standards and financial regulations.",
  },
  {
    title: "Field Inspector",
    type: "Part Time",
    desc: "Conduct on-site inspections, verify documents and client details, submit inspection reports, and support underwriting and verification processes.",
  },
  {
    title: "Insurance Agent",
    type: "Full Time / Part Time",
    desc: "Advise clients on suitable insurance products, generate leads, build long-term customer relationships, and assist customers throughout the policy lifecycle.",
  },
];

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.position.trim()) newErrors.position = "Position is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation example
    if (!formData.name || !formData.email || !formData.position) {
      setErrors({ submit: "Please fill all required fields" });
      return;
    }

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSc2aHV1_O7w5-EpHtiBehXdZu0jb76tPAFBz7vOS0PbjKKZ_Q/formResponse";

    const formBody = new FormData();
    formBody.append("entry.1199960558", formData.name);
    formBody.append("entry.1702953746", formData.email);
    formBody.append("entry.2139503846", formData.position);
    formBody.append("entry.505912037", formData.message);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: formBody,
        mode: "no-cors", // REQUIRED
      });

      // success (no response available because of no-cors)
      setFormData({
        name: "",
        email: "",
        position: "",
        message: "",
      });

      toast.success("Will reach out to you shortly!!", { autoClose: 1500 });
    } catch (error) {
      console.error("Error submitting form", error);
      toast.success("Something went wrong, try again later....", {
        autoClose: 1500,
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(
      ".fade-section, .fade-section1, .fade-section2"
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Top Info Section */}
      <div className="bg-blue-900/70 px-4 py-20 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-gray-800 uppercase mb-3">
              Book Appointment
            </p>
            <h2 className="text-4xl text-white font-bold border-l-4 border-gray-900/70 pl-4">
              Our Company Has Been Trusted For Over 25 Years
            </h2>
          </div>

          <p className="text-black text-sm max-w-lg leading-relaxed">
            With more than two decades of experience, we have helped individuals
            and businesses make confident financial decisions. Our expertise
            spans investment planning, insurance advisory, and long-term
            financial security, backed by transparent processes and dedicated
            support.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 fade-section rounded-md shadow-sm text-center flex flex-col items-center">
            <div className="bg-gray-900 text-white rounded-full px-4 py-4 mb-4">
              <Award size={32} />
            </div>
            <h4 className="font-bold text-lg text-gray-900 mb-1">
              Award-Winning Service
            </h4>
            <p className="text-sm text-gray-600">
              Recognized for delivering consistent results, client satisfaction
              and excellence in financial and insurance advisory services.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 fade-section1 rounded-md shadow-sm text-center flex flex-col items-center">
            <div className="bg-gray-900 text-white rounded-full p-4 mb-4">
              <HandCoins size={32} />
            </div>
            <h4 className="font-bold text-lg text-gray-900 mb-1">
              Transparent Financial Benefits
            </h4>
            <p className="text-sm text-gray-600">
              We offer clear, well-structured financial plans and allowances
              that prioritize long-term value and client trust.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 fade-section2 rounded-md shadow-sm text-center flex flex-col items-center">
            <div className="bg-gray-900 text-white rounded-full p-4 mb-4">
              <HeartPulse size={32} />
            </div>
            <h4 className="font-bold text-lg text-gray-900 mb-1">
              Comprehensive Insurance Coverage
            </h4>
            <p className="text-sm text-gray-600">
              End-to-end insurance solutions designed to protect your health,
              assets and financial future with complete peace of mind.
            </p>
          </div>
        </div>

        <svg
          className="absolute top-28 left-6 opacity-40"
          width="40"
          height="40"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          <polygon points="0,20 30,10 30,30" />
        </svg>
        <div className="absolute top-[45%] right-[-24px] w-24 h-24 border-[12px] border-white/30 rounded-full opacity-20" />
        <div className="absolute bottom-28 left-4 w-10 h-10 border-2 border-white/30 rotate-45 opacity-40" />
        <div className="absolute bottom-10 left-4 grid grid-cols-4 gap-1 opacity-20">
          {[...Array(4)].map((_, i) =>
            [...Array(4)].map((_, j) => (
              <div
                key={`${i}-${j}`}
                className="w-1.5 h-1.5 bg-white/40 rounded-full"
              />
            ))
          )}
        </div>
      </div>

      {/* Career Section */}
      <div className="min-h-screen bg-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-gray-900 uppercase">
              Join us now
            </p>
            <h2 className="text-4xl font-semibold text-gray-900 mt-2">
              Let's Join With Us !!
            </h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mt-2 rounded-xl" />
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Job Cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {jobs.map((job, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition"
                >
                  <p className="text-xs font-bold uppercase text-gray-800 mb-2">
                    {job.type}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{job.desc}</p>
                  <button className="px-6 py-3 text-white bg-gray-900 hover:bg-gray-800 text-sm cursor-pointer font-semibold rounded-lg">
                    APPLY NOW
                  </button>
                </div>
              ))}
            </div>

            {/* Right: Form */}
            {/* <div className="bg-blue-900/70 p-6 fade-section rounded-xl shadow-md space-y-4">
              <h3 className="text-xl font-semibold text-center text-white py-2">
                Join Our Team
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Your Position*"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none"
                />
                <textarea
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-gray-900 hover:bg-gray-800 text-white py-3 font-semibold rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div> */}
            <div className="bg-blue-900/70 p-6 fade-section rounded-xl shadow-md space-y-4">
              <h3 className="text-xl font-semibold text-center text-white py-2">
                Join Our Team
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name}</p>
                )}

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email}</p>
                )}

                <input
                  type="text"
                  name="position"
                  placeholder="Your Position*"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none"
                />
                {errors.position && (
                  <p className="text-red-400 text-sm">{errors.position}</p>
                )}

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm">{errors.message}</p>
                )}

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-gray-900 hover:bg-gray-800 text-white py-3 font-semibold rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
