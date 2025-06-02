import React from "react";
import { ContinueIndicator } from "@/components/ContinueIndicator";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="flex justify-center items-center px-4 h-[60vh] min-h-screen page-section"
    >
      <div className="w-full max-w-4xl">
        <h1 className="mb-20 font-semibold text-main text-4xl text-center dark:text-alt">
          About Me
        </h1>
        <div className="flex md:flex-row flex-col-reverse items-center md:items-start gap-8">
          <div className="flex flex-col justify-center items-center w-full md:w-1/2">
            <p className="mt-4">
              I am a passionate Frontend Developer 👨‍💻 with experience in
              building modern and responsive web applications using React ⚛️,
              Next.js 🌐, and Express 🚀. My main focus is on creating
              user-friendly interfaces that provide a seamless experience 💡. I
              am always eager to learn 📚 and stay updated with the latest
              technologies 🔧 in the frontend development space. I thrive in
              collaborative environments 🤝 and enjoy working on projects that
              challenge me to grow 🌱 as a developer. My goal is to deliver
              high-quality code and innovative solutions that meet both business
              and user needs 🎯.
            </p>
            <br />
          </div>
          <div className="flex justify-center md:justify-end w-full md:w-1/2">
            <img
              src="/aladdinalizada.jpg"
              className="shadow-lg rounded-lg w-[300px] h-[300px] object-cover standout-image"
            />
          </div>
        </div>
        <ContinueIndicator
          currSection="about"
          nextSection="experience"
          className="flex justify-center pt-8"
        />
      </div>
    </section>
  );
};
