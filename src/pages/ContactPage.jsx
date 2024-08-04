import React from "react";
import mission from "../assets/complete-the-mission.svg";
import SingleBanner from "../components/banner/SingleBanner";
const ContactPage = () => {
  return (
    <>
      <section className="bg-[#f5f5dc]   min-h-screen">
        <div className="container mx-auto p-4 ">
          <h1 className="text-4xl text-center font-medium text-[#800020] text-400  mb-8">
            Contact Us
          </h1>
          <div className="max-w-screen-xl mx-auto px-6 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 ">
              <div className="p-8   ">
                <div className="mb-6">
                  <p className="text-gray-800 mb-2 text-xl">
                    For any queries, please reach out to us. Our support team
                    will get back to you within 24 hours.
                  </p>
                  <p className="text-blue-600 mb-2">
                    <a href="mailto:support@mignite.com">support@mignite.com</a>
                  </p>
                  <p className="text-gray-800">
                    <a href="tel:+916361388292">+91 0123456789</a>
                  </p>
                </div>
                <SingleBanner image={mission} />
              </div>
              <div className="  ">
                <div className="flex justify-center items-center   ">
                  <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex justify-between mb-6 border-b">
                      <button className="text-[#800020] font-semibold py-2 px-4 border-orange-500 border-b-2">
                        Course Enquiry
                      </button>
                    </div>
                    <form>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="fullName"
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          placeholder="Full Name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="email"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Email Address"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="phoneNumber"
                        >
                          Phone Number *
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-orange-500">
                          <span className="px-3 py-2 text-gray-500">IN</span>
                          <input
                            id="phoneNumber"
                            type="text"
                            placeholder="+91 | Enter your phone number"
                            className="w-full px-3 py-2 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="message"
                        >
                          Your message *
                        </label>
                        <textarea
                          id="message"
                          placeholder="Your message"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-24"
                        ></textarea>
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-[#800020] text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
