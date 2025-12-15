import React, { useState } from "react";
import "./Components.css";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=61574846383609#",
  },
  {
    icon: Twitter,
    url: "https://x.com/experts_advises?t=KAmX3Jd1JXgxs_WIOaSjBg&s=09&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnvfN5xZ_kMjlOi5-IJPfmEwQ4lb_t0oVSx9XAaSn1k3ZIkdlXwifDEfK0glQ_aem__qwvIl7gzxIjSQTqW5PTYw",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/experts_advises?igsh=MW96cGYwOTh1MHpiZA==",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/@experts_advises",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubscribe = () => {
    if (!email || status !== "idle") return;

    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => {
        setStatus("idle");
      }, 1600);
    }, 1500);
  };

  return (
    <footer className="footerBg relative bg-slate-900 text-white">
      <div className="absolute inset-0 bg-slate-900/70 z-0" />

      <div className="px-4 sm:px-8 lg:px-16 py-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="py-10">
            <div className="border border-white/20 backdrop-blur-xs px-6 md:px-10 py-8 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center lg:text-left">
                <p className="text-sm font-semibold tracking-wider text-white mb-2 uppercase">
                  Subscribe Newsletter
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-white">
                  Subscribe & Get Latest
                  <br />
                  Update From Us!
                </h2>
              </div>

              <div className="flex-1 w-full">
                <p className="text-white/80 mb-4 text-sm lg:text-base text-center lg:text-left">
                  Subscribe us & receive our offers and updates in your inbox
                  directly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Email Address.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`flex-1 px-6 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      transition-all duration-300
                      ${
                        status !== "idle" ? "opacity-60 cursor-not-allowed" : ""
                      }
                    `}
                  />

                  <button
                    onClick={handleSubscribe}
                    className={`cursor-pointer px-6 py-3 rounded-md font-semibold uppercase tracking-widest
                      transition-all duration-300
                      ${
                        status === "idle"
                          ? "bg-[#0c0c2e] hover:bg-[#1a1a40] text-white"
                          : status === "sending"
                          ? "bg-[#0c0c2e] text-white"
                          : "bg-[#1a1a40] text-white"
                      }
                    `}
                  >
                    {status === "idle" && "Subscribe Now"}
                    {status === "sending" && "Sending..."}
                    {status === "success" && "Subscribed ✓"}
                  </button>
                </div>

                {status === "success" && (
                  <p className="text-white text-sm mt-3 text-center lg:text-left">
                    Thanks for subscribing! We’ll keep you updated.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-2 z-10 lg:grid-cols-3 mt-12">
            <div>
              <p className="text-gray-300 z-10 leading-relaxed tracking-wide">
                VP Experts Advises is a trusted financial advisory firm
                dedicated to helping individuals and businesses make informed
                financial decisions. We offer strategic solutions in planning,
                investing, protection, and growth.
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-white border-l-2 border-white pl-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { name: "Home", route: "/" },
                  { name: "About", route: "/about" },
                  { name: "Services", route: "/services" },
                  { name: "Career", route: "/career" },
                  { name: "Contact", route: "/contact" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.route}
                      className="text-gray-300 hover:text-white transition duration-200 flex items-center gap-4 text-base"
                    >
                      <div className="w-3 h-3 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-white border-l-2 border-white pl-4">
                Get in Touch
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-4">
                  <MapPin size={20} className="text-white mt-1 flex-shrink-0" />
                  <p>
                    Office no F5 A, 2nd floor, Shiv Sadan, opp SBI bank / Metro
                    Pillar 97, IIFL building, Vivek Vihar, Sodala, Jaipur,
                    302006
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone size={20} className="text-white" />
                  <div className="flex items-center gap-1">
                    <a href="tel:+918871528396">8871528396,</a>
                    <a href="tel:+919982222169">9982222169</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail size={20} className="text-white" />
                  <div className="flex items-center gap-1">
                    <a href="mailto:info@vpexpertadvisor.com">
                      info@vpexpertadvisor.com,
                    </a>
                    <a href="mailto:loans@vpexpertadvisor.com">
                      loans@vpexpertadvisor.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t relative z-10 border-slate-700 px-4 sm:px-8 lg:px-16 py-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex space-x-3">
            {socialLinks.map(({ icon: Icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition duration-200"
              >
                <Icon size={18} className="text-white" />
              </a>
            ))}
          </div>

          <p className="text-sm text-center">
            © 2025 Experts Advises. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
