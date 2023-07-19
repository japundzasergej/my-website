import { memo } from 'react';

import { useAppSelector} from '../hooks/useTypedHooks';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Page = { page: string };

const Link = ({ page }: Page) => {
  const selectedPage = useAppSelector((state) => state.portfolio.selectedPage);

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      transition={{ duration: 0.2, ease: 'easeIn' }}
    >
      <AnchorLink
        href={`#${page}`}
        className={`${
          selectedPage === page ? 'text-[#FDCC49]' : ''
        } relative before:absolute ${page} before:content-start before:-left-9 before:top-0`}
      >
        {page.toUpperCase()}
      </AnchorLink>
    </motion.div>
  );
};

export default memo(Link);
