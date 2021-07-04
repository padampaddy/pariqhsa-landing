import { ReactElement } from "react";
import logo from "../assets/pariqsha.png";

export default function Header(): ReactElement {
  return (
    <header className="text-gray-600 fixed top-0 left-0 bg-white w-full z-20 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between items-center">
        <a href="#hero" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} className="w-8" alt="" />
          <span className="ml-2 text-2xl font-semibold">Pariqsha</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="#features" className="mr-5 hover:text-gray-900">
            Highlights
          </a>
          <a href="#howitworks" className="mr-5 hover:text-gray-900">
            How it works
          </a>
          <a href="#testimonials" className="mr-5 hover:text-gray-900">
            Testimonials
          </a>
          <a href="#contact" className="mr-5 hover:text-gray-900">
            Contact Us
          </a>
        </nav>
        <div>
          <a
            href="https://live.pariqsha.com"
            className="inline-flex items-center font-semibold border border-brand-500 text-brand-500 py-2 px-8 focus:outline-none hover:bg-brand-500 hover:text-white rounded mt-4 md:mt-0"
          >
            Go to app
          </a>
        </div>
      </div>
    </header>
  );
}
