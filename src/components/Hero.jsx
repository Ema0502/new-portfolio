import { styles } from "../styles";
import programmingWallpaper from "../assets/img/MyWallpaper.jpg";

const Hero = () => {
  return (
    <section
      className={`relative w-full mx-auto flex justify-center items-center p-2 pt-20`}
    >
      <div
        className={`max-w-7xl ${styles.paddingX} flex flex-col items-center gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white pt-12`}>
            Hola, soy <span className="text-[#00BFFF]">José</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 p-2 pb-10`}>
            Desarrollo servidores, <br className="sm:block hidden" />
            interfaces y aplicaciones web
          </p>
          <img
            src={programmingWallpaper}
            alt="Programming Icon"
            style={{ borderRadius: "10%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
