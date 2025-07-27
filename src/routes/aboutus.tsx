import Starfield from "@/components/ParticlesBg";
import React from "react";

const aboutSections = [
  {
    title: "Our Mission",
    content:
      "At InterVU, our mission is to empower job seekers with AI-driven tools and personalized interview practice. We believe everyone deserves the confidence and skills to succeed in their career journey.",
  },
  {
    title: "What We Do",
    content:
      "We provide a platform that offers mock interviews, instant feedback, and resume templates, all powered by advanced AI. Our team is passionate about making interview preparation accessible, effective, and engaging.",
  },
  {
    title: "Our Team",
    content:
      "InterVU is built by a diverse group of engineers, designers, and career coaches who are dedicated to helping you unlock your full potential.",
  },
];

const AboutUs: React.FC = () => (
  <>
  <Starfield/>
  <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4">
    <div className="max-w-3xl w-full backdrop-blur-md rounded-2xl border border-white shadow-2xl p-10 flex flex-col items-center transition-transform duration-300 hover:scale-105">
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">About Us</h1>
      {aboutSections.map((section, idx) => (
        <div key={idx} className="mb-6 w-full">
          <h2 className="text-xl font-semibold text-white mb-2">{section.title}</h2>
          <p className="text-gray-300 text-base">{section.content}</p>
        </div>
      ))}
      <div className="mt-8 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} InterVU. All rights reserved.
      </div>
    </div>
  </div>
  </>
);

export default AboutUs;