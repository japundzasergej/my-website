import Line from '../components/Line';
import useMediaQuery from '../hooks/useMediaQuery';
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
    { id: 9, src: 'nodejs', style: 'shadow-green-600' },
    { id: 10, src: 'mongodb', style: 'shadow-green-300' },
    { id: 11, src: 'express', style: 'shadow-yellow-accent' },
    { id: 12, src: 'chatgpt', style: 'shadow-green-300' },
    { id: 13, src: 'github', style: 'shadow-blue-accent' },
  ];

  const isDesktop = useMediaQuery('(min-width: 1040px)');

  return (
    <section
      id="experience"
      className={`${isDesktop ? 'py-64' : 'py-48'} ${isDark ? 'bg-dark-bg' : 'bg-bright-orange'}  `}
    >
      <article className="flex flex-col justify-center items-center">
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
          <p className="newScreen:text-4xl text-3xl pt-20 pb-10 px-10">
            These are the technologies I'm comfortable working with:{' '}
          </p>
          <Line
            custom={`w-2/6 h-2 ${
              isDark ? 'bg-gradient-rainblue' : 'bg-gradient-mirage'
            } mx-auto mb-20`}
          />
        </motion.div>
        <div className="md:p-20 p-14 z-30 bg-metallic widescreen:w-4/6 w-5/6 rounded-lg font-aileron font-bold text-navy-blue flex justify-center items-center">
          <motion.div
            className="grid newScreen:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-10 md:gap-x-36 gap-x-20 items-center"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {technologyGrpOne.map(({ id, src, style }) => (
              <motion.div
                className="text-center flex flex-col justify-center items-center max-w-[200px]"
                key={id}
                variants={techVariant}
              >
                <div
                  className={`shadow-md ${style} md:p-10 p-6 hover:opacity-70 hover:scale-105 duration-500`}
                >
                  <img
                    src={`/${src}.png`}
                    alt={src}
                    className="w-16 min-w-[64px] "
                  />
                </div>
                <p className="text-xl md:pt-10 md:py-0 py-4">
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
