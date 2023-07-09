import React from "react";
import { useRef } from "react";

import { BsFillFileTextFill, BsGit, BsArrowDownShort } from "react-icons/bs";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {
  design,
  code,
  consulting,
  medfolio1,
  medfolio2,
  medfolio3,
  chat1,
  chat2,
  stream1,
  stream2,
} from "./assets";

const App = () => {
  const services = useRef(null);
  const Projects = useRef(null);
  const scrolltosection = (elementref) => {
    window.scrollTo({
      top: elementref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <main className="bg-stone-100 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="fixed top-0 left-0 w-screen h-16 m-0 flex flex-row bg-gray-900 text-white shadow-lg justify-between">
            <h1 className=" flex text-xl font-adelia pl-2 items-center justify-center">
              DevelopedbyNike
            </h1>
            <ul className=" flex items-center pr-10">
              <li className="flex">
                <div className="group">
                  <li
                    onClick={() => scrolltosection(Projects)}
                    className="flex text-lg px-1 py-2 font-poppins cursor-pointer mr-10 group"
                  >
                    <span
                      className="bg-gradient-to-r from-cyan-600 to-teal-600 flex absolute mt-14 items-center w-auto  p-2 mr-2 min-w-max rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 
                      scale-0 origin-top group-hover:scale-100"
                    >
                      Projects
                    </span>
                    <AiOutlineFundProjectionScreen
                      className=" p-1 h-10 w-10 ml-2 bg-gray-800 text-white hover:bg-white hover:text-gray-800
        rounded-3xl hover:rounded-xl transition-all duration-200"
                    />
                  </li>
                </div>
                <div className="group">
                  <li
                    onClick={() => scrolltosection(services)}
                    className="flex text-lg px-1 py-2 font-poppins cursor-pointer hover:scale-105 mr-10"
                  >
                    <MdHomeRepairService
                      className=" p-1 h-10 w-10 ml-2 bg-gray-800 text-white hover:bg-white hover:text-gray-800
      rounded-3xl hover:rounded-xl transition-all duration-200"
                    />
                    <span
                      className="bg-gradient-to-r from-cyan-600 to-teal-600 flex absolute mt-14 items-center w-auto  p-2 mr-2 min-w-max rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 
      scale-0 origin-top group-hover:scale-100"
                    >
                      Services
                    </span>
                  </li>
                </div>
              </li>
              <div className="group">
                <li className="flex items-center group mr-3">
                  <BsFillFileTextFill
                    className="cursor-pointer p-1 h-8 w-8 ml-2 bg-gray-800 text-white hover:bg-white hover:text-gray-800
      rounded-3xl hover:rounded-xl transition-all duration-200"
                  />

                  <a
                    className="bg-gradient-to-r from-cyan-600 to-teal-600 flex absolute mt-[108px] items-center w-auto  p-2 mr-[10px] min-w-max rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 
                    scale-0 origin-top group-hover:scale-100"
                    href="https://github.com/Nike2447"
                  >
                    Resume
                  </a>
                </li>
              </div>
            </ul>
          </nav>
          <div style={{ paddingTop: "4rem" }}>
            <div className="text-center p-10">
              <h2 className="text-4xl py-4 text-teal-600 font-semibold md:text-6xl">
                Nikhil Menon
              </h2>
              <h3 className="text-xl py-4 md:text-3xl">Student Developer</h3>
              <p className="text-md py-5 leading-10 text-gray-700 md:text-xl max-w-xl mx-auto">
                Introducing a dedicated and aspiring student developer, eager to
                make a meaningful impact on the programming community through
                passion, innovation, and a commitment to continuous learning.
              </p>
              <div className="text-2xl flex justify-center gap-5 text-gray-600">
                <BsTwitter className="hover:scale-105 cursor-pointer" />
                <a href="https://www.linkedin.com/in/nikhil-menon-17629122a/">
                  <BsLinkedin className="hover:scale-105 cursor-pointer" />
                </a>
                <BsGithub className="hover:scale-105 cursor-pointer" />
              </div>
              <div>
                <img
                  className="relative rounded-full h-80 w-80 mx-auto mt-10 "
                  src="../Avatar.png"
                  alt="Nikhil"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="cursor-default" ref={services}>
            <h3 className="text-3xl font-poppins py-1 font-semibold">
              Services I Offer
            </h3>
            <p className="text-md py-2 leading-6 px-10 font-poppins text-gray-600">
              From the outset, I have maintained an unwavering enthusiasm for
              acquiring new technologies, enhancing my skills, and maximizing
              productivity within condensed timelines. My experience includes
              working at a gaming startup, where I actively contributed as a
              game tester during the alpha stage of their product, granting me
              exposure to the software development realm.
            </p>
            <p className="text-md py-2 leading-6 px-10 font-poppins text-gray-600">
              I offer a wide range of Services, including programming, web
              design and can also teach basics of programming in python.
            </p>
          </div>
          <div className="lg: flex gap-10 ">
            <div className="text-center shadow-lg padding-10 rounded-xl my-10 hover:bg-stone-200 ">
              <img
                className="mx-auto"
                width={100}
                height={100}
                src={design}
                alt="Design"
              />
              <h3 className="text-lg font-poppins pt-6 pb-2">
                Beautiful designs
              </h3>
              <p className="text-md pb-10">
                Creating elegant designs according to your needs design theory
              </p>
            </div>
            <div className="text-center shadow-lg padding-10 rounded-xl my-10  hover:bg-stone-200">
              <img
                className="mx-auto"
                width={100}
                height={100}
                src={code}
                alt="Design"
              />
              <h3 className="text-lg font-poppins pt-6 pb-2">Full-Stack</h3>
              <p className="text-md pb-10">
                Creating robust frontend and backend development of web
                applications.
              </p>
            </div>
            <div className="text-center shadow-lg padding-10 rounded-xl my-10  hover:bg-stone-200">
              <img
                className="mx-auto"
                width={100}
                height={100}
                src={consulting}
                alt="Design"
              />
              <h3 className="text-lg font-poppins pt-6 pb-2">
                Responsive designs
              </h3>
              <p className="text-md pb-10 max-w-lg">
                Creating visually appealing and user-friendly designs that adapt
                seamlessly to different screen sizes and devices
              </p>
            </div>
          </div>
        </section>

        <section>
          <div ref={Projects}>
            <h3 className="text-3xl font-poppins py-1 font-semibold">
              Projects
            </h3>
            <p className="text-md py-5 leading-6 px-10 font-poppins text-gray-600">
              This section includes the images of completed projects.
            </p>
            <ol className="font-poppins text-lg">
              <li className="underline-offset-1">1. Medical Portfolio</li>
              <p className="text-lg py-5 leading-6 px-10 font-poppins text-gray-600">
                This is a comprehensive medical portfolio application built
                using ReactJS, designed to store and manage patient medical
                history securely. It provides healthcare professionals with a
                user-friendly interface to record and access patient
                information, ensuring efficient and organized management of
                medical records.
              </p>
              <div className="flex flex-wrap justify-center py-10">
                <img
                  src={medfolio1}
                  className="w-400 h-600 object-cover rounded-lg mx-2 my-2"
                  alt=""
                />
                <img
                  src={medfolio2}
                  className="w-400 h-600 object-cover rounded-lg mx-2 my-2"
                  alt=""
                />
                <img
                  src={medfolio3}
                  className="w-500 h-700 object-cover rounded-lg mx-2 my-2"
                  alt=""
                />
              </div>
              <li>2. Streaming-Site</li>
              <p className="text-lg py-5 leading-6 px-10 font-poppins text-gray-600">
                A simple Streaming site that enables users to search their
                favourite movies and tv shows{" "}
              </p>
              <div>
                <img
                  src={stream1}
                  className="w-500 h-700 object-cover rounded-lg mx-2 my-2"
                  alt=""
                />
                <img
                  src={stream2}
                  className="w-500 h-700 object-cover rounded-lg mx-2 my-2"
                  alt=""
                />
              </div>
              <li>3. Chat Room App</li>
              <p className="text-lg py-5 leading-6 px-10 font-poppins text-gray-600">
                A simple Chat room that authenticates users based on their
                google account and allows them to enter a chat room. The app
                enables them to access all the past messages in the room as well
                as add their own messages to the collection.
              </p>
              <div>
                <img
                  src={chat1}
                  className="w-500 h-700 object-cover rounded-lg mx-2 my-2"
                  alt=""
                />
                <img
                  src={chat2}
                  className="w-500 h-700 object-cover rounded-lg mx-2 my-2"
                  alt=""
                />
              </div>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
