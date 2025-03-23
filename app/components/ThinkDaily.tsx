import HtmlReactParser from "html-react-parser";
import { DateTime } from "luxon";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    "https://www.thinkdaily.com/wp-json/wp/v2/posts/?categories=8",
    { next: { revalidate: 0 } },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const ThinkDaily = async () => {
  const data = await getData();
  const firstPost = data[0];
  const decodedTitle = HtmlReactParser(firstPost.title.rendered);
  const decodedExcerpt = HtmlReactParser(
    firstPost.excerpt.rendered.substring(0, 150) + "...",
  );
  let fullcontent = firstPost.content.rendered;
  let fullcontentArr = fullcontent.match(/<img(.*?)>/);
  let tdDate: DateTime = DateTime.fromISO(firstPost.date);
  return (
    <div className="bg-[url('/img/td-bg.jpg')] bg-no-repeat bg-cover bg-center flex items-center w-full h-fit py-20">
      <div className="flex flex-col-reverse lg:flex-row gap-32 lg:gap-10 2xl:gap-40 max-w-screen-xl mx-5 lg:mx-20 2xl:mx-auto">
        <div className="lg:w-1/2 grid grid-cols-3 grid-rows-4 z-0">
          <div className="flex justify-center items-center col-start-2 lg:col-start-1 row-start-1 z-10 bg-secondary-color h-10 text-center text-xs italic font-bold text-white lg:text-sm relative bottom-5 lg:right-4">
            Today&apos;s Message
          </div>
          <div className="col-start-1 row-start-1 place-self-center justify-self-start relative lg:right-10 lg:top-14 inline-flex items-center flex-col bg-primary-color border-2 border-white px-3 lg:px-4 py-2 rounded-full z-10">
            <div className="text-white text-xs lg:text-xl">
              {tdDate.toFormat("MMMM")}
            </div>
            <div className="text-white text-xs lg:text-xl">
              {tdDate.toFormat("d")}
            </div>
          </div>
          <div className="col-span-full row-span-full bg-white p-10">
            <div className="">{HtmlReactParser(fullcontentArr[0])}</div>
            <div className="text-2xl font-bold py-2">{decodedTitle}</div>
            <div className="text-sm py-2">{decodedExcerpt}</div>
            <div className="border-secondary-color border-b-2 my-6"></div>
            <Link
              className="text-primary-color float-end"
              href={firstPost.link}
              target="_blank"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 align-middle lg:w-1/2">
          <Image
            src="/img/td-logo-white.svg"
            width={300}
            height={73}
            className=""
            alt="Think Daily logo"
          />
          <div className="border-secondary-color border-b-2 w-24 my-5"></div>
          <p className="text-white px-5">
            Think Daily, and Think Daily for Businesspeople are daily messages
            from Larry meant to motivate, educate, inspire, and question – but
            most of all, to invite you to THINK about the issues that are
            important to you each day.
          </p>
          <Link
            href="https://www.thinkdaily.com/"
            target="_blank"
            className="text-white bg-secondary-color px-4 py-2"
          >
            View all Think Daily messages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThinkDaily;
