import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-black bg-opacity-15 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="logo"
                className="w-[150px] h-[40px] cursor-pointer"
              />
            </a>
          </div>
          <div className="items-center flex flex-col">
            <h3 className="text-white text-md font-semibold">Menu</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  Frumzi Καζίνο
                </a>
              </li>
              <li>
                <a href="/app" className="hover:text-white transition">
                  App
                </a>
              </li>
              <li>
                <a href="/bonus" className="hover:text-white transition">
                  Bonus
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Frumzi. Με την επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
