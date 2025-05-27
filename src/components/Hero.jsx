import { styles } from "../styles";
import programmingWallpaper from "../assets/img/MyWallpaper.jpg";

const   Hero = () => {
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
            Me especializo en el desarrollo de servidores, interfaces y aplicaciones web, creando soluciones tecnológicas robustas y escalables.
          </p>
          <img
            src={programmingWallpaper}
            alt="Programming Icon"
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
