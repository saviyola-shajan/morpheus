function About() {
  return (
    <div className="bg text-white">
      <div className="pt-24 flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-1/2 h-96 flex justify-center mr-2 items-center ml-16 px-6 m-10 lg:mt-48">
          <img
            src="/_RL_9939.JPG"
            alt="portrait"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:mr-10 mt-16 lg:mt-0 px-6 lg:px-24 font-medium font-sans mb-12">
          <div className="font-semibold text-4xl lg:text-6xl mt-8">
            Hi...{" "}
            <span className="font-normal text-2xl lg:text-3xl hover:text-red-600">
              I&apos;m
            </span>
          </div>
          <br />
          <div className="font-medium text-xl lg:text-2xl text-red-600">
            Murphy Devasy
          </div>
          <div className="font-normal text-lg lg:text-xl text-red-600">
            -Director
          </div>
          <br />
          <p className="text-sm lg:text-base">
            Director of the critically acclaimed Malayalam film Nalla Nilavulla
            Rathri, produced by Sandra Thomas Productions. This film has
            garnered significant recognition, with its song and trailer
            surpassing 3.5 million views on YouTube. Upon its release on Amazon,
            it quickly entered the top 10 in India.
          </p>
          <p className="text-sm lg:text-base">
            After earning a degree in Visual Communication from Hindustan
            College, Chennai, in 2007, I accumulated seven years of experience
            working with Malayalam channels, Star Sports, and various programs
            for CNBC channels. This period honed my skills and laid a solid
            foundation for my career in visual storytelling.
          </p>
          <p className="text-sm lg:text-base">
            For the past 12 years, I have dedicated myself to the advertising
            field, progressing from Associate Director to Director at a renowned
            ad film production house. My extensive experience has led to the
            establishment of Morpheus Ads, where our focus is on creating
            top-quality advertisements.
          </p>
          <p className="text-sm lg:text-base">
            At Morpheus Ads, we are a collective of young, creative minds with
            substantial experience in both the film and ad film industries. Our
            recent projects have not only met but exceeded client expectations,
            bringing big smiles to their faces. We pride ourselves on our
            innovative approach and our commitment to excellence in every
            project we undertake.
          </p>
        </div>
      </div>
      <div className="w-full mt-4 flex flex-wrap justify-center items-center">
        <div className="w-full max-w-screen-xl flex flex-wrap justify-center items-center mb-12 mt-12">
          <div className="group relative mb-4 w-full sm:w-1/2 lg:w-1/4 p-2">
            <img
              className="w-full h-auto transition duration-300 transform group-hover:scale-110 rounded-lg"
              src="/3D-logo.jpg"
              alt="Image 1"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
              <p className="text-white font-semibold text-2xl">DREAM</p>
            </div>
          </div>
          <div className="group relative mb-4 w-full sm:w-1/2 lg:w-1/4 p-2">
            <img
              className="w-full h-auto transition duration-300 transform group-hover:scale-110 rounded-lg"
              src="/3D-logo.jpg"
              alt="Image 2"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
              <p className="text-white font-semibold text-2xl">CREATE</p>
            </div>
          </div>
          <div className="group relative mb-4 w-full sm:w-1/2 lg:w-1/4 p-2">
            <img
              className="w-full h-auto transition duration-300 transform group-hover:scale-110 rounded-lg"
              src="/3D-logo.jpg"
              alt="Image 3"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
              <p className="text-white font-semibold text-2xl">INSPIRE</p>
            </div>
          </div>
          <div className="group relative mb-4 w-full sm:w-1/2 lg:w-1/4 p-2">
            <img
              className="w-full h-auto transition duration-300 transform group-hover:scale-110 rounded-lg"
              src="/3D-logo.jpg"
              alt="Image 4"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
              <p className="text-white font-semibold text-2xl">DIRECT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


// function About() {
//   return (
//     <div className="relative w-full h-screen text-white">
//       <img
//         src="/_RL_9939.JPG"
//         alt="portrait"
//         className="object-cover w-full h-full"
//       />
//       <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-black bg-opacity-50">
//         <div className="text-center">
//           <div className="font-semibold text-6xl mb-4">
//             Hi...{" "}
//             <span className="font-normal text-3xl hover:text-red-600">
//               I&apos;m
//             </span>
//           </div>
//           <div className="font-medium text-2xl text-red-600 mb-2">
//             Murphy Devasy
//           </div>
//           <div className="font-normal text-xl text-red-600 mb-8">-Director</div>
//           <div className="font-medium text-xl tracking-wider">
//             Director of the critically acclaimed Malayalam film Nalla Nilavulla
//             Rathri, produced by Sandra Thomas Productions. This film has
//             garnered significant recognition, with its song and trailer
//             surpassing 3.5 million views on YouTube. Upon its release on Amazon,
//             it quickly entered the top 10 in India.
//             <br />
//             After earning a degree in Visual Communication from Hindustan
//             College, Chennai, in 2007, I accumulated seven years of experience
//             working with Malayalam channels, Star Sports, and various programs
//             for CNBC channels. This period honed my skills and laid a solid
//             foundation for my career in visual storytelling.
//             <br />
//             For the past 12 years, I have dedicated myself to the advertising
//             field, progressing from Associate Director to Director at a renowned
//             ad film production house. My extensive experience has led to the
//             establishment of Morpheus Ads, where our focus is on creating
//             top-quality advertisements.
//             <br />
//             At Morpheus Ads, we are a collective of young, creative minds with
//             substantial experience in both the film and ad film industries. Our
//             recent projects have not only met but exceeded client expectations,
//             bringing big smiles to their faces. We pride ourselves on our
//             innovative approach and our commitment to excellence in every
//             project we undertake.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
