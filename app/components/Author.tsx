import Image from "next/image";
import Link from "next/link";

const Author = () => {
  return (
    <div id="author" className="grid grid-cols-12 grid-rows-9">
      <div className="bg-primary-color col-span-full row-start-2 row-end-9"></div>
      <div className="col-start-2 col-end-12 2xl:col-start-3 2xl:col-end-11 row-span-full sm:row-start-1 p-5 sm:p-10 bg-white drop-shadow-2xl">
        <div className="flex items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-center sm:basis-2/3">
            <div className="font-lexiadama text-3xl text-primary-color">
              Author
            </div>
            <div className="border-secondary-color border-b-2 w-24 my-5"></div>
            <div className="font-lexiadama text-xl italic text-primary-color">
              The Highest Calling
            </div>
            <p className="pb-10">
              You will laugh, you will cry, and you will learn. The Highest
              Calling is more than an inspirational book. For those that seek,
              it is a powerful entrepreneurial education; one that will improve
              the lives of millions for a lifetime.
            </p>
            <div className="flex gap-5 sm:gap-0 flex-col sm:flex-row justify-center items-center text-primary-color mb-16">
              <div className="flex">
                <Image
                  className="px-2"
                  src="/img/leaf-left.png"
                  alt="Leaf"
                  width="50"
                  height="50"
                />
                <div className="flex flex-col items-center text-center">
                  <p className="text-xs">2011</p>
                  <p className="text-xs">National Indie</p>
                  <p className="text-xs">Excellence Award</p>
                </div>
                <Image
                  className="px-2"
                  src="/img/leaf-right.png"
                  alt="Leaf"
                  width="50"
                  height="50"
                />
              </div>
              <div className="flex">
                <Image
                  className="px-2"
                  src="/img/leaf-left.png"
                  alt="Leaf"
                  width="50"
                  height="50"
                />
                <div className="flex flex-col items-center text-center">
                  <p className="text-xs">2010</p>
                  <p className="text-xs">Small Business</p>
                  <p className="text-xs">Book Award</p>
                </div>
                <Image
                  className="px-2"
                  src="/img/leaf-right.png"
                  alt="Leaf"
                  width="50"
                  height="50"
                />
              </div>
              <div className="flex">
                <Image
                  className="px-2"
                  src="/img/leaf-left.png"
                  alt="Leaf"
                  width="50"
                  height="50"
                />
                <div className="flex flex-col items-center text-center">
                  <p className="text-xs">2010</p>
                  <p className="text-xs">New England</p>
                  <p className="text-xs">Book Festival</p>
                </div>
                <Image
                  className="px-2"
                  src="/img/leaf-right.png"
                  alt="Leaf"
                  width="50"
                  height="50"
                />
              </div>
            </div>
            <Link
              href="https://shop.thehighestcallingbook.com/"
              target="_blank"
              className="text-white bg-secondary-color px-4 py-2"
            >
              Buy Now
            </Link>
          </div>
          <Image
            className="lg:absolute sm:-right-20 w-3/4 sm:h-[384px] sm:w-[384px]"
            src="/img/highest-books.png"
            alt="Highest Calling"
            width="384"
            height="384"
          />
        </div>
      </div>
    </div>
  );
};

export default Author;
