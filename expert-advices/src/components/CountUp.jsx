import React, { useEffect, useRef, useState } from 'react';
import investment from '../assets/investment.png'
import insurance from '../assets/insurance.png'
import finance from '../assets/finance.png'
import shares from '../assets/shares.png'
import '../pages/Home.css'

const useCountUp = ({ end, duration = 2000, isInView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-section, .fade-section1, .fade-section2');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [])

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, isInView]);

  return count
}

const useIntersectionObserver = ({ threshold = 0.3, rootMargin = '0px' } = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, rootMargin]);

  return { ref, isInView };
}

const StatCard = ({ icon, value, label, isInView }) => {
  const animatedValue = useCountUp({ end: value, isInView });

  return (
    <div className="bg-white p-6 transition-shadow duration-300 fade-section">
      <div className="flex flex-col items-center text-center md:space-y-3">
        <div className="w-12 h-12 bg-blue-900/80 rounded-full flex items-center justify-center">
          <img src={icon} className="w-6 h-6 text-white" />
        </div>
        <div className="text-2xl font-bold text-gray-800">
          {animatedValue.toLocaleString()}
          <span className="">+</span>
        </div>
        <p className="text-sm text-gray-600 font-medium">{label}</p>
      </div>
    </div>
  )
}

const ClientStats = () => {
  const { ref, isInView } = useIntersectionObserver();

  const statsData = [
    { icon: investment, value: 6443, label: 'Investment' },
    { icon: insurance, value: 2807, label: 'Insurance' },
    { icon: shares, value: 1127, label: 'Share Broking' },
    { icon: finance, value: 10170, label: 'Financial Service' },
  ];

  return (
    <section ref={ref} className="py-8 md:py-16 px-8 md:px-4">
      <div className="max-w-4xl mx-auto">

        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-10">
          {statsData.map((stat) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStats;
