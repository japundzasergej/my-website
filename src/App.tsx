import Navbar from './pages/Navbar';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/useTypedHooks';
import { setIsTopOfPage, setSelectedPage } from './features/portfolioSlice';
import Landing from './pages/Landing';
import SelectedPages from './components/SelectedPages';
import About from './pages/About';
import useMediaQuery from './hooks/useMediaQuery';
import Line from './components/Line';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

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
      if (window.scrollY >= 3400) {
        dispatch(setSelectedPage('experience'));
      }
      if (window.scrollY >= 5000) {
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
      <main className="w-screen">
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
        <Line custom="w-full bg-gradient-mirage p-2" />
      </main>
      <footer className="w-screen">
        <Footer />
      </footer>
    </>
  );
};
export default App;
