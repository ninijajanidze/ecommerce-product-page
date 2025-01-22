import ProductImg from "/images/image-product-1-thumbnail.jpg";
import Delete from "/images/icon-delete.svg";

type CartProps = {
  cartQuantity: number;
  onRemove: () => void;
};

const Cart: React.FC<CartProps> = ({
  cartQuantity,
  onRemove,
}) => {
  return (
    <div
      className="absolute w-[360px] top-[85px] h-[256px] ml-[8px] rounded-[10px] z-30 bg-white
      md:top-[90px] md:ml-[400px] md:[box-shadow:0_20px_50px_-20px_rgba(29,_32,_38,_0.5)] bg-[#fff]
       lg:top-[100px] lg:ml-[994px] lg:[box-shadow:0_20px_50px_-20px_rgba(29,_32,_38,_0.5)] bg-[#fff]"
    >
      <div className="pt-[24px] pb-[27px] pl-[24px]">
        <span className="text-[16px] font-bold text-left">
          Cart
        </span>
      </div>
      <hr />
      {cartQuantity > 0 ? (
        <div className="flex flex-col px-[24px] py-[24px]">
          <div className="flex items-center">
            <div>
              <img
                src={ProductImg}
                alt="product image"
                className="w-[50px] h-[50px] rounded-[4px]"
              />
            </div>

            <div className="flex flex-col text-[16px] ml-[16px] text-[#69707d]">
              <p>Fall Limited Edition Sneakers</p>
              <div>
                <span>
                  ${(125.0).toFixed(2)}{" "}
                </span>
                <span>x</span>
                <span> {cartQuantity} </span>
                <span className="font-bold text-black">{` $${(
                  cartQuantity * 125
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div>
              <img
                src={Delete}
                onClick={onRemove}
                alt="delete icon"
                className="w-[14px] h-[16px] ml-[19px]"
              />
            </div>
          </div>

          <div>
            <button className="w-[312px] h-[56px] mt-[24px] rounded-[10px] bg-[#ff7e1b] text-white text-[16px] font-bold">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-[16px] text-[#69707d] mt-[24px]">
          Your cart is empty.
        </div>
      )}
    </div>
  );
};

export default Cart;
