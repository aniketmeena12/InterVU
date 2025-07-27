import { Carousel } from "./ui/carousel";

export function ResumeCarousel() {
  const resumeTemplates = [
    {
      button: "View Template",
      src: "/assets/img/resume1.png",
      link: "https://www.canva.com/design/DAGtEbJwTx4/c614LqVPwNITzif3K4ajdg/edit?utm_content=DAGtEbJwTx4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      width: 700,
      height: 550,
    },
    {
      button: "View Template",
      src: "/assets/img/resume2.png",
      link: "https://www.canva.com/design/DAGtEWzu80g/2HJQ9Pzlee0lBYrmGntV_A/edit?utm_content=DAGtEWzu80g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      width: 280,
      height: 400,
    },
    {
      button: "View Template",
      src: "/assets/img/resume3.png",
      link: "https://www.canva.com/design/DAGtEbJwTx4/c614LqVPwNITzif3K4ajdg/edit?utm_content=DAGtEbJwTx4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      width: 320,
      height: 450,
    },
    {
      button: "View Template",
      src: "/assets/img/resume4.png",
      link: "https://www.canva.com/design/DAGtEYZ3e2A/1ArTWY3pNsRyeupTlCqFvg/edit?utm_content=DAGtEYZ3e2A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      width: 300,
      height: 430,
    },
     {
      button: "View Template",
      src: "/assets/img/resume5.png",
      link: "https://www.canva.com/design/DAGtEV4uoHw/Cl6epe9xrfR4hOJoRuGyqA/edit?utm_content=DAGtEV4uoHw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      width: 300,
      height: 430,
    },
     {
      button: "View Template",
      src: "/assets/img/resume6.png",
      link: "https://www.canva.com/design/DAGtRJlRY5o/GQpTtGj_e8dOzSNGy7d2rw/edit?utm_content=DAGtRJlRY5o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      width: 300,
      height: 430,
    },
     {
      button: "View Template",
      src: "/assets/img/resume7.png",
      link: "https://www.canva.com/design/DAGtRCsyDYQ/mSWIojAZ_qJ-c9XCmfaZiA/edit?utm_content=DAGtRCsyDYQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      width: 300,
      height: 430,
    },
     {
      button: "View Template",
      src: "/assets/img/resume8.png",
      link: "https://www.canva.com/design/DAGtRF27yc0/sMJNuEpeqC2hOrGojO7kFA/edit?utm_content=DAGtRF27yc0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
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
