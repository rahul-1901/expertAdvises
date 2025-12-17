import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import "./Home.css";
import Footer from "../components/Footer";
import ea from "../assets/ea.jpg";
import { Check } from "lucide-react";

const About = () => {
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
    <>
      <div className="relative aboutUs h-[100vh] overflow-hidden bg-no-repeat bg-cover bg-center">
        {/* Overlay to soften background */}
        <div className="absolute inset-0 bg-gradient-to-r to-transparent z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 px-6 py-24 lg:py-50 lg:px-20 max-w-7xl mx-auto">
          <div className="max-w-xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-blue-900 leading-tight">
              Empowering Your <br />
              <span className="text-blue-800/90">Financial Future</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We help individuals and businesses make smarter financial
              decisions through expert guidance, transparent strategies and
              personalized solutions. Our focus is on long-term growth,
              security and building financial confidence you can rely on.
            </p>
          </div>
        </div>

        {/* Curved White Bottom Shape */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-24 fill-white"
          >
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      <section className="px-6 py-14 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Circular Image */}
          <div className="w-82 mt-8 h-82 mx-auto bg-red-200 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={ea}
              alt="About VP Experts Advises"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center lg:text-left">
              About Us
            </h2>

            <p className="text-gray-600 fade-section text-lg leading-relaxed mb-6">
              VP Experts Advises Pvt. Ltd., based in Jaipur, is committed to
              empowering individuals and businesses in achieving their financial
              aspirations. We offer strategic, personalized financial planning
              and advisory services, with a focus on long-term wealth creation
              and financial security.
            </p>

            <p className="text-gray-600 fade-section1 text-lg leading-relaxed">
              We pride ourselves on our deep industry knowledge, client-centric
              approach, and a strong commitment to integrity and excellence. Our
              mission is to build trusted partnerships with our clients by
              guiding them through sound financial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-10">Vision and Mission</h2>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            {/* Card 1 */}
            <div>
              {/* Number Circle */}
              <div className="w-10 h-10 mb-3 fade-section flex items-center justify-center rounded-full bg-gray-900 text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-xl fade-section font-semibold text-gray-900 mb-3">
                Integrity
              </h3>
              <p className="text-gray-600 fade-section mb-4">
                We operate with transparency and honesty in every dealing with
                our clients and partners.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex fade-section items-center">
                  <Check size={20} className="text-blue-900 font-bold mr-2" />
                  Honest communication at all levels
                </li>
                <li className="flex fade-section items-center">
                  <Check size={20} className="text-blue-900 font-bold mr-2" />
                  Ethical financial practices
                </li>
                <li className="flex fade-section items-center">
                  <Check size={20} className="text-blue-900 font-bold mr-2" />
                  Transparent decision-making
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div>
              <div className="w-10 h-10 mb-3 fade-section1  flex items-center justify-center rounded-full bg-gray-900 text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-xl fade-section1 font-semibold text-gray-900 mb-3">
                Safety First
              </h3>
              <p className="text-gray-600 fade-section1 mb-4">
                We prioritize the safety and well-being of both our employees
                and customers.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex fade-section1 items-center">
                  {/* <span className="text-blue-900 mr-2">✔</span> */}
                  <Check size={20} className="text-blue-900 font-bold mr-2" />
                  Secure financial transactions
                </li>
                <li className="flex  fade-section1 items-center">
                  {/* <span className="text-blue-900 mr-2">✔</span> */}
                  <Check size={20} className="text-blue-900 font-bold mr-2" />
                  Data privacy compliance
                </li>
                <li className="flex fade-section1 items-center">
                  {/* <span className="text-blue-900 mr-2">✔</span> */}
                  <Check size={20} className="text-blue-900 font-bold mr-2" />
                  Regular safety audits
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div>
              <div className="w-10 h-10 mb-3 fade-section2  flex items-center justify-center rounded-full bg-gray-900 text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-xl fade-section2  font-semibold text-gray-900 mb-3">
                Respect
              </h3>
              <p className="text-gray-600  fade-section2 mb-4">
                We treat every employee, customer, and partner with respect and
                fairness.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex fade-section2 items-center">
                  <Check size={20} className="text-blue-900 font-bold mr-2" />
                  Inclusive workplace culture
                </li>
                <li className="flex fade-section2 items-center">
                  <Check size={20} className="text-blue-900 font-bold mr-2" />
                  Equal opportunity for all
                </li>
                <li className="flex fade-section2 items-center">
                  <Check size={20} className="text-blue-900 font-bold mr-2" />
                  Transparent feedback channels
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="text-white px-6 py-8 lg:px-8">
        <div className="flex items-center justify-center mx-auto gap-4">
          <div className="bg-white max-w-sm h-40 p-5 text-gray-900 rounded-3xl shadow-xl space-y-4">
            <div className="flex items-center gap-2 font-semibold text-sm text-gray-700">
              <span className="text-yellow-500 font-bold">⟶</span> VISION
            </div>
            <p className="text-base font-medium">
              To be the most trusted and client-centric financial advisory firm in India.
            </p>
          </div>

          <div className="bg-white text-gray-900 h-40 max-w-sm p-5 rounded-3xl shadow-xl space-y-4">
            <div className="flex items-center gap-2 font-semibold text-sm text-gray-700">
              <span className="text-yellow-500 font-bold">⟶</span> MISSION
            </div>
            <p className="text-base font-medium">
              To empower individuals and businesses by delivering strategic, personalized financial
              solutions that lead to lasting financial security and growth.
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;
