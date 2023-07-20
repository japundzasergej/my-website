import { motion } from 'framer-motion';

import { useAppDispatch, useAppSelector } from '../hooks/useTypedHooks';
import { setSelectedPage } from '../features/portfolioSlice';

import { GoChevronRight } from 'react-icons/go';
import useMediaQuery from '../hooks/useMediaQuery';
import newHero from '../assets/newLanding.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialMedia from '../components/SocialMedia';

const Landing = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isDark = useAppSelector((state) => state.portfolio.isDark);
  const dispatch = useAppDispatch();

  return (
    <section
      id="home"
      className={`lg:flex lg:justify-start justify-center items-center ${isDesktop ? 'py-64' : 'py-24'} ${
        isDark ? 'bg-dark-bg' : 'bg-bright-orange'
      } bg-cover bg-no-repeat`}
    >
      {isDesktop ? (
        <motion.div
          className="z-0 absolute lg:-translate-y-[160px] widescreen:-translate-y-[240px]"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src={newHero} alt="hero" />
        </motion.div>
      ) : (
        <img src={newHero} alt="hero" className="w-screen max-h-[440px] sm:max-h-[540px] md:max-h-[800px]" />
      )}
      <motion.div
        className="z-30 mt-40 ml-4 widescreen:mt-32 widescreen:ml-12 text-metallic"
        variants={{
          hidden: { opacity: 0, x: -50 },
          show: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="widescreen:text-6xl sm:text-5xl text-4xl text-center lg:text-start font-semibold max-widescreen:xl">
          Hi, my name is{' '}
          <span className={`${isDark ? 'text-dark-accent' : 'text-navy-blue'}`}>
            Sergej
          </span>{' '}
          <br /> and I'm a self taught <br />{' '}
          <span className="text-blue-accent">MERN</span> stack developer.
        </p>
        <motion.div
          className="mt-5 flex justify-center lg:justify-start lg:text-2xl text-xl "
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <AnchorLink
            href="#contact"
            className="bg-gradient-mirage text-[#FFFFF0] rounded-md py-3 px-4  widescreen:px-7 font-extrabold
               hover:text-navy-blue transition duration-500 flex group text-2xl"
            onClick={() => dispatch(setSelectedPage('contact'))}
          >
            Let's get in touch!{' '}
            <span className="group-hover:rotate-90 duration-300 ml-1">
              <GoChevronRight size={30} />
            </span>
          </AnchorLink>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <SocialMedia size={60} />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Landing;
