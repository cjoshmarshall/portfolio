export default function AboutSection() {
  return (
    <section id="about">
      <div className="min-h-screen bg-whitesmoke max-[1180px]:min-h-0">
        <div className="mx-auto my-0 py-[70px] px-[100px] max-[1180px]:px-8 max-[1180px]:py-[70px]">
          <h1 className="m-0">About me</h1>
          <div className="mt-10 font-cormorant tracking-[0.3px]">
            <i className="m-0 text-[28px] max-[1180px]:text-lg">
              Hi, I am Joshua Marshall. I'm a{" "}
              <span className="text-brand">Full Stack Developer</span> focusing on
              the <span className="text-brand">MERN</span> stack, currently based in
              Nellai, Tamilnadu.
            </i>
            <i className="m-0 text-[28px] max-[1180px]:text-lg">
              I got a bachelor's degree on Electronics and Communications
              Engineering.
            </i>
          </div>
          <div className="mt-10 font-cormorant tracking-[0.3px]">
            <i className="m-0 text-[28px] max-[1180px]:text-lg">
              I mostly specialize in Front-End, whether pinching creative ideas,
              even designing and building the whole website from scratch with
              the Back-End.
            </i>
          </div>
          <div className="mt-10 font-cormorant tracking-[0.3px]">
            <i className="m-0 text-[28px] max-[1180px]:text-lg">
              Currently I've developed a few{" "}
              <span className="text-brand">Full Stack</span> projects that are
              showcased below.
            </i>
          </div>
        </div>
      </div>
    </section>
  );
}
