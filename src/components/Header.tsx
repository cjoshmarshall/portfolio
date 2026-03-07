import { useState } from "react";

const sections = [
  { id: 1, label: "HOME", path: "#" },
  { id: 2, label: "ABOUT", path: "#about" },
  { id: 3, label: "PROJECTS", path: "#projects" },
  { id: 4, label: "SKILLS", path: "#skills" },
  { id: 5, label: "CONTACT", path: "#contact" },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="w-full fixed top-0 z-10">
        <div className="hidden justify-between mx-10 pb-4 pt-8 md:flex">
          <div className="bg-cream px-2 py-1 rounded-xl w-fit text-lg font-marcellus font-extrabold cursor-pointer">
            <a href="#">HOME</a>
          </div>
          <ul className="w-2/5 flex justify-between list-none m-0 p-0">
            <li className="bg-cream px-2 py-1 rounded-xl text-lg font-marcellus font-extrabold cursor-pointer hover:text-brand hover:underline hover:underline-offset-2 hover:decoration-[3px]">
              <a href="#about">ABOUT</a>
            </li>
            <li className="bg-cream px-2 py-1 rounded-xl text-lg font-marcellus font-extrabold cursor-pointer hover:text-brand hover:underline hover:underline-offset-2 hover:decoration-[3px]">
              <a href="#projects">PROJECTS</a>
            </li>
            <li className="bg-cream px-2 py-1 rounded-xl text-lg font-marcellus font-extrabold cursor-pointer hover:text-brand hover:underline hover:underline-offset-2 hover:decoration-[3px]">
              <a href="#skills">SKILLS</a>
            </li>
            <li className="bg-cream px-2 py-1 rounded-xl text-lg font-marcellus font-extrabold cursor-pointer hover:text-brand hover:underline hover:underline-offset-2 hover:decoration-[3px]">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
        <div
          className="flex justify-end text-3xl md:hidden"
          onClick={() => setSidebarOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Open menu"
        >
          <i className="fa-solid fa-bars m-4 cursor-pointer" />
        </div>
      </div>

      <div
        className="h-full fixed top-0 bottom-0 z-10 overflow-hidden bg-cream2 transition-[width] duration-300"
        style={{ width: sidebarOpen ? "100%" : "0%" }}
        id="sidebar"
        aria-hidden={!sidebarOpen}
      >
        <div className="flex justify-end my-3.5 mx-[18px] text-3xl">
          <button
            onClick={() => setSidebarOpen(false)}
            tabIndex={0}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark cursor-pointer" />
          </button>
        </div>
        <ul className="my-8 mx-auto p-0 text-center list-none">
          {sections.map((item) => (
            <li
              key={item.id}
              className="my-14 mx-auto w-fit text-3xl cursor-pointer"
              onClick={() => setSidebarOpen(false)}
              tabIndex={0}
            >
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
