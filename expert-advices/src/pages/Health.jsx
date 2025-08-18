import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import './Home.css'
import icici1 from "../assets/icici1.png";
import reliance from "../assets/reliance.png";
import magma from "../assets/magma.png";
import manipal from "../assets/manipal.png";
import chola from "../assets/chora.png";
import care from "../assets/care.png";
import niva from "../assets/niva.png";
import aditya from "../assets/aditya.png";

const partners = [
    { img: icici1, link: "/" },
    { img: reliance, link: "/" },
    { img: magma, link: "/" },
    { img: manipal, link: "/" },
    { img: chola, link: "/" },
    { img: care, link: "/" },
    { img: niva, link: "/" },
    { img: aditya, link: "/" },
];

const Health = () => {

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
        <div className="max-w-6xl mx-auto px-4 py-15">
            <h2 className="text-4xl font-semibold text-center text-blue-900 mb-10">Health Insurance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
                {partners.map((partner, index) => (
                    <motion.div
                        key={index}
                        href={partners.link}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white shadow-md border-1 fade-section flex items-center cursor-pointer justify-center p-4"
                        style={{ height: "100px" }}
                    >
                        <img
                            src={partner.img}
                            alt={`Partner ${index + 1}`}
                            className="max-h-full max-w-full object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Health;
