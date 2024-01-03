const Product = ({ name, image }) => {
  return (
    <div className="max-w-[240px] rounded-lg flex flex-col justify-end overflow-hidden bg-productBackground drop-shadow-md">
      <div className="bg-cover bg-center lg:h-[180px] md:h-[120px] h-[80px]" style={{backgroundImage: `url(${image})`}}>
        {/* <img src={image} alt={name} /> */}
      </div>
      <p className="lg:h-[48px] md:h-[36px] h-[24px] lg:p-2 md-p2 p-1 flex justify-center items-center lg:text-base md:text-sm text-xs text-white bg-productName">
        {name}
      </p>
    </div>
  );
};

export default Product;
