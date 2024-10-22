import { useMediaQuery } from "react-responsive";
import logo from "../../utils/images/cimesvg.svg";

const Footer = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="px-4 grid lg:grid-cols-12 md:grid-cols-6 grid-cols-4 lg:gap-8 md:gap-6 gap-4 items-center min-h-[200px] bg-blueBackground">
      {!isTablet && <div></div>}
      {!isMobile ? (
        <>
          <img
            src={logo}
            alt="logo cimes"
            className="lg:col-span-2 h-auto min-w-[100px] max-w-[200px]"
          />
          <div></div>
          <div className="h-full py-5 flex flex-col justify-start items-start lg:col-span-3 md:col-span-2">
            <h1 className="mb-4 text-white lg:text-2xl md:text-xl text-lg font-bold font-feltTipRoman tracking-widest">
              Redes Sociales
            </h1>
            <div className="mb-1 flex cursor-pointer text-white hover:text-gray-200">
              <i className="mr-2 text-xl fa-brands fa-instagram" />
              <a
                href="https://www.instagram.com/cimes.silva/"
                target="_blank"
                rel="noreferrer"
                className="lg:text-base md:text-sm text-xs lg:font-bold font-humanist777 tracking-wider focus:text-gray-200 focus:outline-none"
              >
                @cimes.silva
              </a>
            </div>
            <div className="flex cursor-pointer text-white hover:text-gray-200">
              <i className="mr-2 text-xl fa-brands fa-facebook" />
              <a
                href="https://www.facebook.com/cimes.silvaehijos"
                target="_blank"
                rel="noreferrer"
                className="lg:text-base md:text-sm text-xs lg:font-bold font-humanist777 tracking-wider focus:text-gray-200 focus:outline-none"
              >
                @Cimes Silva
              </a>
            </div>
          </div>
          {!isTablet && <div></div>}
          <div className="h-full py-5 flex flex-col justify-start items-start lg:col-span-3 md:col-span-2">
            <h1 className="mb-4 text-white lg:text-2xl md:text-xl text-lg font-bold font-feltTipRoman tracking-widest">
              Contactanos
            </h1>
            <div className="mb-1 flex text-white">
              <i class="mr-2 text-lg fa-solid fa-house" />
              <p className="lg:text-base md:text-sm text-xs lg:font-bold font-humanist777">
              Calle 10 N° 1851, Mercedes, Buenos Aires
              </p>
            </div>
            <div className="mb-1 flex text-white">
              <i className="mr-2 text-lg fa-regular fa-clock" />
              <p className="lg:text-base md:text-sm text-xs lg:font-bold font-humanist777">
              Lu a Vie de  08:00 a 18:00 hs.
              </p>
            </div>
            <div className="mb-1 flex text-white">
              <i className="mr-2 text-lg fa-solid fa-envelope" />
              <p className="lg:text-base md:text-sm text-xs lg:font-bold font-humanist777">
              contacto@cimesmercedes.com.ar
              </p>
            </div>
            <div className="mb-1 flex text-white">
              <i className="mr-2 text-lg -rotate-90 fa-solid fa-phone" />
              <p className="lg:text-base md:text-sm text-xs lg:font-bold font-humanist777">
              (2324) 428880
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div></div>
          <div className="flex flex-col items-center col-span-2">
            <img
              src={logo}
              alt="logo cimes"
              className="col-span-2 mt-4 h-auto min-w-[100px] max-w-[200px]"
            />
            <div></div>
            <div className="h-full py-5 flex flex-col justify-start items-start">
              <h1 className="mb-4 text-white lg:text-2xl md:text-xl text-lg font-bold font-feltTipRoman tracking-widest">
                Redes Sociales
              </h1>
              <div className="mb-1 flex cursor-pointer text-white hover:text-gray-200">
                <i className="mr-2 text-xl fa-brands fa-instagram" />
                <a
                  href="https://www.instagram.com/cimes.silva/"
                  target="_blank"
                  rel="noreferrer"
                  className="lg:text-base md:text-sm text-xs lg:font-bold font-humanist777 tracking-wider text-nowrap whitespace-nowrap"
                >
                  @cimes.silva
                </a>
              </div>
              <div className="flex cursor-pointer text-white hover:text-gray-200">
                <i className="mr-2 text-xl fa-brands fa-facebook" />
                <a
                  href="https://www.facebook.com/cimes.silvaehijos"
                  target="_blank"
                  rel="noreferrer"
                  className="lg:text-base md:text-sm text-xs lg:font-bold font-humanist777 tracking-wider text-nowrap whitespace-nowrap"
                >
                  @Cimes Silva
                </a>
              </div>
            </div>
            <div className="h-full w-full py-5 flex flex-col justify-start items-start">
              <h1 className="mb-4 text-white lg:text-2xl md:text-xl text-lg font-bold font-feltTipRoman tracking-widest">
                Contactanos
              </h1>
              <div className="mb-1 flex text-white">
                <i class="mr-2 text-lg fa-solid fa-house" />
                <p className="lg:text-base md:text-sm text-xs lg:font-bold font-humanist777">
                Calle 10 N° 1851, Mercedes, Buenos Aires
                </p>
              </div>
              <div className="mb-1 flex text-white">
                <i className="mr-2 text-lg fa-regular fa-clock" />
                <p className="lg:text-base md:text-sm text-xs lg:font-bold font-humanist777">
                Lu a Vie de  08:00 a 18:00 hs.
                </p>
              </div>
              <div className="mb-1 flex text-white">
                <i className="mr-2 text-lg fa-solid fa-envelope" />
                <p className="lg:text-base md:text-sm text-xs lg:font-bold font-humanist777">
                contacto@cimesmercedes.com.ar
                </p>
              </div>
              <div className="mb-1 flex text-white">
                <i className="mr-2 text-lg -rotate-90 fa-solid fa-phone" />
                <p className="lg:text-base md:text-sm text-xs lg:font-bold font-humanist777">
                (2324) 428880
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
