import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, LayoutTemplate, Settings2, SearchCheck, Send } from "lucide-react";


const steps = [
	{
		title: "Get Started",
		description: "Generate your resume with AI-powered templates.",
		icon: <Sparkles />,
	},
	{
		title: "Choose Template",
		description: "Select a resume design that fits your goals.",
		icon: <LayoutTemplate />,
	},
	{
		title: "Customize & Practice",
		description: "Tailor it and prep with AI-driven questions.",
		icon: <Settings2 />,
	},
	{
		title: "Get Feedback",
		description: "Receive improvements from AI insights.",
		icon: <SearchCheck />,
	},
	{
		title: "Ace Your Interview",
		description: "Walk in prepared and land your dream job.",
		icon: <Send />,
	},
];

export default function VerticalStepper() {
	const wrapperRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: wrapperRef,
		offset: ["start start", "end end"],
	});

	const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	return (
		<>
		<div className="relative h-screen">
			<div
				ref={wrapperRef}
				className="relative h-screen overflow-y-scroll scrollbar-hide snap-y snap-mandatory scroll-smooth"
			>
				{/* Animated vertical line (left-aligned) */}
				<div className="absolute left-8 top-0 w-1 h-full">
					<motion.div
						style={{ height: lineHeight }}
						className="w-full bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 rounded-full"
					/>
				</div>

				{/* Steps */}
				{steps.map((step, index) => (
					<div
						key={index}
						className="relative h-screen flex items-center snap-start px-8"
					>
						{/* Dot */}
						<div className="relative w-16 flex justify-center">
							<div className="w-5 h-5 rounded-full bg-purple-600 border-4 border-black shadow-[0_0_20px_rgba(168,85,247,0.8)] z-20" />
						</div>

						{/* Content to the right of dot */}
						<div className="ml-6">
							<div className="text-5xl font-extrabold text-purple-500">
								{String(index + 1).padStart(2, "0")}
							</div>
							<div className="text-white text-lg font-semibold mt-2">
								{step.title}
							</div>
							<p className="text-gray-400 text-sm max-w-md mt-2">
								{step.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
		</>
	);
}
