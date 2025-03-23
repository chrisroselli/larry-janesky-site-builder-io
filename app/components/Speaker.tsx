"use client";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import ContactForm from "@/app/components/ContactForm";
import { useState } from "react";
const Speaker = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSpeaker, setOpenSpeaker] = useState(false);

  return (
    <div id="speaker" className="grid grid-cols-12 grid-rows-9">
      <Image
        className="col-span-full sm:col-start-1 sm:col-end-9 row-start-1 row-end-5 sm:row-span-full self-center object-cover object-top h-full sm:h-3/4"
        src="/img/teacher-lj-v2.jpg"
        alt="Speaker"
        width="1245"
        height="940"
      />
      <div className="flex justify-center flex-col gap-4 items-center col-span-full sm:col-start-4 sm:col-end-5 row-start-2 row-end-4 sm:row-span-full">
        <Image
          onClick={() => setOpenSpeaker(true)}
          className="cursor-pointer"
          src="/img/btn-play.png"
          alt="Video play button"
          height="100"
          width="100"
        />
        <p className="text-white text-center">Watch A Video Clip</p>
      </div>
      <div className="flex flex-col items-center bg-white [box-shadow:-20px_-20px_0px_0px_rgba(0,_44,_123,_.8),_0px_0px_20px_5px_rgba(0,_0,_0,_.2)] col-start-2 col-end-12 sm:col-start-7 sm:col-end-12 row-start-4 row-end-10 sm:row-span-full justify-self-center self-center my-10 p-6 sm:px-20 sm:py-12">
        <div className="font-lexiadama text-3xl text-primary-color">
          Speaker
        </div>
        <div className="border-secondary-color border-b-2 w-24 my-5"></div>
        <p className="pb-10">
          Larry captivates and motivates delivering his messages of leadership,
          entrepreneurship, personal growth, business excellence and happiness.
        </p>
        <button
          className="text-white bg-secondary-color px-4 py-2"
          onClick={() => setOpenModal(true)}
        >
          Hire Larry for your next speaking event
        </button>
      </div>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <ContactForm />
      </Modal>
      <Modal isOpen={openSpeaker} onClose={() => setOpenSpeaker(false)}>
        <iframe
          className="w-full"
          loading="lazy"
          width="800"
          height="500"
          src="https://www.youtube-nocookie.com/embed/6qflDvZzoNs?si=9kp0L4hPUUypKWMt"
        ></iframe>
      </Modal>
    </div>
  );
};

export default Speaker;
