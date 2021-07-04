import { ReactElement } from "react";
import hero from "../assets/hero.svg";
function Hero(): ReactElement {
  return (
    <section id="hero" className="text-gray-600 body-font pt-24">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Learning was never this
            <br />
            <div className="text-8xl bg-accent-700 m-2  pb-2 text-white inline-flex mx-auto justify-center px-6 font-bold">
              <span>FUN</span>
            </div>
          </h1>
          <p className="mb-8 leading-relaxed">
            Prepare for your coveted exams with quizzes on all the topics and
            guaranteed rewards.
            <br /> Join Now and be at the top of your class and achieve your
            goals.
          </p>
          <div className="flex justify-center">
            <a
              href="https://live.pariqsha.com"
              className="inline-flex items-center font-semibold bg-brand-500 text-white py-3 px-8 focus:outline-none hover:bg-brand-700 hover:text-white rounded mt-4 md:mt-0"
            >
              Join Now
            </a>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={hero}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
