import React from "react";
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div id="book">
      <footer className="footer footer-center bg-cyan-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="/">
            Home
          </a>
          <a className="link link-hover " href="/books">
            Books
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="text-3xl">
              <FaSquareXTwitter />
            </a>
            <a className="text-3xl text-blue-800">
              <FaLinkedin />
            </a>
            <a className="text-3xl text-blue-700">
              <FaFacebook />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Product Flow
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
