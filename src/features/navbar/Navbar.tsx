import { useAppDispatch, useAppSelector } from '../../hooks/useTypedHooks';
import { setIsMenuOpen, setIsDark } from '../portfolioSlice';
import useMediaQuery from '../../hooks/useMediaQuery';
import Link from '../../components/Link';

import lightLogo from '../../assets/light.ico';
import darkLogo from '../../assets/dark.ico';
import mLightLogo from '../../assets/m-light.png';
import mDarkLogo from '../../assets/m-dark.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import nightMode from '../../assets/night-mode.png';
import lNightMode from '../../assets/l-night-mode.png';
import mNightMode from '../../assets/m-night-mode.png';
import mLightMode from '../../assets/m-l-night-mode.png';

import { motion } from 'framer-motion';

import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const { isMenuOpen, isDark, isTopOfPage } = useAppSelector(
    (state) => state.portfolio
  );
  const links = useAppSelector((state) => state.nav);
  const mobileLinks = useAppSelector((state) => state.mobileNav);

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

  
  const renderedLinks = links.map(({ id, link }) => (
    <div
      key={id}
      className="text-metallic font-semibold border-r-2 px-4 border-sky-blue  widescreen:text-xl text-md"
    >
      <Link page={link}></Link>
    </div>
  ));

  const renderedMobileLinks = mobileLinks.map(({ id, link, title }) => (
    <motion.div
      key={id}
      className={`text-center relative md:text-7xl sm:text-6xl text-4xl text-black py-5 font-bold ${link} before:absolute md:before:-left-28 before:-left-20 before:top-10 py-8 text-metallic border-b-2 flex justify-center border-sky-blue font-noto cursor-pointer`}
      variants={item}
      whileHover={{ scale: 1.1 }}
    >
      <AnchorLink href={`#${title}`} onClick={() => dispatch(setIsMenuOpen())}>
        {title.toUpperCase()}
      </AnchorLink>
    </motion.div>
  ));

  const dispatch = useAppDispatch();

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
              isDesktop
                ? `${isDark ? darkLogo : lightLogo}`
                : `${isDark ? mDarkLogo : mLightLogo}`
            }
            alt="logo"
            className="newScreen:scale-100 scale-50"
          />
        </div>
        {isDesktop ? (
          <div className="flex widescreen:gap-12 gap-8 md:mx-auto py-6 lg:text-lg text-sm font-noto">
            {renderedLinks}
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
                scale: 0.6,
              }}
              transition={{ duration: 0.12 }}
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
            transition={{ duration: 0.05, when: 'beforeChildren' }}
          >
            <div className="absolute top-2 right-4 px-4 py-2 cursor-pointer z-30">
              <AiOutlineClose
                size={60}
                onClick={() => dispatch(setIsMenuOpen())}
                className={`${isDark ? 'text-blue-accent' : 'text-navy-blue'}`}
              />
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="z-40"
            >
              {renderedMobileLinks}
            </motion.div>
            <div className="bg-abstract absolute h-full w-full bg-cover z-0 "></div>
          </motion.div>
        )}
      </article>
    </nav>
  );
};
export default Navbar;
