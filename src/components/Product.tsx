import Minus from "/images/icon-minus.svg";
import Plus from "/images/icon-plus.svg";
import Slide from "./Slide";

type ProductProps = {
  quantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleAddToCart: (quantity: number) => void;
};

const Product: React.FC<ProductProps> = ({
  quantity,
  handleIncrease,
  handleDecrease,
  handleAddToCart,
}) => {
  const pricePerUnit = 125;
  const discountPercentage = 50;
  const originalPrice = 250;

  return (
    <div
      className="w-[375px] pb-[88px] 
    md:w-[768px] md:pt-[60px] md:px-[24px] md:pb-[80px] md:grid md:grid-cols-2
     lg:w-[1440px] lg:pt-[90px] lg:px-[213px] lg:pb-[132px] lg:grid lg:grid-cols-2 lg:gap-[125px]"
    >
      <Slide />

      <div className="lg:mt-[62px]">
        <div className="pt-[18px] px-[24px] lg:p-0">
          <h3
            className="text-[#ff7e1b] text-[12px] font-bold tracking-[1.85px] mb-[19px] 
          lg:text-[13px] lg:mb-[27px]"
          >
            SNEAKER COMPANY
          </h3>
          <h2
            className="font-bold text-[28px] leading-[1.14] mb-[15px]
           lg:text-[44px] lg:mb-[32px]"
          >
            Fall Limited Edition Sneakers
          </h2>
          <p className="text-[15px] text-[#69707d] leading-[1.67] lg:text-[16px] lg:mb-[28px]">
            These low-profile sneakers are your
            perfect casual wear companion.
            Featuring a durable rubber outer sole,
            they’ll withstand everything the
            weather can offer.
          </p>
        </div>

        <div
          className="flex items-center pt-[24px] px-[24px]
        lg:p-0 lg:flex-col lg:place-items-start"
        >
          <div className="hidden lg:flex lg:items-center lg:mb-[10px]">
            <div className="text-[28px] font-bold">
              ${pricePerUnit.toFixed(2)}
            </div>
            <div className="w-[51px] h-[27px] ml-[24px] text-center text-[#ff7e1b] bg-[#ffeee2] text-[16px] font-bold inline-block rounded-[6px]">
              {discountPercentage}%
            </div>
          </div>
          <div className="lg:hidden text-[28px] font-bold">
            ${pricePerUnit.toFixed(2)}
          </div>
          <div className="lg:hidden w-[51px] h-[27px] ml-[24px] text-center text-[#ff7e1b] bg-[#ffeee2] text-[16px] font-bold inline-block rounded-[6px]">
            {discountPercentage}%
          </div>
          <div className="line-through ml-[90px] text-[16px] text-[#b6bcc8] font-bold lg:ml-0">
            ${originalPrice.toFixed(2)}
          </div>
        </div>
        <div className="lg:flex lg:mt-[32px]">
          <div
            className="w-[327px] mt-[24px] ml-[24px] mb-[16px] h-[56px] flex items-center justify-between bg-[#f6f8fd] rounded-[10px] px-[24px]
        lg:w-[157px] lg:mt-0 lg:mr-[16px] lg:ml-0"
          >
            <img
              src={Minus}
              onClick={handleDecrease}
              alt="minus icon"
              className="cursor-pointer"
            />
            <div className="px-4 text-[16px] font-bold">
              {quantity}
            </div>

            <img
              src={Plus}
              onClick={handleIncrease}
              alt="plus icon"
              className="cursor-pointer"
            />
          </div>

          <button
            onClick={() =>
              handleAddToCart(quantity)
            }
            className="flex items-center justify-center w-[327px] h-[56px] bg-[#ff7e1b] text-[16px] font-bold text-white ml-[24px] rounded-[10px] [box-shadow:0_20px_50px_-20px_#ff7e1b]
          lg:w-[272px] lg:ml-0 lg:hover:bg-[#ffab6a]"
          >
            <div className="text-white">
              <svg
                width="22"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current mr-[16px]"
              >
                <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
              </svg>
            </div>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
