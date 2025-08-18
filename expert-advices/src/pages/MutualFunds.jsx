import React from "react";
import { motion } from "framer-motion";
import motilal from "../assets/mutualFunds.png";
import rbi from "../assets/rbi.png";
import bajaj from "../assets/bajajFinance.png";
import shreeRam from "../assets/shreeRam.png";

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
};

const investmentData = [
    {
        title: "Mutual Funds",
        items: [{ src: motilal, alt: "Motilal Mutual Funds" }],
    },
    {
        title: "Bonds",
        items: [{ src: rbi, alt: "RBI Bonds" }],
    },
    {
        title: "FDRS",
        items: [
            { src: bajaj, alt: "Bajaj Finance" },
            { src: shreeRam, alt: "Shree Ram Finance" },
        ],
    },
];

const MutualFunds = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center px-4 py-12">
            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl mt-4 font-semibold text-blue-900 mb-10 text-center"
            >
                Investment
            </motion.h1>

            {/* Investment Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
                {investmentData.map((section, i) => (
                    <motion.div
                        key={section.title}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        className="p-6 flex flex-col items-center transition-all duration-300"
                    >
                        {/* Section Title */}
                        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6">
                            {section.title}
                        </h2>

                        {/* Logos */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {section.items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                                >
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-32 h-20 object-contain"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MutualFunds;
