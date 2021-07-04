import { ReactElement } from "react";
import pariticipant1 from "../assets/participant_1.png";
import pariticipant2 from "../assets/participant_2.png";
import pariticipant3 from "../assets/participant_3.png";
export default function Testimonials(): ReactElement {
  return (
    <section id="testimonials" className="text-gray-600 body-font">
      <h1 className="text-3xl text-center text-gray-900 font-semibold pt-24">
        Happy Participants
      </h1>
      <h3 className="container mt-4 mx-auto text-center">
        These are the stories of our participants who have joined us with great
        pleasure when using this crazy feature.
      </h3>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="w-full lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover rounded-full object-center inline-block border-2 border-gray-200 bg-gray-100"
                src={pariticipant1}
              />
              <p className="leading-relaxed">
                A good platform to play and earn rewards. I really like the
                efforts put by their team.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-brand-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                DEVANSH SHARMA
              </h2>
              <p className="text-gray-500">Chandigarh</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full  text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={pariticipant2}
              />
              <p className="leading-relaxed">
                Never did I ever expect someone would consider paying big
                rewards for just 20 minutes quiz and it’s fun playing it.{" "}
              </p>
              <span className="inline-block h-1 w-10 rounded bg-brand-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 uppercase font-medium title-font tracking-wider text-sm">
                Drishti Taneja
              </h2>
              <p className="text-gray-500">Chandigarh</p>
            </div>
          </div>
          <div className=" w-full lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={pariticipant3}
              />
              <p className="leading-relaxed">
                It was the best thing someone referred me so far. It was great
                winning while learning.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-brand-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 uppercase font-medium title-font tracking-wider text-sm">
                Shivam Uppal
              </h2>
              <p className="text-gray-500">Ludhiana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
