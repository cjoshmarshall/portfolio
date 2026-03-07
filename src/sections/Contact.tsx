import { cn } from "../utils/cn";

export default function ContactSection() {
  const today = new Date();

  const contact = [
    {
      id: 1,
      text: "Résumé",
      subtext: "Go to my résumé",
      iconClass: "fa-solid fa-note-sticky",
      link: "https://drive.google.com/file/d/1Qe3v_zIuWGDV_KbWiICOugv9nSqZ8Tuw/view",
    },
    {
      id: 2,
      text: "Github",
      subtext: "Go to my Github Profile",
      iconClass: "fa-brands fa-github",
      link: "https://www.github.com/cjoshmarshall",
    },
    {
      id: 3,
      text: "Phone",
      subtext: "+919486684097",
      iconClass: "fa-solid fa-phone",
      link: "tel:+919486684097",
    },
    {
      id: 4,
      text: "Email",
      subtext: "cjoshmarshall@gmail.com",
      iconClass: "fa-regular fa-envelope-open",
      link: "mailto:cjoshmarshall@gmail.com",
    },
    {
      id: 5,
      text: "Linkedin",
      subtext: "Go to my Linkedin",
      iconClass: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/cjoshmarshall",
    },
  ];

  return (
    <section id="contact">
      <div className="h-screen bg-[linear-gradient(170deg,rgba(250,137,123,1)_0%,rgba(255,221,148,1)_46%)] max-[1180px]:min-h-0 max-[650px]:min-h-0">
        <div className="h-full mx-auto my-0 pt-[70px] px-[100px] max-[1180px]:px-8 max-[1180px]:pt-[70px] max-[650px]:px-8 max-[650px]:pt-[70px]">
          <h1 className="m-0">Contact</h1>
          <div className="h-full flex flex-col justify-between">
            <div className="mt-48 max-[532px]:mt-10">
              <h1 className="text-3xl font-light text-center m-0">Hire me!</h1>
              <div className="flex justify-center py-10 text-gray70 max-[1180px]:flex-wrap max-[650px]:p-0">
                {contact.map((item) => (
                  <div
                    key={item.id}
                    className="w-[200px] text-center m-0 max-[650px]:my-2.5 max-[650px]:mx-auto"
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className={cn(
                          item.iconClass,
                          "my-2.5 mx-5 p-5 text-5xl rounded-full transition-all duration-200 hover:text-blanchedalmond hover:bg-gray70 hover:-translate-y-2.5 max-[1180px]:text-3xl",
                        )}
                      ></i>
                    </a>
                    <p className="text-lg">{item.text}</p>
                    <p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="hover:underline hover:underline-offset-2 hover:decoration-2 cursor-pointer">
                          {item.subtext}
                        </span>
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mb-4 font-shrikhand text-lg font-light text-center">
              @{today.getFullYear()} Josh Marshall
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
