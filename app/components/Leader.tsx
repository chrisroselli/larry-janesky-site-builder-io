import Image from "next/image";
import Link from "next/link";

const Leader = () => {
  return (
    <div id="leader" className="grid grid-cols-12 grid-rows-9">
      <Image
        className="col-span-full sm:col-start-5 sm:col-span-full row-start-1 row-end-5 sm:row-span-full self-center object-cover object-top h-full sm:h-3/4"
        src="/img/b3-aerial-v2.jpg"
        alt="Leader"
        width="1245"
        height="940"
      />
      <div className="flex flex-col items-center bg-white [box-shadow:-20px_-20px_0px_0px_rgba(0,_44,_123,_.8),_0px_0px_20px_5px_rgba(0,_0,_0,_.2)] col-start-2 col-end-12 sm:col-start-2 sm:col-end-7 row-span-full justify-self-center self-center my-10 p-6 sm:px-20 sm:py-12">
        <div className="font-lexiadama text-3xl text-primary-color">Leader</div>
        <div className="border-secondary-color border-b-2 w-24 my-5"></div>
        <p className="pb-10">
          Larry leads the networks of businesses under{" "}
          <span className="font-gotham_bold">Contractor Nation</span>, where he
          is dedicated to helping home improvement contractors grow and thrive.
          The teachings from The School of Entrepreneurship have grown these
          networks into the largest in North America.
        </p>
        <Link
          href="https://www.contractornation.com"
          target="_blank"
          className="text-white text-center sm:text-left bg-secondary-color px-4 py-2"
        >
          Learn about dealership opportunities
        </Link>
      </div>
    </div>
  );
};

export default Leader;
