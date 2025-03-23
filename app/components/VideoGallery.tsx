"use client";
import Modal from "@/app/components/Modal";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const VideoGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    draggable: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const modals = [
    {
      id: 1,
      title: "Big Build 2016",
      project: "Playground Project",
      src: "wSRDTrrIiuM",
    },
    {
      id: 2,
      title: "Shiloh Baptist Church Renovation",
      project: "Project Interview",
      src: "QMxv1LIsn-A",
    },
    {
      id: 3,
      title: "Convention 2017: IMPACT",
      project: "Awards Ceremony Keynote",
      src: "B81dNPzrWHc",
    },
    {
      id: 4,
      title: "BUILD: 2015",
      project: "Awards Ceremony Keynote",
      src: "DYzVZxKC3KI",
    },
    {
      id: 5,
      title: "Leadership Convention: 2014",
      project: "Awards Ceremony Keynote",
      src: "o2Nv5MZDUXs",
    },
    {
      id: 6,
      title: "Convention 2011: BOUNCE",
      project: "Awards Ceremony Keynote",
      src: "LWQIiGfjWI4",
    },
    {
      id: 7,
      title: "IGNITION: 2013",
      project: "Awards Ceremony Keynote",
      src: "leapLQmfOB8",
    },
    {
      id: 8,
      title: "Motivational Address",
      project: "Company Speech",
      src: "drT9xl8dPQo",
    },
    {
      id: 9,
      title: "Small Business Influencer Awards",
      project: "2012 Award Speech",
      src: "v26LK18KzhQ",
    },
  ];
  const [openModalId, setOpenModalId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  return (
    <div className="max-w-6xl mx-10 sm:mx-20 xl:mx-auto my-20 lg:my-48">
      <div className="flex flex-col items-center">
        <div className="font-lexiadama text-3xl text-primary-color">Videos</div>
        <div className="border-secondary-color border-b-2 w-24 my-5"></div>
      </div>
      <div className="slider-container my-5 lg:my-10">
        <Slider {...settings}>
          {modals.map((modal) => (
            <div key={modal.id}>
              <button
                className="relative w-full aspect-video"
                onClick={() => openModal(modal.id)}
              >
                <Image
                  className="w-full h-full object-cover object-center px-2"
                  title={modal.title}
                  loading="lazy"
                  width="300"
                  height="300"
                  src={`https://img.youtube.com/vi/${modal.src}/0.jpg`}
                  alt={modal.title}
                />
              </button>
              <div className="bg-primary-color mx-2 py-2">
                <div className="text-center px-5 text-lg font-gotham_bold text-white leading-5">
                  {modal.title}
                </div>
                <div className="text-center px-5 font-gotham_light text-secondary-color">
                  {modal.project}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {modals.map((modal) => (
        <Modal
          key={modal.id}
          isOpen={openModalId === modal.id}
          onClose={closeModal}
        >
          <iframe
            className="w-full"
            title={modal.title}
            loading="lazy"
            width="800"
            height="500"
            src={`https://www.youtube-nocookie.com/embed/${modal.src}`}
          ></iframe>
        </Modal>
      ))}
    </div>
  );
};

export default VideoGallery;
