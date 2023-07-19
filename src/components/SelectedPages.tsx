import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useAppSelector} from '../hooks/useTypedHooks';

const SelectedPages = () => {
  const { isDark, selectedPage } = useAppSelector((state) => state.portfolio);

  const links = ['home', 'about', 'portfolio', 'experience', 'contact'];

  const selected = `relative ${
    isDark ? 'bg-navy-blue' : 'bg-blue-accent'
  } before:absolute before:rounded-full before:w-6 before:h-6 before:top-[-25%] before:right-[-25%] before:border-4 before:border-sky-blue`;

  return (
    <div className="fixed top-[60%] right-7 flex flex-col gap-6 z-40">
      {links.map((item) => (
        <AnchorLink
          className={`w-4 h-4 rounded-full ${
            selectedPage === item
              ? selected
              : `${isDark ? 'bg-navy-blue' : 'bg-blue-accent'}`
          }`}
          href={`#${item}`}
          key={item}
        />
      ))}
    </div>
  );
};
export default SelectedPages;
