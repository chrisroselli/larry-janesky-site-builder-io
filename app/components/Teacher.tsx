import Image from "next/image";
import Link from "next/link";

const Teacher = ({ title, text, button }: { title: string; text: string; button: { text: string; link: string } }) => {
  return (
    <div id="teacher" className="grid grid-cols-12 grid-rows-9">
      <Image
        className="col-span-full sm:col-start-1 sm:col-end-9 row-start-1 row-end-5 sm:row-span-full self-center object-cover object-top sm:h-3/4"
        src="/img/teacher-lj-v2.jpg"
        alt="Teacher"
        width="1245"
        height="940"
      />
      <div className="flex flex-col items-center bg-white [box-shadow:20px_20px_0px_0px_rgba(0,_44,_123,_.8),_0px_0px_20px_5px_rgba(0,_0,_0,_.2)] col-start-2 col-end-12 sm:col-start-7 sm:col-end-12 row-span-full justify-self-center self-center my-10 p-6 sm:px-20 sm:py-12">
        <div className="font-lexiadama text-3xl text-primary-color">
          {title}
        </div>
        <div className="border-secondary-color border-b-2 w-24 my-5"></div>
        <p className="pb-10">
          {text}
        </p>
        <Link
          href={button.link}
          target="_blank"
          className="text-white text-center sm:text-left bg-secondary-color px-4 py-2"
        >
          {button.text}
        </Link>
      </div>
    </div>
  );
};

export default Teacher;
