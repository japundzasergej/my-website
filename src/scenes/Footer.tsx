import SocialMedia from '../components/SocialMedia';

const Footer = () => {
  return (
    <section className="w-full min-h-20 bg-light-beige">
      <article className="flex justify-between items-center text-sm px-2 py-4">
        <div className="md:mx-auto flex flex-col md:text-base text-xs px-4">
          <span>
            <a
              href="https://www.flaticon.com/free-icons/web-development"
              title="web development icons"
            >
              Web development icons created by Freepik - Flaticon
            </a>
          </span>
          <span>
            <a
              href="https://www.flaticon.com/free-icons/dark"
              title="dark icons"
            >
              Dark icons created by adriansyah - Flaticon
            </a>
          </span>
          <span>
            <a href="https://pngtree.com/freepng/abstract-gradient-wave-lines-clipart_8816453.html?sol=downref&id=bef">
              abstract PNG Designed By Orang Biasa
            </a>
          </span>
          <span>
            <a href="https://pngtree.com/freepng/abstract-modern-blue-purple-wave-background_5508041.html?sol=downref&id=bef">
              backdrop PNG Designed By 4ziz from
            </a>
          </span>
        </div>
        <SocialMedia />
        <div className="md:mx-auto text-center font-semibold md:text-base text-sm p-2">
          <p>Sergej Japundža</p>
          <p>Sremska Mitrovica</p>
          <p>22000</p>
        </div>
      </article>
    </section>
  );
};
export default Footer;
