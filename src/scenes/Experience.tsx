import Line from '../components/Line';
import { useAppSelector } from '../hooks/useTypedHooks';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const techVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const techVariant2 = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.6,
      duration: 0.6
    },
  },
};

const Experience = () => {
  const isDark = useAppSelector((state) => state.portfolio.isDark);

  const technologyGrpOne = [
    { id: 1, src: 'html', style: 'shadow-orange-400' },
    { id: 2, src: 'css', style: 'shadow-sky-blue' },
    { id: 3, src: 'js', style: 'shadow-yellow-accent' },
    { id: 4, src: 'react', style: 'shadow-blue-accent' },
    { id: 5, src: 'ts', style: 'shadow-blue-400' },
    { id: 6, src: 'tw', style: 'shadow-blue-600' },
    { id: 7, src: 'vite', style: 'shadow-pink-400' },
    { id: 8, src: 'redux', style: 'shadow-white' },
  ];

  const technologyGrpTwo = [
    { id: 1, src: 'nodejs', style: 'shadow-green-600' },
    { id: 2, src: 'mongodb', style: 'shadow-green-300' },
    { id: 3, src: 'express', style: 'shadow-yellow-accent' },
    { id: 4, src: 'chatgpt', style: 'shadow-green-300' },
    { id: 5, src: 'github', style: 'shadow-blue-accent' },
  ];

  return (
    <section
      id="experience"
      className={`py-48 ${isDark ? 'bg-dark-bg' : 'bg-bright-orange'}  `}
    >
      <article className="flex flex-col justify-center items-center relative">
        <motion.div
          className={`text-6xl font-aileron ${
            isDark ? 'text-metallic' : 'text-white'
          } font-semibold flex flex-col text-center z-30`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="italic">Experience</h1>
          <p className="text-3xl pt-20 pb-10">
            These are the technologies I'm comfortable working with:{' '}
          </p>
          <Line
            custom={`w-2/6 h-2 ${
              isDark ? 'bg-gradient-rainblue' : 'bg-gradient-mirage'
            } mx-auto mb-20`}
          />
        </motion.div>
        <div className="flex flex-col  md:p-20 p-8 text-center justify-center items-center z-30 bg-metallic w-5/6 bigscreen:w-11/12 rounded-lg font-aileron font-bold text-navy-blue ">
          <motion.div
            className="bigscreen:flex bigscreen:flex-row grid md:grid-cols-4 grid-cols-2 gap-x-10 "
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {technologyGrpOne.map(({ id, src, style }) => (
              <motion.div
                className="text-center shadow-navy-blue flex flex-col justify-center items-center"
                key={id}
                variants={techVariant}
              >
                <div
                  className={`shadow-md ${style} md:p-10 p-6 hover:opacity-70 hover:scale-105 duration-500`}
                >
                  <img
                    src={`/${src}.png`}
                    alt={src}
                    className="w-16 min-w-[38px] md:max-w-[38px] lg:max-w-[60px]"
                  />
                </div>
                <p className="text-xl md:pt-10 md:py-0 py-4">
                  {src.toUpperCase()}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="bigscreen:flex bigscreen:flex-row gap-x-10 md:mt-10 grid md:grid-cols-4 widescreen:grid-cols-5 grid-cols-2"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {technologyGrpTwo.map(({ id, src, style }) => (
              <motion.div
                className="text-center shadow-navy-blue flex flex-col justify-center items-center"
                key={id}
                variants={techVariant2}
              >
                <div
                  className={`shadow-md ${style} md:p-10 p-6 hover:opacity-70 hover:scale-105 duration-500 `}
                >
                  <img
                    src={`/${src}.png`}
                    alt={src}
                    className="w-16 md:max-w-[38px] lg:max-w-[64px] "
                  />
                </div>
                <p className="text-xl md:pt-10 py-4 md:py-0">
                  {src.toUpperCase()}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="bg-experience-wave lg:h-[1400px] md:h-[1000px] h-[600px] w-full bg-cover absolute"></div>
      </article>
    </section>
  );
};
export default Experience;
