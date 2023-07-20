import { AiFillLinkedin as Linkedin } from 'react-icons/ai';
import { VscGithub as Github } from 'react-icons/vsc';

type Size = { size: number | string };

const SocialMedia = ({ size }: Size) => {
  return (
    <div className="flex justify-center lg:justify-start lg:my-10 my-6 gap-7">
      <a
        href="https://github.com/japundzasergej"
        rel="noreferrer"
        target="_blank"
      >
        <Github size={size} className="hover:scale-105 duration-500" />
      </a>
      <a
        href="https://linkedin.com/in/sergej-japundza-536912268/"
        rel="noreferrer"
        target="_blank"
      >
        <Linkedin size={size} className="hover:scale-105 duration-500" />
      </a>
    </div>
  );
};
export default SocialMedia;
