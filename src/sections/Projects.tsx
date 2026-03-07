import Project from "../components/Project";

export const projects = [
  {
    id: 1,
    images: [
      "/images/vintagemotors1.jpg",
      "/images/vintagemotors2.jpg",
      "/images/vintagemotors3.jpg",
    ],
    title: "Vintage Motors Rentals",
    type: "Personal Project",
    tech: ["React", "NodeJS", "MongoDB", "AWS"],
    description:
      "A completely responsive e-commerce site for renting Bikes implemented using the MERN stack. Place a booking on your appropriate time and the bike gets delivered to you in no time.",
    site: [
      {
        id: 1,
        link: "https://vintagemotorsrentals.netlify.app",
        button: "VISIT WEBSITE",
      },
      {
        id: 2,
        link: "https://github.com/cjoshmarshall/vintagemotors_client",
        button: "FRONT-END",
      },
      {
        id: 3,
        link: "https://github.com/cjoshmarshall/vintagemotors_server",
        button: "BACK-END",
      },
    ],
  },
  {
    id: 2,
    images: [
      "/images/theguitarcenter1.jpg",
      "/images/theguitarcenter2.jpg",
      "/images/theguitarcenter3.jpg",
    ],
    title: "The Guitar Center",
    tech: ["React", "NodeJS", "MongoDB", "AWS"],
    type: "Personal Project",
    description:
      "A completely responsive e-commerce site for where you can get guitars and guitar accessories. Developed using the MERN stack. Best for retailers who place orders in huge quantites.",
    site: [
      {
        id: 1,
        link: "https://theguitarcenter.netlify.app",
        button: "VISIT WEBSITE",
      },
      {
        id: 2,
        link: "https://github.com/cjoshmarshall/theguitarcenter_client",
        button: "FRONT-END",
      },
      {
        id: 3,
        link: "https://github.com/cjoshmarshall/theguitarcenter_server",
        button: "BACK-END",
      },
    ],
  },
  {
    id: 3,
    images: [
      "/images/blogera1.jpg",
      "/images/blogera2.jpg",
      "/images/blogera3.jpg",
    ],
    title: "Blogera",
    tech: ["React", "NodeJS", "MongoDB", "AWS"],
    type: "Personal Project",
    description:
      "A completely responsive site for blogging and social networking developed using the MERN stack and AWS.",
    site: [
      { id: 1, link: "https://blogera.netlify.app", button: "VISIT WEBSITE" },
      {
        id: 2,
        link: "https://github.com/cjoshmarshall/blogera_client",
        button: "FRONT-END",
      },
      {
        id: 3,
        link: "https://github.com/cjoshmarshall/blogera_server",
        button: "BACK-END",
      },
    ],
  },
  {
    id: 4,
    images: [
      "/images/spacex1.jpg",
      "/images/spacex2.jpg",
      "/images/spacex3.jpg",
    ],
    title: "Spacex",
    type: "Personal Project",
    tech: ["React"],
    description: "A completely responsive clone website of SpaceX.",
    site: [
      {
        id: 1,
        link: "https://joshsspacex.netlify.app",
        button: "VISIT WEBSITE",
      },
      {
        id: 2,
        link: "https://github.com/cjoshmarshall/spacex_client",
        button: "FRONT-END",
      },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="min-h-screen h-fit bg-blanchedalmond">
        <div className="mx-auto px-[100px] pt-[70px] max-[1275px]:px-8 max-[1275px]:pt-[70px]">
          <h1 className="m-0">Projects</h1>
        </div>
        <div className="grid grid-cols-2 gap-0 px-[60px] pb-[70px] text-center max-[1275px]:px-0 max-[980px]:p-[5px] max-[890px]:grid-cols-1 max-[890px]:gap-10 max-[660px]:m-0 max-[660px]:p-0 max-[660px]:gap-10">
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
