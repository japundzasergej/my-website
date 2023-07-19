import Navbar from './scenes/Navbar';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/useTypedHooks';
import { setIsTopOfPage, setSelectedPage } from './features/portfolioSlice';
import Landing from './scenes/Landing';
import SelectedPages from './components/SelectedPages';
import About from './scenes/About';
import useMediaQuery from './hooks/useMediaQuery';
import Line from './components/Line';
import Portfolio from './scenes/Portfolio';
import Experience from './scenes/Experience';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';

const App = () => {
  const dispatch = useAppDispatch();
  const isLarge = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        dispatch(setIsTopOfPage(true));
        dispatch(setSelectedPage('home'));
      }
      if (window.scrollY !== 0) {
        dispatch(setIsTopOfPage(false));
      }
      if (window.scrollY > 700) {
        dispatch(setSelectedPage('about'));
      }
      if (window.scrollY >= 2000) {
        dispatch(setSelectedPage('portfolio'));
      }
      if (window.scrollY >= 3000) {
        dispatch(setSelectedPage('experience'));
      }
      if (window.scrollY >= 4500) {
        dispatch(setSelectedPage('contact'));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='w-screen'>
        <Landing />
        {isLarge ? <SelectedPages /> : <></>}
        <Line custom="w-full bg-gradient-mirage p-2" />
        <About />
        <Line custom="w-full bg-gradient-mirage p-2" />
        <Portfolio />
        <Line custom="w-full bg-gradient-mirage p-2" />
        <Experience />
        <Line custom="w-full bg-gradient-mirage p-2" />
        <Contact />
      </main>
      <footer className='w-screen'>
        <Footer/>
      </footer>
    </>
  );
};
export default App;
