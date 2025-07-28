import  { ResumeCarousel } from "@/components/carouselresume";
import Container from "@/components/container";
import CubeAnimation from "@/components/cubeanimation";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
<div className="bg-black">
	<div className="flex-col pb-24">
		<Container>
			<div className="flex flex-col md:flex-row items-center justify-between my-8 w-full gap-8">
				{/* Left: Heading and CTA */}
				<div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
					<h2 className="text-2xl sm:text-3xl md:text-6xl text-center md:text-left flex items-center gap-4">
						<span className="text-white font-extrabold sm:text-4xl md:text-8xl">
							Welcome to InterVU
						</span>
					</h2>
					<span className="block text-base sm:text-lg md:text-2xl mt-2 text-center md:text-left text-white font-semibold">
						Level Up Hiring with AI Interview Insights.
					</span>
					<p className="mt-4 text-muted-foreground text-xs sm:text-sm md:text-base text-center md:text-left">
						Boost your interview skills and increase your success rate with
						AI-driven insights. Discover a smarter way to prepare, practice,
						and stand out.
					</p>
					<Link to={"/generate"} className="w-full flex justify-center md:justify-start mt-6">
						<Button className="w-3/4 sm:w-1/2 md:w-3/4">
							Get Started{" "}
							<Sparkles className="ml-2" />
						</Button>
					</Link>
				</div>
				{/* Right: Cube Animation */}
				<div className="hidden md:flex flex-col items-center justify-center w-full md:w-1/2 mt-8 md:mt-0">
					<div className="w-60 h-60 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem]">
						<CubeAnimation />
					</div>
</div>
			</div>
		</Container>

		{/* Add a larger gap here */}
		<div className="h-20 sm:h-32 md:h-44" />
		<Container className="py-8 space-y-8">
			{/* Bold and clear description above the carousel */}
			<div className="flex flex-col items-center justify-center mb-6 px-2">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center drop-shadow-lg">
					Select Your <span className="text-blue-400">Resume Template</span>
				</h2>
				<p className="mt-6 text-base sm:text-lg md:text-xl font-semibold text-white text-center max-w-2xl">
					Make your first impression unforgettable. Choose a template below to get started!
				</p>
				<div className="w-full sm:w-[90vw] md:w-[40rem] h-32 sm:h-40 md:h-40 relative mt-4">
					{/* Gradients */}
					<div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
					<div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
					<div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
					<div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

					{/* Core component */}
					<SparklesCore
						background="transparent"
						minSize={0.4}
						maxSize={1}
						particleDensity={1200}
						className="w-full h-full"
						particleColor="#FFFFFF"
					/>

					{/* Radial Gradient to prevent sharp edges */}
					<div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
				</div>
			</div>
			<div className="overflow-x-auto object-cover scrollbar-hide">
				<ResumeCarousel />
			</div>
		</Container>
	</div>
</div>
    );
};

export default Homepage;
