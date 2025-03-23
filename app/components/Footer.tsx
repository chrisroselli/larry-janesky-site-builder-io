import Link from "next/link";

const Footer = () => {
  const outsideLinks = [
    { id: 1, text: "Think Daily", url: "https://www.thinkdaily.com/" },
    { id: 2, text: "The SOE", url: "https://www.thesoe.com/" },
    {
      id: 3,
      text: "Contractor Nation",
      url: "https://www.contractornation.com/",
    },
    { id: 4, text: "Store", url: "https://shop.thehighestcallingbook.com/" },
  ];
  return (
    <div className="bg-primary-color">
      <div className="max-w-6xl flex flex-col mx-auto p-5 sm:py-16">
        <div className="text-2xl uppercase text-white font-gotham_bold">
          Larry Janesky
        </div>
        <div className="border-secondary-color border-b-2 w-56 my-6"></div>
        <ul className="flex flex-col">
          {outsideLinks.map((item) => (
            <li
              key={item.id}
              className="text-white rounded-xl my-1 cursor-pointer duration-300"
            >
              <Link href={item.url} target="_blank">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-white text-xs mt-10">
          Privacy policy: Larry values privacy and will never sell your
          information.
        </p>
      </div>
    </div>
  );
};

export default Footer;
