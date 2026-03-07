export default function AboutSection() {
  return (
    <section id="about">
      <div className="h-screen bg-whitesmoke max-[1180px]:min-h-0">
        <div className="mx-auto h-full my-0 py-[70px] px-[100px] max-[1180px]:px-8 max-[1180px]:py-[70px]">
          <h1 className="m-0">About me</h1>
          <div className="h-full flex items-center justify-center ">
            <i className="mb-20 font-cormorant text-3xl tracking-wide text-brand">
              Full Stack Developer
            </i>
          </div>
        </div>
      </div>
    </section>
  );
}
