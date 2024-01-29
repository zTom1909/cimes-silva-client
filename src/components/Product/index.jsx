const Product = ({ name, image }) => {
  return (
    <div className="max-w-[240px] lg:min-w-[140px] rounded-lg flex flex-col justify-end overflow-hidden bg-productBackground drop-shadow-md hover:scale-105 drop-shadow-md">
      <div className="bg-cover bg-center lg:h-[180px] md:h-[120px] sm:h-[100px] h-[80px]" style={{backgroundImage: `url(${image})`}} />
      <p className="lg:h-[48px] md:h-[36px] h-[24px] lg:p-2 md-p2 p-2 flex justify-center items-center lg:text-base md:text-sm text-[9px] text-white bg-productName">
        {name}
      </p>
    </div>
  );
};

export default Product;
