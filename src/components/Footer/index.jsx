import logo from "../../utils/images/cimesvg.svg";

const Footer = () => {
  return (
    <div className="grid grid-cols-12 gap-8 items-center h-[200px] bg-blueBackground">
      <div></div>
      <img src={logo} alt="logo cimes" className="col-span-2 h-auto max-h-[156px]" />
      <div></div>
      <div className="h-full py-5 flex flex-col justify-start items-start col-span-3">
        <h1 className="mb-4 text-white text-2xl font-bold font-feltTipRoman tracking-widest">Redes Sociales</h1>
        <div className="mb-1 flex cursor-pointer text-white hover:text-gray-200">
          <i className="mr-2 text-xl fa-brands fa-instagram" />
          <a href="https://www.instagram.com/cimes.silva/" target="_blank" rel="noreferrer"
            className="text-base font-bold font-humanist777 tracking-wider">@cimes.silva</a>
        </div>
        <div className="flex cursor-pointer text-white hover:text-gray-200">
          <i className="mr-2 text-xl fa-brands fa-facebook" />
          <a href="https://www.facebook.com/cimes.silvaehijos" target="_blank" rel="noreferrer"
            className="text-base font-bold font-humanist777 tracking-wider">@Cimes Silva</a>
        </div>
      </div>
      <div></div>
      <div className="h-full py-5 flex flex-col justify-start items-start col-span-3">
        <h1 className="mb-4 text-white text-2xl font-bold font-feltTipRoman tracking-widest">Contactanos</h1>
        <div className="mb-1 flex text-white">
          <i className="mr-2 text-lg -rotate-90 fa-solid fa-phone" />
          <p className="text-base font-bold font-humanist777">+54 9 2324-621212</p>
        </div>
        <div className="flex text-white">
          <i className="mr-2 text-xl fa-brands fa-whatsapp" />
          <p className="text-base font-bold font-humanist777">+54 9 2324-643697 </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
