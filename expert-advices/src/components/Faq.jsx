import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import '../pages/Home.css';
import CardSwipe from '@/components/ui/card-swipe';

const faqs = [
  { question: "What services does Expert Advises Offer?", answer: "Experts Advises provides end-to-end financial solutions including investment planning (SIP, mutual funds), life and health insurance advisory, retirement planning, tax-saving strategies, loan consultation, and complete wealth management support." },
  { question: "Is my money safe with Experts Advises?", answer: "Yes. Your money is always invested through trusted, SEBI-regulated platforms. We never hold your funds—our role is to guide, not control. Your investments remain fully in your name and under your control." },
  { question: "Do I need a high income to start financial planning?", answer: "Not at all. You can begin with as little as ₹500/month. Financial planning is about making smart choices—regardless of income. The earlier you start, the more impact it creates over time." },
  { question: "Can I meet an advisor before making decisions?", answer: "Yes, definitely. We offer free consultations where you can speak with a certified advisor, ask questions, and understand your options before making any commitment." },
  { question: "Do you charge for your services?", answer: "Your initial consultation is completely free. Any advisory or execution charges (if applicable) are transparently discussed in advance—no hidden fees, just honest guidance." },
  { question: "What is SIP and why should I start one ?", answer: "A SIP (Systematic Investment Plan) allows you to invest small amounts regularly into mutual funds. It builds long-term wealth, balances market ups and downs, and benefits from compounding—making it a smart and disciplined way to grow your money." },
  { question: "Can I invest if I have no financial knowledge?", answer: "Absolutely. That’s what we’re here for. Our advisors explain every step in simple terms and help you make informed decisions with full confidence—no jargon, just clarity." },
  { question: "How often should I review my financial plan?", answer: "We recommend reviewing your financial plan at least once a year—or whenever a major life change happens (like a new job, marriage, home loan, or child’s education planning)." }
];

const Faq = () => {
  const images = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
  ];

  const [expanded, setExpanded] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const displayedFaqs = showMore ? faqs : faqs.slice(0, 6);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'fade-in-left');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-section, .fade-section1, .fade-section2, .fade-left1, .fade-left2, .fade-left3, .fade-left4');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section className="w-full mt-20 mb-6 bg-white px-4 sm:px-6 lg:px-10 flex items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 w-full max-w-7xl mx-auto">

        {/* FAQs */}
        <div className="w-full lg:w-1/2 max-w-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 text-center lg:text-left">
            Frequently Asked Questions
          </h2>

          {displayedFaqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              initial={false}
              animate={{ borderRadius: 8 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full flex justify-between items-center text-left px-3 sm:px-4 py-3 font-medium text-gray-800 hover:bg-gray-50 transition-all duration-300"
              >
                <span className="text-sm sm:text-base">{faq.question}</span>
                {expanded === index ? (
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {expanded === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 sm:px-5 py-3 text-gray-600/90 text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          <div className="text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-blue-600 hover:underline mt-4 font-medium text-sm sm:text-base"
            >
              {showMore ? 'Hide FAQs...' : 'Show more FAQs...'}
            </button>
          </div>
        </div>

        <div className="hidden lg:flex lg:w-1/2 flex justify-center items-center max-w-sm sm:max-w-md lg:max-w-full">
          <CardSwipe images={images} autoplayDelay={1500} slideShadows={false} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
