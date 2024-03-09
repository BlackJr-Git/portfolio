function AboutMe() {
  return (
    <section>
      <div className="max-w-5xl m-auto flex md:flex-row-reverse flex-col py-12">
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl text-center py-6 font-bold"> Let&apos;s know me a little bit</h2>
        </div>
        <div className="md:w-1/2 w-full px-3">
          <p className="text-lg">
            Hello there ! I&apos;m <span className="bg-clip-text text-transparent font-semibold bg-gradient-to-l from-blue-500 to-red-500">Junior Asosa</span>, a passionate <span className="bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-red-500 font-semibold">full-stack web developer </span> 
             with a knack for building dynamic and engaging web applications.
            With a strong foundation in both front-end and back-end
            technologies, I pride myself on crafting seamless, intuitive
            experiences that stand out on the web. From conceptualizing creative
            solutions to deploying fully-functional websites, I&apos;m dedicated to
            pushing the boundaries of web development to deliver projects that
            not only meet but exceed expectations. 
            <span className="inline-block py-3">Let&apos;s create something
            amazing together !</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
