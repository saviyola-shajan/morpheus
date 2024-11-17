function About() {
  return (
    <div className="bg text-white">
      <div className="pt-24 flex flex-col lg:flex-row justify-between">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 h-54 flex justify-center items-center ml-4 sm:ml-8 lg:ml-16 px-4 sm:px-6 lg:px-8 m-6 lg:m-10">
          <img
            src="/DSC08338 low size .jpg"
            alt="portrait"
            className="w-full h-auto rounded-xl"
          />
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:mr-10 mt-6 sm:mt-10 lg:mt-0 px-4 sm:px-6 lg:px-24 font-medium font-sans mb-8 lg:mb-12">
          <div className="font-semibold text-3xl sm:text-4xl lg:text-6xl mt-6">
            Hi...{" "}
            <span className="font-normal text-xl sm:text-2xl lg:text-3xl hover:text-red-600">
              I&apos;m
            </span>
          </div>
          <br />
          <div className="font-medium text-lg sm:text-xl lg:text-2xl text-red-600">
            Murphy Devasy
          </div>
          <div
            className="font-normal text-base sm:text-lg lg:text-xl"
            style={{ color: "#F39C12" }}
          >
            -Director
          </div>
          <br />
          <p className="text-xs sm:text-sm lg:text-base">
            Director of the critically acclaimed Malayalam film *Nalla Nilavulla
            Rathri*, produced by Sandra Thomas Productions. This film has
            garnered significant recognition, with its song and trailer
            surpassing 3.5 million views on YouTube. Upon its release on Amazon,
            it quickly entered the top 10 in India.
          </p>
          <p className="text-xs sm:text-sm lg:text-base">
            After earning a degree in Visual Communication from Hindustan
            College, Chennai, in 2007, I accumulated seven years of experience
            working with Malayalam channels, Star Sports, and various programs
            for CNBC channels. This period honed my skills and laid a solid
            foundation for my career in visual storytelling.
          </p>
          <p className="text-xs sm:text-sm lg:text-base">
            For the past 12 years, I have dedicated myself to the advertising
            field, progressing from Associate Director to Director at a renowned
            ad film production house. My extensive experience has led to the
            establishment of Morpheus Ads, where our focus is on creating
            top-quality advertisements.
          </p>
          <p className="text-xs sm:text-sm lg:text-base">
            At Morpheus Ads, we are a collective of young, creative minds with
            substantial experience in both the film and ad film industries. Our
            recent projects have not only met but exceeded client expectations,
            bringing big smiles to their faces. We pride ourselves on our
            innovative approach and our commitment to excellence in every
            project we undertake.
          </p>
        </div>
      </div>
      {/* Gallery Section */}
      <div className="w-full flex flex-wrap justify-center items-center mt-4">
        <div className="w-full max-w-screen-xl flex flex-wrap justify-center items-center mb-8 lg:mb-12 mt-8 lg:mt-12">
          {[
            { src: "/images/_ASH4477.JPG", label: "DREAM" },
            { src: "/images/_DSC1164.JPG", label: "CREATE" },
            { src: "/images/_RL_0796.JPG", label: "INSPIRE" },
            { src: "/images/_ASH7760.JPG", label: "DIRECT" },
          ].map((image, index) => (
            <div
              key={index}
              className="group relative mb-4 w-full sm:w-1/2 lg:w-1/4 p-2"
            >
              <img
                className="w-full h-auto rounded-lg"
                src={image.src}
                alt={`Image ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                <p className="text-white font-semibold text-lg sm:text-xl lg:text-2xl">
                  {image.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
