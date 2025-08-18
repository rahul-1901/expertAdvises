import React, { useEffect } from 'react';
import bgImage from '../assets/bg.png';
import './Home.css'
import hdfc from '../assets/hdfc.png'
import icici from '../assets/icici.png'
import bajaj from '../assets/bajaj.png'
import axis from '../assets/axis.png'
import tata from '../assets/tata.png'
import icici1 from '../assets/icici1.png'
import reliance from '../assets/reliance.png'
import magma from '../assets/magma.png'
import manipal from '../assets/manipal.png'
import chola from '../assets/chora.png'
import care from '../assets/care.png'
import niva from '../assets/niva.png'
import aditya from '../assets/aditya.png'
import hdfc1 from '../assets/hdfc1.png'
import digit from '../assets/digit.png'
import sbi from '../assets/sbi.png'
import national from '../assets/national.png'
import iifco from '../assets/iffco.png'
import zurich from '../assets/zurich.png'
import united from '../assets/united.png'
import oriental from '../assets/oriental.png'
import CountUp from '../components/CountUp'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPinterest } from 'react-icons/fa';
import { Users, Award, Target, Star } from 'lucide-react';
import FAQ from '../components/Faq'
import Footer from '../components/Footer'
import CardSwipe from "@/components/ui/card-swipe"

const features = [
  {
    title: "Personalized Approach",
    description: "We tailor our services to meet your unique needs.",
    borderColor: "border-l-yellow-400",
    textColor: "text-gray-700",
    animation: "cardFloat"
  },
  {
    title: "Expertise You Can Trust",
    description: "Our advisors have deep financial market knowledge.",
    borderColor: "border-l-blue-400",
    textColor: "text-gray-700",
    animation: "cardFloat1"
  },
  {
    title: "Long-Term Relationships",
    description: "We build trust-based, lasting client partnerships.",
    borderColor: "border-l-green-400",
    textColor: "text-gray-900",
    animation: "cardFloat2"
  },
  {
    title: "Results-Driven",
    description: "We help you reach financial goals confidently.",
    borderColor: "border-l-purple-400",
    textColor: "text-gray-900",
    animation: "cardFloat3"
  },
  {
    title: "Qualified Professionals",
    description: "Our team stays sharp through constant learning.",
    borderColor: "border-l-red-400",
    textColor: "text-gray-900",
    animation: "cardFloat4"
  }
]

const partners = [
  icici,
  bajaj,
  axis,
  hdfc,
  tata,
  icici1,
  reliance,
  magma,
  manipal,
  chola,
  care,
  niva,
  aditya,
  hdfc1,
  digit,
  sbi,
  national,
  iifco,
  zurich,
  united,
  oriental
]

const teamMembers = [
  {
    id: 1,
    name: "Sonam Saxena",
    role: "Managing Director",
    image: "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=",
    gradient: "from-blue-900/60 to-blue-900/80",
    bgColor: "bg-indigo-50/50"
  },
  {
    id: 2,
    name: "Ravina Bhargav",
    role: "Unit Head",
    image: "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=",
    gradient: "from-blue-900/60 to-blue-900/80",
    bgColor: "bg-indigo-50/50"
  },
  {
    id: 3,
    name: "Mansi Mishra",
    role: "HR Manager",
    image: "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=",
    gradient: "from-blue-900/60 to-blue-900/80",
    bgColor: "bg-indigo-50/50"
  },
  {
    id: 4,
    name: "Jaya Sharma",
    role: "HR Executive",
    image: "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=",
    gradient: "from-blue-900/60 to-blue-900/80",
    bgColor: "bg-indigo-50/50"
  }
];


const iconMap = {
  0: Award,
  1: Target,
  2: Users,
  3: Star,
}

