import { useAppSelector } from '../hooks/useTypedHooks';

type Option = { option: boolean; isMobile: boolean };

const Para = ({ option, isMobile }: Option) => {
  const isDark = useAppSelector((state) => state.portfolio.isDark);

  return (
    <>
      {option ? (
        <>
          <p
            className={`${
              isMobile
                ? 'py-4 md:text-5xl text-3xl'
                : 'mb-2 text-2xl widescreen:text-4xl'
            }`}
          >
            <span className="underline underline-offset-8 decoration-sky-blue">
              My name
            </span>{' '}
            is{' '}
            <span
              className={`${
                isDark ? 'text-dark-accent' : 'text-bright-orange'
              }`}
            >
              Sergej Japundža
            </span>
          </p>
          <p
            className={`${
              isMobile
                ? 'text-xl sm:text-2xl md:py-12 py-6'
                : 'p-10 lg:text-2xl text-lg'
            }`}
          >
            I'm a passionate self-taught MERN stack developer hailing from
            Sremska Mitrovica, Serbia. At the age of 23, I have already embarked
            on an exciting journey in the world of web development.
          </p>
        </>
      ) : (
        <>
          <p>
            Over the course of four months, I dedicated myself to honing my
            skills and mastering the MERN (MongoDB, Express, React, Node.js)
            stack. Through countless hours of self-study and hands-on projects,
            I have developed a strong foundation in building robust and scalable
            web applications.
          </p>
          <p className="py-4">
            When it comes to front-end development, I rely on React as my go-to
            tool. To boost my development workflow, I leverage Vite.js as my
            build tool, allowing me to deliver performant applications quickly
            and efficiently. The combination of these technologies empowers me
            to create dynamic and interactive user interfaces with ease.
          </p>
          <p className="mb-2">
            Furthermore, I have a deep understanding of the importance of
            effective state management in complex applications. That's why I
            embrace Redux Toolkit, a powerful library that simplifies state
            management and helps me maintain a well-structured codebase.
          </p>
          <p className="mb-2">
            I take pride in my ability to tackle challenges head-on and find
            innovative solutions. With every project, I strive to push the
            boundaries of what's possible and deliver exceptional results.
          </p>
          <p>
            Thank you for visiting my website, and I{' '}
            <span className="text-bright-orange">
              look forward to connecting with you soon!
            </span>
          </p>
        </>
      )}
    </>
  );
};
export default Para;
