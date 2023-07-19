import { motion } from 'framer-motion';
import { useAppSelector } from '../hooks/useTypedHooks';

import Line from '../components/Line';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

type ProjectType = { title: string };

const Project = ({ title }: ProjectType) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center lg:p-16 text-navy-blue lg:text-lg text-xs`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="lg:text-2xl text-lg font-playfair mt-20">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
        <div className="flex justify-center mt-10 font-aileron font-bold lg:text-base text-sm pb-14">
          <a
            href="#"
            className="bg-navy-blue p-2 w-1/2 rounded-tl-md rounded-bl-md text-metallic hover:scale-95 duration-200"
          >
            Demo
          </a>
          <a
            href="#"
            className="bg-sky-blue p-2 w-1/2 rounded-tr-md rounded-br-md hover:scale-95 duration-200 text-navy-blue"
          >
            Code
          </a>
        </div>
      </div>
      <img src={`/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Portfolio = () => {
  const isDark = useAppSelector((state) => state.portfolio.isDark);

  return (
    <section
      id="portfolio"
      className={`py-48 ${isDark ? 'bg-dark-bg' : 'bg-bright-orange'} `}
    >
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p
            className={`font-aileron font-semibold text-6xl ${
              isDark ? 'text-metallic' : 'text-white italic'
            } `}
          >
            Portfolio
          </p>
          <div className="flex justify-center mt-5"></div>
        </div>
        <p
          className={`pt-4 text-3xl ${
            isDark ? 'text-navy-blue' : 'text-white'
          } font-semibold font-aileron`}
        >
          Coming soon!
        </p>
        <Line
          custom={`w-1/2 ${
            isDark ? 'bg-gradient-rainblue' : 'bg-gradient-mirage'
          } h-1 mx-auto mt-6 mb-10`}
        />
      </motion.div>

      <div className="flex justify-center ">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-sky-blue
              max-w-[400px] max-h-[400px] widescreen:text-3xl text-xl font-playfair font-light text-navy-blue mx-auto"
          >
            <p>
              <span className="text-blue-accent">elegant</span> user interfaces
            </p>
          </div>
          {[1, 2, 3, 4].map((item) => (
            <Project title="To Be Announced" key={item}></Project>
          ))}

          <div
            className="flex justify-center text-center items-center p-10 bg-metallic
              max-w-[400px] max-h-[400px] widescreen:text-2xl text-lg font-playfair font-light text-navy-blue mx-auto  widescreen:mt-0 mt-10"
          >
            <p>
              streamlined user{' '}
              <span className="text-bright-orange">experience</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
