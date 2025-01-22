import Menu from "/images/icon-menu.svg";
import Logo from "/images/logo.svg";
import CartIcon from "/images/icon-cart.svg";
import Avatar from "/images/image-avatar.png";
import Close from "/images/icon-close.svg";
import { useState } from "react";
import Cart from "./Cart";

interface HeaderProps {
  cartQuantity: number;
  onRemove: () => void;
}

export default function Header({
  cartQuantity,
  onRemove,
}: HeaderProps) {
  const [menu, setMenu] = useState(false);
  const [cartVisible, setCartVisible] =
    useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const toggleCart = () => {
    setCartVisible((prev) => !prev);
  };

  return (
    <div className="w-[375px] md:w-[768px] lg:w-[1440px]">
      <header
        className="flex w-full pt-[24px] px-[24px] pb-[28px] items-center
      lg:pt-[28px] lg:px-[165px] lg:pb-[34px]"
      >
        <img
          className="w-[16px] h-[15px] mt-[3px] mr-[16px] md:hidden lg:hidden"
          src={Menu}
          alt="burger menu icon"
          onClick={toggleMenu}
        />

        <img
          className="h-[20px] mr-[90px] lg:mr-[57px]"
          src={Logo}
          alt="logo img"
        />

        <ul className="hidden md:block md:flex lg:flex items-center md:space-x-[20px] lg:space-x-[32px]">
          <li
            className="cursor-pointer text-[15px] text-[#69707d] hover:text-[#1d2026]
          relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-[#ff7e1b]
          hover:after:transform hover:after:translate-y-[48px]"
          >
            Collections
          </li>
          <li
            className="cursor-pointer text-[15px] text-[#69707d] hover:text-[#1d2026]
           relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-[#ff7e1b]
           hover:after:transform hover:after:translate-y-[48px]"
          >
            Men
          </li>
          <li
            className="cursor-pointer text-[15px] text-[#69707d] hover:text-[#1d2026]
          relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-[#ff7e1b]
          hover:after:transform hover:after:translate-y-[48px]"
          >
            Women
          </li>
          <li
            className="cursor-pointer text-[15px] text-[#69707d] hover:text-[#1d2026]
          relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-[#ff7e1b]
          hover:after:transform hover:after:translate-y-[48px]"
          >
            About
          </li>
          <li
            className="cursor-pointer text-[15px] text-[#69707d] hover:text-[#1d2026]
          relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-[#ff7e1b]
          hover:after:transform hover:after:translate-y-[48px]"
          >
            Contact
          </li>
        </ul>
        <div className="relative">
          <img
            className="w-[22px] h-[20px] mr-[22px] 
            md:mr-[36px] md:ml-[36px]
            lg:mr-[46px] lg:ml-[402px] lg:w-[24px] lg:h-[22px] lg:cursor-pointer"
            src={CartIcon}
            alt="cart img"
            onClick={toggleCart}
          />
          {cartQuantity > 0 && (
            <span className="absolute top-[-5px] bg-[#ff7e1b] right-[14px] md:right-[30px] lg:right-[40px] text-white text-[10px] w-[19px] h-[13px] flex items-center justify-center rounded-full">
              {cartQuantity}
            </span>
          )}
        </div>
        <img
          className="w-[24px] h-[24px]
           md:h-[50px] md:w-[50px] lg:h-[50px] lg:w-[50px] cursor-pointer lg:hover:border-[2px] lg:hover:border-[#ff7e1b] lg:hover:rounded-[50%]"
          src={Avatar}
          alt="avatar image"
        />
      </header>
      <hr className="hidden md:block lg:block md:w-[768px] md:ml-0 lg:w-[1110px] h-[1px] bg-[#e4e9f2] lg:ml-[165px] " />

      {menu && (
        <nav className="absolute top-0 w-[250px] h-full bg-white shadow-md z-10 pt-[25px] pl-[25px]">
          <div className="flex">
            <img
              className="w-[13.4px] h-[13.4px] cursor-pointer mb-[54px]"
              src={Close}
              alt="close icon"
              onClick={toggleMenu}
            />
          </div>
          <div className="absolute right-[-125px] top-0 w-[125px] h-full bg-black opacity-75"></div>
          <ul className="space-y-[20px] text-gray-800 font-semibold">
            <li className="cursor-pointer font-bold text-[18px]">
              Collections
            </li>
            <li className="cursor-pointer font-bold text-[18px]">
              Men
            </li>
            <li className="cursor-pointer font-bold text-[18px]">
              Women
            </li>
            <li className="cursor-pointer font-bold text-[18px]">
              About
            </li>
            <li className="cursor-pointer font-bold text-[18px]">
              Contact
            </li>
          </ul>
        </nav>
      )}
      {cartVisible && (
        <Cart
          cartQuantity={cartQuantity}
          onRemove={onRemove}
        />
      )}
    </div>
  );
}
