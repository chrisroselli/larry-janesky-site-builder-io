"use client";
import Modal from "@/app/components/Modal";
import { useState } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const AboutLarry = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-[url('/img/about-lj-mobile.png')] 2xl:bg-[url('/img/about-lj.png')] bg-[length:15rem] bg-no-repeat 2xl:bg-contain bg-right-bottom 2xl:bg-right flex items-center justify-center lg:justify-start w-full h-[800px]">
      <div className="flex flex-col max-w-2xl items-center m-5 lg:ml-64">
        <div className="font-lexiadama text-3xl text-primary-color">
          About Larry
        </div>
        <div className="border-secondary-color border-b-2 w-24 my-5"></div>
        <p className="pb-10">
          Larry Janesky is an expert in creating and generating growth for
          businesses, and he has big plans for the future. Larry is a highly
          successful author of five books, acclaimed speaker, inventor with 29
          patents, and business leader with 31 years’ worth of industry
          knowledge and real word accountability.
        </p>
        <p>
          Larry provides business education, development, and the tools for
          excellence to businesses on a global scale. His goal is to improve the
          lives of millions of business owners, their employees, their
          customers, and humanity in general.
        </p>
        <Image
          onClick={() => setOpenModal(true)}
          className="cursor-pointer mt-10"
          src="/img/btn-play.png"
          alt="Video play button"
          height="100"
          width="100"
        />
        <p className="text-primary-color text-center">Watch A Video Clip</p>
        <Image
          className="cursor-pointer mt-10"
          src="/img/logo-ey.png"
          alt="EY entrepreneur of the year award"
          height="64"
          width="200"
        />
        <div className="flex gap-8 my-5 mt-10">
          <Link
            href="https://www.youtube.com/channel/UCvSD-2hYPI1ouZR9dYmPUfQ"
            target="_blank"
          >
            <FaYoutube color="#002c7b" size={32} />
          </Link>
          <Link href="https://twitter.com/thinkdaily" target="_blank">
            <FaTwitter color="#002c7b" size={32} />
          </Link>
          <Link href="https://www.linkedin.com/in/larryjanesky" target="_blank">
            <FaLinkedinIn color="#002c7b" size={32} />
          </Link>
          <Link href="https://www.facebook.com/larryjanesky" target="_blank">
            <FaFacebookF color="#002c7b" size={32} />
          </Link>
          <Link href="https://www.instagram.com/larryjanesky" target="_blank">
            <FaInstagram color="#002c7b" size={32} />
          </Link>
        </div>

        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <iframe
            className="w-full"
            loading="lazy"
            width="800"
            height="500"
            src="https://www.youtube-nocookie.com/embed/8TKJwym5CjU?si=ZL514yJUh4zfyT4t"
          ></iframe>
        </Modal>
      </div>
    </div>
  );
};

export default AboutLarry;
