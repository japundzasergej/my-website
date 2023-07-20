import Link from '../components/Link';

import lightLogo from '../assets/light.ico';
import darkLogo from '../assets/dark.ico';
import mLightLogo from '../assets/m-light.png';
import mDarkLogo from '../assets/m-dark.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import nightMode from '../assets/night-mode.png';
import lNightMode from '../assets/l-night-mode.png';
import mNightMode from '../assets/m-night-mode.png';
import mLightMode from '../assets/m-l-night-mode.png';

import { motion } from 'framer-motion';

import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

import { useAppDispatch, useAppSelector } from '../hooks/useTypedHooks';
import { setIsMenuOpen, setIsDark } from '../features/portfolioSlice';
import useMediaQuery from '../hooks/useMediaQuery';

type Links = { id: number; link: string };
type Links2 = { id: number; link: string; title: string };

const Navbar = () => {
  const links: Links[] = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ];
  const links2: Links2[] = [
    { id: 1, link: 'm-home', title: 'home' },
    { id: 2, link: 'm-about', title: 'about' },
    { id: 3, link: 'm-portfolio', title: 'portfolio' },
    { id: 4, link: 'm-experience', title: 'experience' },
    { id: 5, link: 'm-contact', title: 'contact' },
  ];
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.2,
      },
    },
  };

  const item = {
    hidden: { x: -800 },
    show: {
      x: 0,
    },
  };

  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const dispatch = useAppDispatch();

  const { isMenuOpen, isDark, isTopOfPage } = useAppSelector(
    (state) => state.portfolio
  );

  return (
    <nav
      className={`w-full ${
        !isTopOfPage || !isDesktop
          ? `${isDark ? 'bg-dark-grey' : 'bg-navy-blue'}`
          : ''
      } ${isDesktop ? 'h-20' : 'h-32'} fixed z-40`}
    >
      <article className="flex justify-between h-full w-full">
        <div className=" flex justify-center items-center mx-auto">
          <img
            src={
              isDark
                ? `${isDesktop ? darkLogo : mDarkLogo}`
                : `${isDesktop ? lightLogo : mLightLogo}`
            }
            alt="logo"
            className='newScreen:scale-100 scale-50'
          />
        </div>
        {isDesktop ? (
          <div className="flex widescreen:gap-12 gap-8 md:mx-auto py-6 lg:text-lg text-sm font-noto">
            {links.map(({ id, link }) => (
              <div
                key={id}
                className="text-metallic font-semibold border-r-2 px-4 border-sky-blue  widescreen:text-xl text-md"
              >
                <Link page={link}></Link>
              </div>
            ))}
            <div className="ml-5 group">
              <button
                className={`${
                  isDark ? 'toggle' : 'off '
                } relative before:absolute before:content-start before:-left-9 before:top-0`}
                onClick={() => dispatch(setIsDark())}
              >
                <img src={isDark ? nightMode : lNightMode} alt="night mode" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center mx-auto">
              <button
                className={`${
                  isDark ? 'm-toggle' : 'm-off '
                } relative before:absolute before:content-start before:-left-20 before:top-0 `}
                onClick={() => dispatch(setIsDark())}
              >
                <img src={isDark ? mLightMode : mNightMode} alt="night mode" />
              </button>
            </div>
            <motion.div
              className="flex items-center justify-center cursor-pointer mx-auto"
              whileTap={{
                rotate: 360,
              }}
              transition={{ duration: 0.2 }}
            >
              <RxHamburgerMenu
                size={60}
                onClick={() => dispatch(setIsMenuOpen())}
                className="text-metallic"
              />
            </motion.div>
          </>
        )}
        {!isDesktop && isMenuOpen && (
          <motion.div
            className={`fixed top-0 right-0 ${
              isDark ? 'bg-dark-grey' : 'bg-bright-orange'
            } w-full h-screen flex flex-col justify-center items-center gap-4`}
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, when: 'beforeChildren' }}
          >
            <div className="absolute top-2 right-4 px-4 py-2 cursor-pointer z-30">
              <AiOutlineClose
                size={60}
                onClick={() => dispatch(setIsMenuOpen())}
                className={`${isDark ? 'text-white' : 'text-navy-blue'}`}
              />
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="z-40"
            >
              {links2.map(({ id, link, title }) => (
                <motion.div
                  key={id}
                  className={`text-center relative md:text-7xl sm:text-6xl text-4xl text-black py-5 font-black ${link} before:absolute md:before:-left-28 before:-left-20 before:top-10 py-8 ${
                    isDark ? 'text-white' : 'text-navy-blue'
                  } border-b-2 flex justify-center border-sky-blue font-noto cursor-pointer`}
                  variants={item}
                  whileHover={{ scale: 1.1 }}
                >
                  <AnchorLink
                    href={`#${title}`}
                    onClick={() => dispatch(setIsMenuOpen())}
                  >
                    {title.toUpperCase()}
                  </AnchorLink>
                </motion.div>
              ))}
            </motion.div>
            <div className="bg-abstract absolute h-full w-full bg-cover z-0"></div>
          </motion.div>
        )}
      </article>
    </nav>
  );
};
export default Navbar;
