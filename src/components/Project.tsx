import { Project as ProjectType } from "../types/index.js";

const CYCLE_DURATION_S = 16;

function buildCycleKeyframes(n: number): string {
  if (n <= 0) return "";
  if (n === 1) return "0%,100%{opacity:1}";
  const step = 100 / n;
  const steps: string[] = ["0%{opacity:1}"];
  for (let i = 1; i < n; i++) {
    const off = (step * i).toFixed(3);
    const on = (step * i + 0.001).toFixed(3);
    steps.push(`${off}%{opacity:0}`, `${on}%{opacity:1}`);
  }
  steps.push(`${(step * n).toFixed(3)}%{opacity:0}`);
  return steps.join("");
}

function CyclingImages({ images }: { images: string[] }) {
  const N = images.length;
  if (N === 0) return null;

  const keyframeName = `cycling-fade-${N}`;
  const keyframes = buildCycleKeyframes(N);
  const durationPerImage = CYCLE_DURATION_S / N;

  return (
    <div className="flex justify-center m-5 relative h-[170px]">
      {keyframes ? (
        <style>{`@keyframes ${keyframeName}{${keyframes}}`}</style>
      ) : null}
      {images.map((src, i) => (
        <img
          key={`${src}-${i}`}
          className="mx-auto h-[170px] absolute left-1/2 -translate-x-1/2"
          src={src}
          alt=""
          style={{
            animation: keyframes
              ? `${keyframeName} ${CYCLE_DURATION_S}s linear infinite`
              : "none",
            animationDelay: N > 1 ? `${-i * durationPerImage}s` : undefined,
          }}
        />
      ))}
    </div>
  );
}

export default function Project({ project }: { project: ProjectType }) {
  const handleFlip = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.add("projects_flip", "projects_flipShadow");
      el.classList.remove("projects_frontContainer");
    }
  };

  const handleFlipBack = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("projects_flip", "projects_flipShadow");
  };

  return (
    <div className="flex justify-center m-5 transition-[transform] duration-200 hover:-translate-x-2.5 hover:-translate-y-2.5 max-[980px]:m-2.5 max-[890px]:mx-auto max-[890px]:my-0 max-[660px]:mx-5">
      <div
        className="inline-flex justify-center relative w-full border-[5px] border-double border-black rounded-sm [transform-style:preserve-3d] transition-all duration-200 hover:text-black hover:bg-wheat hover:border-black hover:shadow-[15px_15px_15px_2px_rgba(0,0,0,0.9)]"
        id={`flip${project.id}`}
      >
        <div className="min-h-fit [backface-visibility:hidden] projects_frontContainer">
          <CyclingImages images={project.images} />
          <div className="flex justify-center m-5">
            <h2 className="w-auto"> {project.title}</h2>
          </div>
          <ul className="flex justify-center p-0 list-none">
            {project.site.map((item) => (
              <li className="mx-3" key={item.id}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <button
                    className="my-2.5 mx-0 py-2.5 px-2.5 text-base shadow-[3px_6px] transition-all duration-100 hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none"
                    type="button"
                  >
                    {item.button}
                  </button>
                </a>
              </li>
            ))}
            <li className="mx-3">
              <button
                className="my-2.5 mx-0 py-2.5 px-2.5 text-base shadow-[3px_6px] transition-all duration-100 hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none"
                type="button"
                onClick={() => handleFlip("flip" + project.id)}
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
              <li
                className="mx-5 py-1.5 border-2 border-brown rounded-md"
                key={tech}
              >
                <i>{tech}</i>
              </li>
            ))}
          </ul>
          <ul className="flex justify-center p-0 list-none">
            <li className="mx-3">
              <button
                className="my-2.5 mx-0 py-2.5 px-2.5 text-base shadow-[3px_6px] transition-all duration-100 hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none"
                type="button"
                onClick={() => handleFlipBack("flip" + project.id)}
              >
                READ LESS
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