const ChooseUs = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.add('fade-in-left');
          }
        })
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-section, .fade-section1, .fade-section2, .fade-left1, .fade-left2, .fade-left3, .fade-left4');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [])

  return (

    <div className="min-h-screen overflow-hidden">

      <div className="relative overflow-hidden">
        <div
          className="bgHome absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-white/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="w-full lg:w-1/2">
            {/* Large Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#00008B] leading-tight mb-4">
              Empowering Your Growth with Smart Financial Solution -{' '}
              <span className="text-[#1434A4]">Experts Advises</span>
            </h1>

            {/* Body Text */}
            <p className="text-lg md:text-xl text-blue-900 leading-relaxed mb-8 max-w-2xl font-normal">
              From investments to insurance, Experts Advises provides complete trusted solutions for your financial peace of Mind
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-row gap-3">
              {/* Learn More Button */}
              <button className="bg-white fade-section cursor-pointer hover:bg-gray-50 text-black border-1 border-black px-6 py-3 rounded-full font-medium text-base transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Learn More
              </button>

              {/* Get Consultant Button */}
              <button className="bg-blue-900 fade-section1 cursor-pointer hover:bg-blue-900/70 text-white border-1 border-black px-6 py-3 rounded-full font-medium text-base transition-all duration-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Get Consultant
              </button>
            </div>
          </div>

          {/* Right side space for background image content */}
          <div className="hidden lg:block lg:w-1/2">
            {/* This space will be filled by your background image */}
          </div>
        </div>
      </div>

      <div className="bg-white relative overflow-hidden py-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-200 rounded-full opacity-60"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-pink-200 rounded-full opacity-50"></div>
          <div className="absolute top-60 left-1/4 w-3 h-3 bg-yellow-200 rounded-full opacity-70"></div>
          <div className="absolute top-80 right-1/3 w-5 h-5 bg-blue-100 rounded-full opacity-40"></div>
          <div className="absolute top-96 left-1/2 w-2 h-2 bg-pink-100 rounded-full opacity-60"></div>
          <div className="absolute top-32 right-1/4 w-4 h-4 bg-yellow-100 rounded-full opacity-50"></div>
          <div className="absolute top-48 left-1/3 w-3 h-3 bg-blue-200 rounded-full opacity-30"></div>
          <div className="absolute top-72 right-1/2 w-5 h-5 bg-pink-200 rounded-full opacity-40"></div>
          <div className="absolute top-88 left-2/3 w-2 h-2 bg-yellow-200 rounded-full opacity-70"></div>
          <div className="absolute top-64 right-1/5 w-4 h-4 bg-blue-100 rounded-full opacity-50"></div>
          <div className="absolute top-6 left-1 w-2 h-2 bg-pink-100 rounded-full opacity-60"></div>
          <div className="absolute top-56 left-25 w-3 h-3 bg-pink-100 rounded-full opacity-60"></div>
          <div className="absolute top-10 right-5 w-3 h-3 bg-green-200 rounded-full opacity-40"></div>
          <div className="absolute bottom-16 left-8 w-4 h-4 bg-indigo-200 rounded-full opacity-60"></div>
          <div className="absolute bottom-24 right-20 w-5 h-5 bg-yellow-300 rounded-full opacity-30"></div>
          <div className="absolute top-[85%] left-[60%] w-2 h-2 bg-blue-300 rounded-full opacity-50"></div>
          <div className="absolute bottom-10 right-[15%] w-3 h-3 bg-pink-300 rounded-full opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-16">

            {/* Left Side - Question */}
            <div className="lg:w-1/2 text-center lg:text-left mt-10">
              <h1 className="text-[2.5rem] md:text-5xl lg:text-5xl text-gray-700 leading-tight md:mb-6">
                What makes
                <br />
                <span className="text-blue-600"></span> you choose us
                <br />
                <span className="font-bold">Expert Advises</span>
                <br />
              </h1>
            </div>

            {/* Right Side - Feature Cards */}
            <div className="max-w-xl mx-auto px-4 md:py-16 -mt-5 md:mt-0">
              {/* First Row - 2 Cards */}
              <div className="flex flex-col md:flex-row gap-6 mb-6 fade-section">
                {features.slice(0, 2).map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl shadow-[0_30px_30px_rgba(0,0,0,0.08)] p-5 flex-1 ${feature.animation} ${feature.borderColor}`}
                  >
                    <h3 className={`font-bold text-lg ${feature.textColor}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-sm mt-1">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Second Row - 3 Cards */}
              <div className={`flex flex-col md:flex-row flex-wrap gap-6 justify-start fade-section1`}>
                {features.slice(2).map((feature, index) => (
                  <div
                    key={index + 2}
                    className={`bg-white rounded-xl shadow-[5px_30px_30px_rgba(0,0,0,0.08)] p-5 md:w-[30%] w-full ${feature.animation} ${feature.borderColor}`}
                  >
                    <h3 className={`font-bold text-lg ${feature.textColor}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-sm mt-1">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Our{' '}
              Optimistic
              {' '}
              Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-1">
              Meet the passionate individuals driving our success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const IconComponent = iconMap[index];

              return (
                <div
                  key={member.id}
                  className={`group relative fade-left${member.id} transform transition-transform duration-[5000ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.05] will-change-transform`}
                >
                  <div className={`${member.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50`}>


                    <div className="relative mb-6">
                      <div className={`w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-r ${member.gradient}`}>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover border-2 border-white"
                        />
                      </div>

                      <div className={`absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 scale-110 transition-all duration-300`}></div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className={`inline-block bg-gradient-to-r ${member.gradient} px-4 py-1 rounded-full`}>
                        <p className="text-sm font-medium text-white">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  <div className={`h-1 bg-gradient-to-r ${member.gradient} rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="py-16 mt-12 bg-gradient-to-br from-slate-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-800 mb-1">
              Our Partners
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Collaboration that drives growth
            </p>
          </div>

          <div className="text-center mt-10 mb-5">
            <h2 className="text-2xl md:text-3xl text-gray-800 mb-1">
              Health Insurance
            </h2>
          </div>

          <div className="w-full py-2 -mt-5 flex flex-col gap-4 items-center">
            {/* Slider 1: 4 logos */}
            <div
              className="slider"
              style={{
                '--width': window.innerWidth >= 1024 ? '0rem' : '10rem', // w-40
                '--height': '5rem', // h-20
                '--quantity': 4
              }}
            >
              <div className="list">
                {partners.slice(5, 9).map((logo, index) => (
                  <div key={index} className="item" style={{ '--position': index + 1 }}>
                    <div className="partner-logo w-40 h-20 p-2 border bg-white border-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm transition-all duration-300 cursor-pointer">
                      <img
                        src={logo}
                        alt={`Partner ${index + 6}`}
                        className="grayscale hover:grayscale-0 transition-all duration-300 max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider 2: 4 logos (reverse) */}
            <div
              className="slider"
              reverse="true"
              style={{
                '--width': '10rem',
                '--height': '5rem',
                '--quantity': 4,
              }}
            >
              <div className="list">
                {partners.slice(9, 13).map((logo, index) => (
                  <div key={index} className="item" style={{ '--position': index + 1 }}>
                    <div className="partner-logo w-40 h-20 p-2 border bg-white border-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm transition-all duration-300 cursor-pointer">
                      <img
                        src={logo}
                        alt={`Partner ${index + 10}`}
                        className="grayscale hover:grayscale-0 transition-all duration-300 max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl text-gray-800 mb-1">
              Life Insurance
            </h2>
          </div>

          <div className="w-full flex flex-col gap-4 items-center">
            {/* Top Slider: 3 Logos */}
            <div
              className="slider"
              style={{
                '--width': window.innerWidth >= 1024 ? '0rem' : '10rem', // w-40
                '--height': '5rem', // h-20
                '--quantity': 3,
              }}
            >
              <div className="list">
                {partners.slice(0, 3).map((logo, index) => (
                  <div key={index} className="item" style={{ '--position': index + 1 }}>
                    <div className="partner-logo w-40 h-20 p-2 border bg-white border-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm transition-all duration-300 cursor-pointer">
                      <img
                        src={logo}
                        alt={`Partner ${index + 1}`}
                        className="grayscale hover:grayscale-0 transition-all duration-300 max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Slider: 2 Logos (Reversed) */}
            <div
              className="slider1"
              reverse="true"
              style={{
                '--width': window.innerWidth >= 1024 ? '0rem' : '10rem', // w-40
                '--height': '5rem', // h-20
                '--quantity': 2,
              }}
            >
              <div className="list">
                {partners.slice(3, 5).map((logo, index) => (
                  <div key={index + 3} className="item" style={{ '--position': index + 1 }}>
                    <div className="partner-logo w-40 h-20 p-2 border bg-white border-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm transition-all duration-300 cursor-pointer">
                      <img
                        src={logo}
                        alt={`Partner ${index + 4}`}
                        className="grayscale hover:grayscale-0 transition-all duration-300 max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Health Insurance Section */}

          {/* General Insurance Section */}
          <div className="text-center mt-14">
            <h2 className="text-2xl md:text-3xl text-gray-800 mb-1">
              General Insurance
            </h2>
          </div>

          <div className="w-full flex flex-col gap-4 items-center">
            {/* Slider 1: 4 logos */}
            <div
              className="slider"
              style={{
                '--width': window.innerWidth >= 1024 ? '0rem' : '10rem',
                '--height': '5rem',
                '--quantity': 4,
              }}
            >
              <div className="list">
                {partners.slice(13, 17).map((logo, index) => (
                  <div key={index} className="item" style={{ '--position': index + 1 }}>
                    <div className="partner-logo w-40 h-20 p-2 border bg-white border-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm transition-all duration-300 cursor-pointer">
                      <img
                        src={logo}
                        alt={`Partner ${index + 14}`}
                        className="grayscale hover:grayscale-0 transition-all duration-300 max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider 2: 4 logos (reverse) */}
            <div
              className="slider"
              reverse="true"
              style={{
                '--width': '10rem',
                '--height': '5rem',
                '--quantity': 4,
              }}
            >
              <div className="list">
                {partners.slice(17, 21).map((logo, index) => (
                  <div key={index} className="item" style={{ '--position': index + 1 }}>
                    <div className="partner-logo w-40 h-20 p-2 border bg-white border-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm transition-all duration-300 cursor-pointer">
                      <img
                        src={logo}
                        alt={`Partner ${index + 18}`}
                        className="grayscale hover:grayscale-0 transition-all duration-300 max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQ />

      <CountUp />

    </div>
  )
}

export default ChooseUs; 