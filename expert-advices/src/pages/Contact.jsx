import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation example
    if (!formData.name || !formData.email) {
      setErrors({ submit: "Please fill all required fields" });
      return;
    }

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSczNzpJ66pOoN0XZSVoTCpKh0PLNaf0eUAWPq_CayyWUijeVQ/formResponse";

    const formBody = new FormData();
    formBody.append("entry.277017107", formData.name);
    formBody.append("entry.868455030", formData.email);
    formBody.append("entry.1602575840", formData.message);

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

  return (
    <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Right: Contact Form */}
      <div className="lg:w-[80%] w-full bg-white px-6 sm:px-10 lg:px-16 py-16 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Get in touch</h2>
        <p className="text-sm text-gray-600 mb-8 max-w-md">
          Need assistance or have inquiries? Our team is always ready to support
          you — just drop us a message!
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <button
            type="submit"
            className="bg-gray-900 hover:bg-gray-800 cursor-pointer text-white font-semibold px-4 py-2 rounded-lg transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Left: Contact Info */}
      <div className="lg:w-[27%] w-full relative bg-blue-900/80 text-white p-10 flex flex-col justify-between">
        <div className="flex flex-col space-y-40 text-right items-end">
          <div>
            <h2 className="text-2xl font-bold mt-20">Contact Info</h2>
            <p className="text-sm max-w-xs leading-relaxed">
              Feel Free To Contact Us And
              <br />
              Reach Us For More Info !
            </p>
          </div>

          <div className="">
            <div className="text-sm leading-6 space-y-2">
              <p className="font-semibold">
                info@vpexpertadvisor.com, loans@vpexpertadvisor.com
              </p>
              <p className="font-semibold">+91 8871528390</p>
              <p className="font-semibold">
                {" "}
                Office no F5 A, 2nd floor, Shiv Sadan, opp SBI bank / Metro
                Pillar 97, IIFL building, Vivek Vihar, Sodala, Jaipur, 302006
              </p>
            </div>

            <div>
              <p className="text-sm mb-2 mt-5">Follow us on</p>
              <div className="flex space-x-4 justify-end">
                <a href="#">
                  <Facebook size={18} />
                </a>
                <a href="#">
                  <Twitter size={18} />
                </a>
                <a href="#">
                  <Instagram size={18} />
                </a>
                <a href="#">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative shapes */}
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
    </div>
  );
};

export default Contact;
