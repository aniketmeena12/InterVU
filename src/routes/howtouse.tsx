
import Starfield from "@/components/ParticlesBg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Get Started",
    description: "Kick off your journey by generating your personalized resume with AI-powered templates.",
    no:"Step-1",
  },
  {
    title: "Choose Template",
    description: "Browse resume templates and select the design that best highlights your strengths.",
    no:"Step-2",
  },
  {
    title: "Customize & Practice",
    description: "Personalize your resume and practice interviews with targeted, AI-driven questions.",
    no:"Step-3",
  },
  {
    title: "Get Feedback",
    description: "Receive actionable feedback and insights to improve your responses and presentation.",
   no:"Step-4",
  },
  {
    title: "Ace Your Interview",
    description: "Walk into your interview prepared and confident, ready to impress and land your dream job.",
    no:"Step-5",
  },
];


export default function VerticalStepper() {
  const containerRef = useRef(null);

  // Track scroll progress inside the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Convert scroll progress into height (0% → 100%)
  const animatedHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
    <Starfield/>
      <div ref={containerRef} className=" py-20 px-4">
        <h2 className="text-white text-3xl font-semibold text-center mb-20">
          How To Use
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Vertical Line */}
          <motion.div
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform -translate-x-1/2 z-0 rounded-full"
            style={{ height: animatedHeight }}
          />
          <div className="relative flex flex-col gap-32">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  {/* Static Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 z-10">
                    <div className="w-6 h-6 rounded-full bg-pink-500 shadow-[0_0_10px_4px_rgba(236,72,153,0.6)] flex items-center justify-center">
                      <div className="w-3 h-3 bg-purple-800 rounded-full" />
                    </div>
                  </div>

                  {/* Card (animated in) */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`bg-zinc-900 p-6 rounded-lg shadow-md border border-zinc-700 max-w-md w-full mt-8
                      ${isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}`}
                  >
                    <span className="inline-block mb-2 px-4 py-1 text-sm text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow">
                      {step.no}
                    </span>
                    <h3 className="text-purple-300 text-lg font-semibold">{step.title}</h3>
                    <p className="text-gray-300 text-sm mt-2">{step.description}</p>
                    
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

