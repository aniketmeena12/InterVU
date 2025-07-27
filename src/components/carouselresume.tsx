import { Carousel } from "./ui/carousel";

export function ResumeCarousel() {
  const resumeTemplates = [
    {
      button: "View Template",
      src: "/assets/img/resume1.png",
      link: "/resume-templates/modern",
      width: 700,
      height: 550,
    },
    {
      button: "View Template",
      src: "/assets/img/resume2.png",
      link: "/resume-templates/minimalist",
      width: 280,
      height: 400,
    },
    {
      button: "View Template",
      src: "/assets/img/resume3.png",
      link: "https://example.com/resumes/professional.pdf",
      width: 320,
      height: 450,
    },
    {
      button: "View Template",
      src: "/assets/img/resume4.png",
      link: "/resume-templates/creative",
      width: 300,
      height: 430,
    },
     {
      button: "View Template",
      src: "/assets/img/resume5.png",
      link: "/resume-templates/creative",
      width: 300,
      height: 430,
    },
     {
      button: "View Template",
      src: "/assets/img/resume6.png",
      link: "/resume-templates/creative",
      width: 300,
      height: 430,
    },
     {
      button: "View Template",
      src: "/assets/img/resume7.png",
      link: "/resume-templates/creative",
      width: 300,
      height: 430,
    },
     {
      button: "View Template",
      src: "/assets/img/resume8.png",
      link: "/resume-templates/creative",
      width: 300,
      height: 430,
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={resumeTemplates} />
    </div>
  );
}
