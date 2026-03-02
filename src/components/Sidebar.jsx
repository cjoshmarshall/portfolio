export default function Sidebar() {
  const handleToggle = () => {
    if (typeof document !== "undefined") {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) sidebar.style.width = "0%";
    }
  };

  return (
    <div
      className="w-0 h-full fixed top-0 bottom-0 z-10 overflow-hidden bg-cream2 transition-[width] duration-300"
      id="sidebar"
    >
        <div className="flex justify-end my-3.5 mx-[18px] text-3xl">
          <button onClick={handleToggle} tabIndex={0}>
            <i className="fa-solid fa-xmark cursor-pointer" />
          </button>
        </div>
        <ul className="my-8 mx-auto p-0 text-center list-none">
          {['#', '#about', '#projects', '#skills', '#contact'].map((href, i) => (
            <li
              key={href}
              className="my-14 mx-auto w-fit text-3xl cursor-pointer"
              onClick={handleToggle}
              tabIndex={0}
            >
              <a href={href}>{['HOME', 'ABOUT', 'PROJECTS', 'SKILLS', 'CONTACT'][i]}</a>
            </li>
          ))}
        </ul>
    </div>
  );
}
