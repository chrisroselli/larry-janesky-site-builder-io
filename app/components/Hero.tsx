"use client";
import Modal from "@/app/components/Modal";
import { useState } from "react";

const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-[url('/img/main-lj-closeup-mobile.jpg')] bg-primary-color bg-blend-overlay sm:bg-blend-normal sm:bg-[url('/img/main-lj-closeup.jpg')] bg-no-repeat bg-top sm:bg-cover sm:bg-center flex items-center w-full sm:h-[800px] py-20">
      <button
        className="hidden lg:block text-white bg-primary-color absolute right-0 top-40 px-6 py-4 before:inline-block before:-left-[20px] before:z-10 before:absolute before:bg-center before:w-[36px] before:h-full before:bg-[url('/img/icon-filmreel.png')] before:bg-no-repeat before:bg-contain before:top-0"
        onClick={() => setOpenModal(true)}
      >
        <p>Watch Larry’s Documentary</p>
        <span className="text-xl italic">“From the Invisible”</span>
      </button>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <iframe
          className="w-full"
          loading="lazy"
          width="800"
          height="500"
          src="https://www.youtube-nocookie.com/embed/9Rwl-pufJ1o?si=1xIIr35HY2-FGC7x"
        ></iframe>
      </Modal>
      <div className="flex flex-col max-w-2xl items-center m-5 lg:ml-64">
        <h1 className="text-white text-3xl lg:text-5xl font-lexiadama font-bold text-center lg:leading-[60px]">
          {title}
        </h1>
        <div className="border-secondary-color border-b-2 w-24 my-5"></div>
        <p className="text-white">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Hero;
