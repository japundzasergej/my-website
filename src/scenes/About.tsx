import useMediaQuery from '../hooks/useMediaQuery';
import { useAppSelector, useAppDispatch } from '../hooks/useTypedHooks';
import { setIsModal, setIsMobileModal } from '../features/portfolioSlice';
import { motion } from 'framer-motion';

import { GoChevronRight } from 'react-icons/go';
import { BsCodeSlash } from 'react-icons/bs';
import { FaRegFilePdf } from 'react-icons/fa';

const About = () => {
  const { isDark, isModal, isMobileModal } = useAppSelector(
    (state) => state.portfolio
  );
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isLarge = useMediaQuery('(min-width: 1440px)');
  const dispatch = useAppDispatch();

  return (
    <section
      id="about"
      className={`${
        isDark ? 'bg-dark-about' : 'bg-about'
      } bg-no-repeat bg-cover flex items-center justify-center ${isDesktop ? 'py-64' : 'py-48'}`}
    >
      <article className="flex flex-col justify-center items-center w-full h-full">
        {isMobileModal ? (
          <></>
        ) : (
          <motion.div
            className={`text-6xl font-aileron font-semibold ${
              isDark ? 'text-metallic' : 'text-white'
            } mb-10 `}
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1 className="italic">About Me</h1>
          </motion.div>
        )}
        {isDesktop ? (
          <div className="flex flex-row justify-center items-center w-4/6 h-full mt-10">
            <motion.div
              className={`flex flex-col justify-center items-center w-4/6  h-[600px] ${
                isDark ? 'bg-light-beige' : 'bg-metallic'
              } mx-auto rounded-tl-lg rounded-bl-lg p-6 lg:p-10 text-center text-2xl font-bold text-navy-blue font-playfair`}
              variants={{
                hidden: { opacity: 0, x: -200 },
                show: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {isModal ? (
                <div className="flex flex-col ">
                  <div className="bigscreen:text-base lg:text-sm text-xs font-playfair font-bold widescreen:p-10 p-4">
                    <p>
                      Over the course of three months, I dedicated myself to
                      honing my skills and mastering the MERN (MongoDB, Express,
                      React, Node.js) stack. Through countless hours of
                      self-study and hands-on projects, I have developed a
                      strong foundation in building robust and scalable web
                      applications.
                    </p>
                    <p className="py-4">
                      When it comes to front-end development, I rely on
                      TypeScript and React as my go-to tools. The combination of
                      these technologies empowers me to create dynamic and
                      interactive user interfaces with ease. To boost my
                      development workflow, I leverage Vite.js as my build tool,
                      allowing me to deliver performant applications quickly and
                      efficiently.
                    </p>
                    <p className="mb-2">
                      Furthermore, I have a deep understanding of the importance
                      of effective state management in complex applications.
                      That's why I embrace Redux Toolkit, a powerful library
                      that simplifies state management and helps me maintain a
                      well-structured codebase.
                    </p>
                    <p className="mb-2">
                      I take pride in my ability to tackle challenges head-on
                      and find innovative solutions. With every project, I
                      strive to push the boundaries of what's possible and
                      deliver exceptional results.
                    </p>
                    <p>
                      Thank you for visiting my website, and I{' '}
                      <span className="text-bright-orange">
                        look forward to connecting with you soon!
                      </span>
                    </p>
                    <button
                      onClick={() => dispatch(setIsModal())}
                      className="p-2 bg-bright-orange w-1/2 rounded-md text-lg mt-4 hover:opacity-75  duration-300 font-aileron font-semibold"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <motion.div
                  className="flex flex-col justify-center items-center text-center"
                  variants={{
                    hidden: {
                      opacity: 0,
                    },
                    show: {
                      opacity: 1,
                    },
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  initial="hidden"
                  whileInView="show"
                >
                  <p className="mb-2 text-2xl widescreen:text-4xl">
                    <span className="underline underline-offset-8 decoration-sky-blue">
                      My name
                    </span>{' '}
                    is{' '}
                    <span
                      className={`${
                        isDark ? 'text-dark-accent' : 'text-bright-orange'
                      }`}
                    >
                      Sergej Japundža
                    </span>
                  </p>
                  <p className="p-10 lg:text-2xl text-lg">
                    I'm a passionate self-taught MERN stack developer hailing
                    from Sremska Mitrovica, Serbia. At the age of 22, I have
                    already embarked on an exciting journey in the world of web
                    development.
                  </p>
                  <button
                    className="text-accent-blue flex justify-center items-center hover:text-bright-orange group"
                    onClick={() => dispatch(setIsModal())}
                  >
                    Learn more about me{' '}
                    <span className="group-hover:rotate-90 duration-300 ml-1">
                      <GoChevronRight size={40} />
                    </span>
                  </button>
                  <div className="w-1/2 flex py-10 text-center text-xl ">
                    <div className="w-1/2 bg-navy-blue h-10 flex justify-between text-center text-base widescreen:text-lg text-metallic items-center hover:opacity-90 duration-300">
                      <a
                        className="mx-auto font-playfair font-light widescreen:w-full"
                        href="https://github.com/japundzasergej/my-website"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {isLarge ? 'Source Code' : 'Code'}
                      </a>
                      <BsCodeSlash
                        size={28}
                        className="text-metallic mr-1 my-auto"
                      />
                    </div>
                    <div className="w-1/2 bg-bright-orange h-10 flex text-center text-base bigscreen:text-lg text-white items-center hover:opacity-90 duration-300 text-ellipsis">
                      <a
                        className="mx-auto font-playfair font-light widescreen:w-full"
                        href="/cv.pdf"
                        download={true}
                      >
                        CV
                      </a>
                      <FaRegFilePdf
                        size={28}
                        className="text-metallic mr-1 my-auto"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className={`flex flex-col justify-center items-center w-2/6 h-[600px] ${
                isDark ? 'bg-blue-accent' : 'bg-sky-blue'
              } mx-auto rounded-tr-lg rounded-br-lg`}
              variants={{
                hidden: { opacity: 0, x: 250 },
                show: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.5, delay: 1.4 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div
                className={`flex flex-col justify-center text-center items-center p-4 font-playfair font-semibold ${
                  isDark ? 'text-light-beige' : 'text-navy-blue'
                }`}
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.5, delay: 1.8 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <p className="widescreen:text-4xl text-2xl mb-2">
                  Check out my{' '}
                  <span
                    className={`${
                      isDark ? 'text-navy-blue' : 'text-bright-orange'
                    }`}
                  >
                    blog
                  </span>
                  !
                </p>
                <p className="widescreen:text-2xl text-xl widescreen:py-28 widescreen:px-14 py-12 px-6">
                  There you can find the making-of-process of all of my
                  projects.
                </p>
                <a
                  className={`lg:text-2xl text-lg flex justify-center items-center group hover:${
                    isDark ? 'text-navy-blue' : 'text-bright-orange'
                  } duration-300`}
                  href="#"
                >
                  Click here{' '}
                  <span className="my-auto group-hover:rotate-90 duration-300">
                    <GoChevronRight size={40} />
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        ) : (
          <article className="w-screen flex justify-center items-center mt-10 ">
            {isMobileModal ? (
              <div className="bg-metallic w-5/6 flex flex-col justify-center text-center items-center rounded-md shadow-md font-semibold text-navy-blue font-playfair h-[800px] text-sm sm:text-lg md:text-xl p-10">
                <div>
                  <p>
                    Over the course of three months, I dedicated myself to
                    honing my skills and mastering the MERN (MongoDB, Express,
                    React, Node.js) stack. Through countless hours of self-study
                    and hands-on projects, I have developed a strong foundation
                    in building robust and scalable web applications.
                  </p>
                  <p>
                    When it comes to front-end development, I rely on TypeScript
                    and React as my go-to tools. The combination of these
                    technologies empowers me to create dynamic and interactive
                    user interfaces with ease. To boost my development workflow,
                    I leverage Vite.js as my build tool, allowing me to deliver
                    performant applications quickly and efficiently.
                  </p>
                  <p>
                    Furthermore, I have a deep understanding of the importance
                    of effective state management in complex applications.
                    That's why I embrace Redux Toolkit, a powerful library that
                    simplifies state management and helps me maintain a
                    well-structured codebase.
                  </p>
                  <p>
                    I take pride in my ability to tackle challenges head-on and
                    find innovative solutions. With every project, I strive to
                    push the boundaries of what's possible and deliver
                    exceptional results.
                  </p>
                  <p>
                    Thank you for visiting my website, and I{' '}
                    <span className="text-bright-orange">
                      look forward to connecting with you soon!
                    </span>
                  </p>
                  <button
                    onClick={() => dispatch(setIsMobileModal())}
                    className="p-2 bg-bright-orange w-1/2 rounded-md md:text-2xl text-xl mt-12 hover:opacity-75  duration-300 font-aileron font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <motion.div
                className="bg-metallic w-5/6 flex flex-col justify-center text-center items-center md:p-24 sm:p-14 p-10 rounded-md shadow-md font-semibold text-navy-blue font-playfair"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <p className="pb-4 md:text-5xl text-3xl ">
                  <span className="underline underline-offset-8 decoration-sky-blue">
                    My name
                  </span>{' '}
                  is{' '}
                  <span
                    className={`${
                      isDark ? 'text-dark-accent' : 'text-bright-orange'
                    }`}
                  >
                    Sergej Japundža
                  </span>
                </p>
                <p className="text-xl sm:text-2xl py-2">
                  I'm a passionate self-taught MERN stack developer hailing from
                  Sremska Mitrovica, Serbia. At the age of 23, I have already
                  embarked on an exciting journey in the world of web
                  development.
                </p>
                <div className="flex text-xl md:text-2xl mt-4">
                  <button
                    className="text-accent-blue flex justify-center items-center hover:text-bright-orange group"
                    onClick={() => dispatch(setIsMobileModal())}
                  >
                    Learn more{' '}
                    <span className="group-hover:rotate-90 duration-300 ml-1 mr-2">
                      <GoChevronRight size={25} />
                    </span>
                  </button>
                  <a
                    className="text-accent-blue flex justify-center items-center hover:text-bright-orange group"
                    href="#"
                  >
                    My Blog{' '}
                    <span className="group-hover:rotate-90 duration-300 ml-1">
                      <GoChevronRight size={25} />
                    </span>
                  </a>
                </div>
                <div className="w-full flex pt-10 text-center">
                  <div className="w-1/2 bg-navy-blue h-10 flex justify-between text-center md:text-xl text-lg text-metallic items-center hover:opacity-90 duration-300">
                    <a
                      className="mx-auto font-playfair font-light w-full"
                      href="https://github.com/japundzasergej/my-website"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                    <BsCodeSlash
                      size={28}
                      className="text-metallic mr-1 my-auto"
                    />
                  </div>
                  <div className="w-1/2 bg-bright-orange h-10 flex text-center md:text-xl text-lg text-white items-center hover:opacity-90 duration-300 ">
                    <a
                      className="mx-auto font-playfair font-light w-full"
                      href="/cv.pdf"
                      download={true}
                    >
                      CV
                    </a>
                    <FaRegFilePdf
                      size={28}
                      className="text-metallic mr-1 my-auto"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </article>
        )}
      </article>
    </section>
  );
};
export default About;
