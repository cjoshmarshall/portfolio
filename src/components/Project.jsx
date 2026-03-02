import { projects } from "../data/projects.js";

export default function Project() {
  const handleFlip = ({ id }) => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.add("projects_flip", "projects_flipShadow");
      el.classList.remove("projects_frontContainer");
    }
  };

  const handleFlipBack = ({ id }) => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("projects_flip", "projects_flipShadow");
  };

  return (
    <div className="min-h-fit bg-[blanchedalmond]">
      <div className="mx-auto px-[100px] pt-[70px] max-[1275px]:px-8 max-[1275px]:pt-[70px]">
        <h1 className="m-0">Projects</h1>
      </div>
      <div className="grid grid-cols-2 gap-0 px-[60px] pb-[70px] text-center max-[1275px]:px-0 max-[980px]:p-[5px] max-[890px]:grid-cols-1 max-[890px]:gap-10 max-[660px]:m-0 max-[660px]:p-0 max-[660px]:gap-10">
        {projects.map((project) => (
          <div
            className="flex justify-center m-5 transition-[transform] duration-200 hover:-translate-x-2.5 hover:-translate-y-2.5 max-[980px]:m-2.5 max-[890px]:mx-auto max-[890px]:my-0 max-[660px]:mx-5"
            key={project.id}
          >
            <div
              className="inline-flex justify-center relative w-full border-[5px] border-double border-black rounded-sm [transform-style:preserve-3d] transition-all duration-200 hover:text-black hover:bg-wheat hover:border-black hover:shadow-[15px_15px_15px_2px_rgba(0,0,0,0.9)]"
              id={`flip${project.id}`}
            >
              <div className="min-h-fit [backface-visibility:hidden] projects_frontContainer">
                <div className="flex justify-center m-5">
                  <img
                    className="mx-auto h-[170px] animate-image3 block absolute"
                    src={project.image3}
                    alt=""
                  />
                  <img
                    className="mx-auto h-[170px] absolute animate-image2"
                    src={project.image2}
                    alt=""
                  />
                  <img
                    className="mx-auto h-[170px] animate-image1"
                    src={project.image1}
                    alt=""
                  />
                </div>
                <div className="flex justify-center m-5">
                  <h2 className="w-auto"> {project.title}</h2>
                </div>
                <ul className="flex justify-center p-0 list-none">
                  {project.site.map((item) => (
                    <li className="mx-3" key={item.id}>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        <button className="my-2.5 mx-0 py-2.5 px-2.5 text-base shadow-[3px_6px] transition-all duration-100 hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none" type="button">
                          {item.button}
                        </button>
                      </a>
                    </li>
                  ))}
                  <li className="mx-3">
                    <button
                      className="my-2.5 mx-0 py-2.5 px-2.5 text-base shadow-[3px_6px] transition-all duration-100 hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none"
                      type="button"
                      onClick={() => handleFlip({ id: "flip" + project.id })}
                    >
                      READ MORE
                    </button>
                  </li>
                </ul>
              </div>

              <div className="text-brown absolute [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex justify-center m-5">
                  <h2 className="w-auto">{project.title}</h2>
                </div>
                <div className="flex justify-center m-5">
                  <h3 className="text-brown">{project.type}</h3>
                </div>
                <div className="flex justify-center m-5">
                  <p className="w-auto">{project.description}</p>
                </div>
                <ul className="flex justify-center list-none p-0">
                  {project.tech.map((tech) => (
                    <li className="mx-5 py-1.5 border-2 border-brown rounded-md" key={tech}>
                      <i>{tech}</i>
                    </li>
                  ))}
                </ul>
                <ul className="flex justify-center p-0 list-none">
                  <li className="mx-3">
                    <button
                      className="my-2.5 mx-0 py-2.5 px-2.5 text-base shadow-[3px_6px] transition-all duration-100 hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none"
                      type="button"
                      onClick={() => handleFlipBack({ id: "flip" + project.id })}
                    >
                      READ LESS
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
