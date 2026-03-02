export default function Header() {
  const handleToggle = () => {
    if (typeof document !== "undefined") {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) sidebar.style.width = "100%";
    }
  };

  return (
    <div className="w-full sticky top-0 z-10">
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
        onClick={handleToggle}
      >
        <i className="fa-solid fa-bars m-4 cursor-pointer" />
      </div>
    </div>
  );
}
