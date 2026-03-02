export default function ContactSection() {
  return ( 
  <section id="contact">
    <div
      className="min-h-screen bg-[linear-gradient(170deg,rgba(250,137,123,1)_0%,rgba(255,221,148,1)_46%)] max-[1180px]:min-h-0 max-[650px]:min-h-0"
    >
      <div
        className="mx-auto my-0 pt-[70px] px-[100px] max-[1180px]:px-8 max-[1180px]:pt-[70px] max-[650px]:px-8 max-[650px]:pt-[70px]"
      >
        <h1 className="m-0">Contact</h1>
        <h1 className="text-3xl font-light text-center m-0">Hire me!</h1>
        <div
          className="flex justify-center py-10 text-gray70 max-[1180px]:flex-wrap max-[650px]:p-0"
        >
          <div
            className="w-[200px] text-center m-0 max-[650px]:my-2.5 max-[650px]:mx-auto"
          >
            <a
              href="https://drive.google.com/file/d/1Qe3v_zIuWGDV_KbWiICOugv9nSqZ8Tuw/view"
              target="_blank"
              rel="noopener noreferrer"
              ><i
                className="fa-solid fa-note-sticky my-2.5 mx-5 p-5 text-5xl rounded-full transition-all duration-200 hover:text-blanchedalmond hover:bg-gray70 hover:-translate-y-2.5 max-[1180px]:text-3xl"
              ></i></a
            >
            <p className="text-lg">Résumé</p>
            <p>
              <a
                href="https://drive.google.com/file/d/1Qe3v_zIuWGDV_KbWiICOugv9nSqZ8Tuw/view"
                target="_blank"
                rel="noopener noreferrer"
                ><span
                  className="hover:underline hover:underline-offset-2 hover:decoration-2 cursor-pointer"
                  >Go to my résumé</span
                ></a
              >
            </p>
          </div>
          <div
            className="w-[200px] text-center m-0 max-[650px]:my-2.5 max-[650px]:mx-auto"
          >
            <a
              href="https://www.github.com/cjoshmarshall"
              target="_blank"
              rel="noopener noreferrer"
              ><i
                className="fa-brands fa-github my-2.5 mx-5 p-5 text-5xl rounded-full transition-all duration-200 hover:text-blanchedalmond hover:bg-gray70 hover:-translate-y-2.5 max-[1180px]:text-3xl"
              ></i></a
            >
            <p className="text-lg">Github</p>
            <p>
              <a
                href="https://www.github.com/cjoshmarshall"
                target="_blank"
                rel="noopener noreferrer"
                ><span
                  className="hover:underline hover:underline-offset-2 hover:decoration-2 cursor-pointer"
                  >Go to my Github Profile</span
                ></a
              >
            </p>
          </div>
          <div
            className="w-[200px] text-center m-0 max-[650px]:my-2.5 max-[650px]:mx-auto"
          >
            <a href="tel:+919486684097" rel="noopener noreferrer"
              ><i
                className="fa-solid fa-phone my-2.5 mx-5 p-5 text-5xl rounded-full transition-all duration-200 hover:text-blanchedalmond hover:bg-gray70 hover:-translate-y-2.5 max-[1180px]:text-3xl"
              ></i></a
            >
            <p className="text-lg">Phone</p>
            <p>
              <a href="tel:+919486684097" rel="noopener noreferrer"
                ><span
                  className="hover:underline hover:underline-offset-2 hover:decoration-2 cursor-pointer"
                  >+919486684097</span
                ></a
              >
            </p>
          </div>
          <div
            className="w-[200px] text-center m-0 max-[650px]:my-2.5 max-[650px]:mx-auto"
          >
            <a href="mailto:cjoshmarshall@gmail.com" rel="noopener noreferrer"
              ><i
                className="fa-regular fa-envelope-open my-2.5 mx-5 p-5 text-5xl rounded-full transition-all duration-200 hover:text-blanchedalmond hover:bg-gray70 hover:-translate-y-2.5 max-[1180px]:text-3xl"
              ></i></a
            >
            <p className="text-lg">Email</p>
            <p>
              <a href="mailto:cjoshmarshall@gmail.com" rel="noopener noreferrer"
                ><span
                  className="hover:underline hover:underline-offset-2 hover:decoration-2 cursor-pointer"
                  >cjoshmarshall@gmail.com</span
                ></a
              >
            </p>
          </div>
          <div
            className="w-[200px] text-center m-0 max-[650px]:my-2.5 max-[650px]:mx-auto"
          >
            <a
              href="https://www.linkedin.com/in/cjoshmarshall"
              target="_blank"
              rel="noopener noreferrer"
              ><i
                className="fa-brands fa-linkedin my-2.5 mx-5 p-5 text-5xl rounded-full transition-all duration-200 hover:text-blanchedalmond hover:bg-gray70 hover:-translate-y-2.5 max-[1180px]:text-3xl"
              ></i></a
            >
            <p className="text-lg">Linkedin</p>
            <p>
              <a
                href="https://www.linkedin.com/in/cjoshmarshall"
                target="_blank"
                rel="noopener noreferrer"
                ><span
                  className="hover:underline hover:underline-offset-2 hover:decoration-2 cursor-pointer"
                  >Go to my Linkedin</span
                ></a
              >
            </p>
          </div>
        </div>
        <p className="my-12 font-shrikhand text-lg font-light text-center">
          @2022 Josh Marshall
        </p>
      </div>
    </div>
  </section>);
}
