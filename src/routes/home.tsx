import  { ResumeCarousel } from "@/components/carouselresume";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";


const Homepage = () => {
	return (
		<div className="">
			<div className=" bg-[url(/assets/img/bg5.jpg)] bg-size-[100%_100%] bg-no-repeat flex-col pb-24">
				<Container>
					<div className="my-8 w-full md:w-1/2">
						<h2 className="text-3xl text-center md:text-left md:text-6xl">
							<span className="text-white font-extrabold md:text-8xl">
								Welcome to InterVU
							</span>
							<br />
							Level Up Hiring with AI Interview Insights.
						</h2>
						<p className="mt-4 text-muted-foreground text-sm">
							Boost your interview skills and increase your success rate with
							AI-driven insights. Discover a smarter way to prepare, practice,
							and stand out.
						</p>
						<br />
						<Link to={"/generate"} className="w-full">
							<Button className="w-3/4">
								Get Started{" "}
								<Sparkles className="ml-2" />
							</Button>
						</Link>
					</div>
				</Container>

				{/* Add a larger gap here */}
				<div className="h-44" />
				<Container className="py-8 space-y-8">
					
  {/* Bold and clear description above the carousel */}
  <div className="flex flex-col items-center justify-center mb-6">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center drop-shadow-lg">
      Select Your <span className="text-white">Resume Template</span>
    </h2>
    <p className="mt-6 text-lg md:text-xl font-semibold text-white text-center max-w-2xl">
      Make your first impression unforgettable. Choose a template below to get started!
    </p>
	 <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
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
