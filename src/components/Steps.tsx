import { ReactElement, useState } from "react";
import login from "../assets/login.svg";
import register from "../assets/register.svg";
import quiz from "../assets/quiz.svg";
import rewards from "../assets/rewards.svg";

function Step1() {
  return (
    <>
      {" "}
      <img
        className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
        alt="hero"
        src={login}
      />
      <div className="flex flex-col text-center w-full">
        <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
          Sign up / Sign in
        </h1>
        <h3 className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Sign up or sign in to the pariqsha app on mobile or on web using your
          email, password and phone number.
        </h3>
      </div>
    </>
  );
}

function Step2() {
  return (
    <>
      {" "}
      <img
        className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
        alt="hero"
        src={register}
      />
      <div className="flex flex-col text-center w-full">
        <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
          Register for quizzes
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Register for as many quizzes on the pariqsha dashboard. Complete
          payment for paid entries or just apply for free daily quizzes.
        </p>
      </div>
    </>
  );
}

function Step3() {
  return (
    <>
      {" "}
      <img
        className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
        alt="hero"
        src={quiz}
      />
      <div className="flex flex-col text-center w-full">
        <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
          Attempt the quiz online
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Open the quiz by clicking on the quiz link received on the registered
          email/phone number before the quiz begins. Attempt the quiz against
          other players around the globe.
        </p>
      </div>
    </>
  );
}

function Step4() {
  return (
    <>
      {" "}
      <img
        className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
        alt="hero"
        src={rewards}
      />
      <div className="flex flex-col text-center w-full">
        <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
          Get instant results and win rewards
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Get instant standings and results after the quiz. Get guaranteed
          rewards based on your standings. Get participation and position
          certificates to show off your achievements.
        </p>
      </div>
    </>
  );
}

export default function Steps(): ReactElement {
  const [active, setActive] = useState<number>(1);
  return (
    <section id="howitworks" className="text-gray-600 bg-brand-100 bg-opacity-30 body-font">
      <h1 className="text-3xl text-center text-gray-900 font-semibold pt-24">
        How it works
      </h1>
      <p className="container mt-4 mx-auto text-center">
          Follow these simple steps to get you started on the journey of fun and rewarding learning.
      </p>
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
        <div className="flex mx-auto flex-wrap mb-20">
          <div
            role="button"
            onClick={() => setActive(1)}
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${
              active === 1
                ? "border-brand-500 text-brand-500"
                : "border-gray-200 text-gray-900"
            } tracking-wider rounded-t`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>{" "}
            1. SIGNUP
          </div>
          <div
            role="button"
            onClick={() => setActive(2)}
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none ${
              active === 2
                ? "border-brand-500 text-brand-500"
                : "border-gray-200 text-gray-900"
            } tracking-wider rounded-t`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
              />
              <path
                fillRule="evenodd"
                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              />
            </svg>{" "}
            2. REGISTER
          </div>
          <div
            role="button"
            onClick={() => setActive(3)}
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none ${
              active === 3
                ? "border-brand-500 text-brand-500"
                : "border-gray-200 text-gray-900"
            } tracking-wider rounded-t`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
            </svg>{" "}
            3. QUIZ
          </div>
          <div
            role="button"
            onClick={() => setActive(4)}
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none ${
              active === 4
                ? "border-brand-500 text-brand-500"
                : "border-gray-200 text-gray-900"
            } tracking-wider rounded-t`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 16 16"
            >
              <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
              <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
            </svg>{" "}
            4. REWARDS
          </div>
        </div>
        {active === 1 && <Step1 />}
        {active === 2 && <Step2 />}
        {active === 3 && <Step3 />}
        {active === 4 && <Step4 />}
      </div>
    </section>
  );
}
