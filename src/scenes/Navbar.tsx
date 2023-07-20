import Link from '../components/Link';

import lightLogo from '../assets/light.ico';
import darkLogo from '../assets/dark.ico';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import nightMode from '../assets/night-mode.png';
import lNightMode from '../assets/l-night-mode.png';
import mNightMode from '../assets/m-night-mode.png'
import mLightMode from '../assets/m-l-night-mode.png'

import { motion } from 'framer-motion';

import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

import { useAppDispatch, useAppSelector } from '../hooks/useTypedHooks';
import {
  setIsMenuOpen,
  setIsDark,
} from '../features/portfolioSlice';
import useMediaQuery from '../hooks/useMediaQuery';


type Links = { id: number; link: string };


const Navbar = () => {
  const links: Links[] = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ];
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        duration: 0.2,
      },
    },
  };

  const item = {
    hidden: { x: -600 },
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
          <img src={isDark ? darkLogo : lightLogo} alt="logo"/>
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
                } relative before:absolute before:content-start before:-right-20 before:top-0 `}
                onClick={() => dispatch(setIsDark())}
              >
                <img src={isDark ? mLightMode : mNightMode} alt="night mode"  />
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
            } w-full h-full flex flex-col justify-center items-center gap-4`}
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, when: 'beforeChildren' }}
          >
            <div className="absolute top-0 right-0 px-4 py-2 cursor-pointer">
              <AiOutlineClose
                size={40}
                onClick={() => dispatch(setIsMenuOpen())}
                className="text-metallic"
              />
            </div>
            <motion.div
              className={`relative mb-10 mt-36 px-10 py-20 min-w-[300px] ${
                isDark ? 'bg-light-beige' : 'bg-navy-blue'
              } w-2/6 mx-auto text-center shadow-md shadow-black ${
                isDark ? 'darkLogo' : 'lightLogo'
              } before:absolute before:-top-72 before:-left-20 before:p-2 before:scale-25 before:-translate-x-8 rounded-xl`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p
                className={`text-5xl ${
                  isDark ? 'text-navy-blue' : 'text-metallic shadow-sm'
                } font-noto font-semibold`}
              >
                Sergej{' '}
                <div className="py-4">
                  <span
                    className={`${
                      isDark ? 'text-blue-accent' : 'text-bright-orange'
                    }`}
                  >
                    Japundža
                  </span>
                </div>
              </p>
            </motion.div>
            <motion.div variants={container} initial="hidden" animate="show">
              {links.map(({ id, link }) => (
                <motion.div
                  key={id}
                  className={`text-left min-w-[200px] relative text-3xl text-black py-5 font-semibold ${link} before:absolute before:-left-8 py-2 text-white border-b-2 flex justify-center border-sky-blue font-noto cursor-pointer`}
                  variants={item}
                  whileHover={{ scale: 1.1 }}
                >
                  <AnchorLink href={`#${link}`} onClick={() => dispatch(setIsMenuOpen())}>{link.toUpperCase()}</AnchorLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </article>
    </nav>
  );
};
export default Navbar;
