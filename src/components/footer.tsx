import React from "react";
import { Link } from "react-router-dom";
import Container from "@/components/container";
import { MainRoutes } from "@/lib/helpers";


interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="hover:underline text-gray-300 hover:text-gray-100 transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

export const Footer = () => {
  return (
    <div className="w-full bg-black text-gray-300 py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* First Column: Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {MainRoutes.map((route) => (
                <FooterLink key={route.href} to={route.href}>
                  {route.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Second Column: About Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p>
              We are committed to helping you unlock your full potential with
              AI-powered tools. Our platform offers a wide range of resources to
              improve your interview skills and chances of success.
            </p>
          </div>

         
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="mb-4">meenaaniket066@gmail.com</p>
              <p className="mb-4">Delhi, India</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;