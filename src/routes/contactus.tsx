
import Starfield from "@/components/ParticlesBg";
import React from "react";

// Sample profile data
const profiles = [
  {
    img: "assets/img/profiles/aniket.jpg",
    name: "Aniket Meena",
    role: "Full Stack Developer",
    bio: "A full stack developer skilled in building both front-end interfaces and back-end systems.",
    links: [
      { href: "https://www.instagram.com/aniketmeena5097", icon: "fab fa-instagram", label: "Instagram" },
      { href: "https://www.linkedin.com/in/aniket-meena-68797827b/", icon: "fab fa-linkedin", label: "LinkedIn" },
    ]
  },
  {
    img: "/assets/img/profiles/rayyan.jpg",
    name: "Rayyan Ahmad",
    role: "Front-End Developer",
    bio: " a front-end developer who builds responsive, user-friendly websites using HTML, CSS, and JavaScript.",
    links: [
      { href: "https://www.instagram.com/_rayyan_ahmad__?igsh=enJmMGF1OTBobm05", icon: "fab fa-instagram", label: "Instagram" },
      { href: "https://www.linkedin.com/in/rayyan-ahmad-84a6042b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: "fab fa-linkedin", label: "LinkedIn" },
    ]
  },
  {
    img: "/assets/img/profiles/tanish.jpg",
    name: "Tanish Anand",
    role: "Full Stack Developer",
    bio: "A full stack developer skilled in building both front-end interfaces and back-end systems.",
    links: [
      { href: "https://www.instagram.com/tanishanand47?igsh=emtjd3F2OTU3em52", icon: "fab fa-instagram", label: "Instagram" },
      { href: "https://www.linkedin.com/mwlite/profile/in/tanish-anand-0401a2345/", icon: "fab fa-linkedin", label: "LinkedIn" },
    ]
  },{
    img: "/assets/img/profiles/rituraj.jpg",
    name: "Ritu Raj Swami",
    role: "UI/UX Designer",
    bio: "Focuses on both the visual design (UI) and the user experience (UX) of a website or web application",
    links: [
     { href: "mailto:riturajswami211@gmail.com", icon: "fas fa-envelope", label: "E-Mail" },
      { href: "https://www.linkedin.com/in/ritu-raj-swami-6441b1305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: "fab fa-linkedin", label: "LinkedIn" },
    ]
  }
];

const ResponsiveProfileCards: React.FC = () => (
  <>
    {/* Font Awesome CDN for social icons */}
  
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    />
    <div className="flex flex-wrap gap-8 justify-center  items-center py-10  min-h-screen">
      {profiles.map((profile, idx) => (
        <div
          className="rounded-2xl border border-blue-200 shadow-2xl w-[320px] max-w-[95vw] px-6 pt-8 pb-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:scale-[1.025] hover:shadow-[0_8px_32px_rgba(37,99,235,0.18)] group"
          key={idx}
        >
          <img
            className="h-24 w-24 object-cover  rounded-full border-4 border-white mb-4 transition-transform duration-300 group-hover:scale-110"
            src={profile.img}
            alt={profile.name}
          />
          <div className="text-lg font-semibold text-white mb-1">
            {profile.name}
          </div>
          <div className="text-base text-gray-500 mb-4">
            {profile.role}
          </div>
          <div className="text-sm text-gray-600 text-center mb-5">
            {profile.bio}
          </div>
          <div className="flex gap-5 mt-auto">
            {profile.links.map((link, i) => (
              <a
                href={link.href}
                title={link.label}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 text-xl hover:text-indigo-900 transition-colors"
              >
                <i className={link.icon} />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
    <Starfield/>
  </>
);

export default ResponsiveProfileCards;