import React, { useState } from "react";

const CategoryIcons = {
  "Web Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Mobile Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
    </svg>
  ),
  "UI/UX Design & Prototyping": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M5.7646 7.99998L5.46944 7.26944C5.26255 6.75737 5.50995 6.17454 6.02202 5.96765L15.2939 2.22158C15.8059 2.01469 16.3888 2.26209 16.5956 2.77416L22.2147 16.6819C22.4216 17.194 22.1742 17.7768 21.6622 17.9837L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1772L11.0002 20.9586V21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V19.7303L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L5.7646 7.99998ZM8.00021 19H10.2089L8.00021 13.5333V19ZM6.00021 12.7558L4.32696 16.8972L6.00021 17.6084V12.7558ZM7.69842 7.44741L12.5683 19.5008L19.9858 16.5039L15.1159 4.45055L7.69842 7.44741ZM10.6766 9.47974C10.1645 9.68663 9.5817 9.43924 9.37481 8.92717C9.16792 8.4151 9.41532 7.83227 9.92739 7.62538C10.4395 7.41849 11.0223 7.66588 11.2292 8.17795C11.4361 8.69002 11.1887 9.27286 10.6766 9.47974Z"></path>
    </svg>
  ),
  "Graphic Design": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path
        fill="currentColor"
        d="M3 17.25V21h3.75L17.81 9.93l-3.75-3.75zm19.61 1.11l-4.25 4.25l-5.2-5.2l1.77-1.77l1 1l2.47-2.48l1.42 1.42L18.36 17l1.06 1l1.42-1.4zm-16-7.53L1.39 5.64l4.25-4.25L7.4 3.16L4.93 5.64L6 6.7l2.46-2.48l1.42 1.42l-1.42 1.41l1 1zM20.71 7c.39-.39.39-1 0-1.41l-2.34-2.3c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75z"
      ></path>
    </svg>
  ),
  "Web Admin & Maintenance": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path
        fill="currentColor"
        d="M1.313 0L0 1.313l2.313 4l1.5-.22l9.156 9.157l-.781.75c-.4.4-.4 1.006 0 1.406l.406.407c.4.4 1.012.4 1.312 0L15.094 18c-.1.6 0 1.313.5 1.813L21 25.188c1.1 1.1 2.9 1.1 4 0c1.3-1.2 1.288-2.994.188-4.094l-5.375-5.407c-.5-.5-1.213-.7-1.813-.5L16.687 14c.3-.4.3-1.012 0-1.313l-.375-.374a.974.974 0 0 0-1.406 0l-.656.656l-9.156-9.156l.218-1.5l-4-2.313zm19.5.031C18.84-.133 16.224 1.175 15 2.312c-1.506 1.506-1.26 3.475-.063 5.376l-2.124 2.125l1.5 1.687c.8-.7 1.98-.7 2.78 0l.407.406l.094.094l.875-.875c1.808 1.063 3.69 1.216 5.125-.219c1.4-1.3 2.918-4.506 2.218-6.406L23 7.406c-.4.4-1.006.4-1.406 0L18.687 4.5a.974.974 0 0 1 0-1.406L21.595.188c-.25-.088-.5-.133-.782-.157m-11 12.469l-3.626 3.625A5.3 5.3 0 0 0 5 16c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5c0-.513-.081-1.006-.219-1.469l2.125-2.125l-.312-.406c-.8-.8-.794-2.012-.094-2.813L9.812 12.5zm7.75 4.563c.125 0 .243.024.343.125l5.907 5.906c.2.2.2.518 0 .718s-.52.2-.72 0l-5.905-5.906c-.2-.2-.2-.518 0-.718c.1-.1.25-.125.375-.125M5.688 18.405l1.906 1.907l-.688 2.593l-2.593.688l-1.907-1.907l.688-2.593z"
      />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Web Development": [
      "Single Page Applications (SPAs)",
      "Landing pages and business websites",
      "Portfolio websites",
      "E-commerce, Shopify and Etsy integration",
      "Web3 integration: NFTs, Crypto payments, etc",
      "Wordpress development",
    ],
    "Mobile Development": [
      "Mobile-friendly web apps",
      "Progressive Web Apps (PWAs)",
      "Mobile first",
    ],
    "Graphic Design": [
      "Logo design",
      "Branding & identity design",
      "Business cards, social media graphics, merchandise",
    ],
    // "UI/UX Design & Prototyping": [
    //   "UI design with Figma & Canva",
    //   "UX research & improvements",
    //   "Prototyping for websites & mobile apps",
    // ],
    "Web Admin & Maintenance": [
      "Domain name registration & email set up -- you@yourbizname.co.uk",
      "Content updates - from old school FTP to CMS, Wordpress and continuous delivery",
      "Bug fixing",
      "Technical assistance",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9 w-full">
      <h2 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h2>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <span className="inline-flex pl-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
