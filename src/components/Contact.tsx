import { ReactElement, useState } from "react";

export default function Contact(): ReactElement {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Have any queries about the app or you just want to give feedback and
            have a talk with us? <br />
            Write to us below.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const messageToSend =
              "I, " +
              name +
              " (email: " +
              email +
              "), have the following query regarding web and mobile services:%0D%0A" +
              message;
            window.open(
              "mailto:hi@mpsinfotech.in?subject=Query from website&body=" +
                messageToSend
            );
          }}
          className="lg:w-1/2 md:w-2/3 mx-auto"
        >
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-brand-500 border-0 py-2 px-8 focus:outline-none hover:bg-brand-600 rounded text-lg">
                Send
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a href="mailto:info@pariqsha.com" className="text-brand-500">
                info@pariqsha.com
              </a>
              <address className="leading-normal my-5">
                A-818 I, Bestech Business Towers
                <br />
                Mohali, PB 160066
                <br />
                India
              </address>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
