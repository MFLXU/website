import fb from "../utils/fb.png";
import ig from "../utils/ig.png";
import lk from "../utils/in.png";
const Footer = () => {
  return (
    <section className="py-10 mt-20">
      <div className="container flex-col flex items-center justify-center">
        <div className="flex items-center justify-center gap-4">
          <p className="text-xl font-medium">© Debug Club Biskra | 2022 </p>
          <div className="flex items-center justify-center">
            <a className="hover:-translate-y-0.5 duration-300" href="/">
              <img className="w-8" src={fb} alt="" />
            </a>
            <a className="hover:-translate-y-0.5 duration-300" href="/">
              <img className="w-8" src={ig} alt="" />
            </a>
            <a className="hover:-translate-y-0.5 duration-300" href="/">
              <img className="w-8" src={lk} alt="" />
            </a>
          </div>
        </div>
        <p>
          made with 💜 by{" "}
          <a
            className="underline font-extrabold hover:text-dbc duration-300"
            href="https://louayekazar.com/"
            target="_blank"
          >
            Louaye Kazar
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
