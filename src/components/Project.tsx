import type { Project as ProjectType } from "../types";
import { useState } from "react";
import { cn } from "../utils/cn";
import Button from "./Button";

export default function Project({ project }: { project: ProjectType }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex justify-center m-5 transition-[transform] duration-200 hover:-translate-x-2.5 hover:-translate-y-2.5 max-[980px]:m-2.5 max-[890px]:mx-auto max-[890px]:my-0 max-[660px]:mx-5">
      <div
        className={cn(
          "inline-flex justify-center relative w-full border-[5px] border-double border-black rounded-sm [transform-style:preserve-3d] transition-all duration-200 hover:text-black hover:bg-wheat hover:border-black hover:shadow-[15px_15px_15px_2px_rgba(0,0,0,0.9)]",
          isFlipped &&
            "[transform:rotateY(180deg)] bg-wheat hover:shadow-[-15px_15px_15px_2px_rgb(0_0_0_/_0.9)]",
        )}
      >
        <div className="min-h-fit [backface-visibility:hidden]">
          <CyclingImages images={project.images} />
          <div className="flex justify-center m-5">
            <h2 className="w-auto"> {project.title}</h2>
          </div>
          <ul className="flex justify-center my-6 list-none">
            {project.site.map((item) => (
              <li className="mx-3" key={item.id}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <Button type="button">{item.button}</Button>
                </a>
              </li>
            ))}
            <li className="mx-3">
              <Button type="button" onClick={() => setIsFlipped(true)}>
                READ MORE
              </Button>
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
          <ul className="flex justify-center list-none p-0 gap-4">
            {project.tech.map((tech) => (
              <li
                className="px-2.5 py-1.5 border-2 border-brown rounded-md"
                key={tech}
              >
                <i>{tech}</i>
              </li>
            ))}
          </ul>
          <Button
            type="button"
            onClick={() => setIsFlipped(false)}
            className="my-6"
          >
            READ LESS
          </Button>
        </div>
      </div>
    </div>
  );
}

function CyclingImages({ images }: { images: string[] }) {
  const shown = images.slice(0, 3);

  if (shown.length === 0) return null;

  return (
    <div className="flex justify-center m-5 relative h-[170px]">
      {shown.map((src, i) => (
        <img
          key={`${src}-${i}`}
          className={cn(
            "mx-auto h-[170px] absolute left-1/2 -translate-x-1/2",
            `animate-image${[i + 1]}`,
          )}
          src={src}
          alt=""
        />
      ))}
    </div>
  );
}
