"use client";
import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_HIRE_LARRY_FORM || "",
  );
  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="bg-primary-color p-5 sm:px-20 sm:py-12 sm:my-20">
          <div className="text-xl sm:text-2xl text-white text-center font-gotham_bold mb-2">
            Interested in hiring Larry Janesky to speak at your next event?
          </div>
          <div className="text-lg text-white text-center m-2">
            Complete this form to request more information about booking.
          </div>
          <form action={handleSubmit}>
            <div className="grid gap-4 sm:gap-6 mb-6 md:grid-cols-2">
              <div>
                <input
                  name="first_name"
                  type="text"
                  id="first_name"
                  className="border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 sm:p-2.5 "
                  placeholder="First name"
                  required
                />
              </div>
              <div>
                <input
                  name="last_name"
                  type="text"
                  id="last_name"
                  className="border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 sm:p-2.5 "
                  placeholder="Last name"
                  required
                />
              </div>
              <div>
                <input
                  name="phone"
                  type="tel"
                  id="phone"
                  className="border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 sm:p-2.5 "
                  placeholder="Phone"
                  required
                />
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 sm:p-2.5 "
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block p-2 sm:p-2.5 w-full text-xs sm:text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Tell Us About Your Event"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="text-white bg-secondary-color px-4 py-2"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
