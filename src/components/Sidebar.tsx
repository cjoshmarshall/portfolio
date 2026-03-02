const sections = [
  { id: 1, label: "HOME", path: "#" },
  { id: 2, label: "ABOUT", path: "#about" },
  { id: 3, label: "PROJECTS", path: "#projects" },
  { id: 4, label: "SKILLS", path: "#skills" },
  { id: 5, label: "CONTACT", path: "#contact" },
];

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
        {sections.map((item) => (
          <li
            key={item.id}
            className="my-14 mx-auto w-fit text-3xl cursor-pointer"
            onClick={handleToggle}
            tabIndex={0}
          >
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
