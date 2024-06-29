import Ring from "../assets/ring.svg";
import Moon from "../assets/icons/moon.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CardDetails from "./cine/CardDetails";
import { MovieContext } from "./context";

const Header = () => {
  const [showCard, setShowCard] = useState(false);
  const {cartData} = useContext(MovieContext)

  const handleShowCard =() => {
    setShowCard(true)
  }

  return (
    <header>
      {
        showCard && <CardDetails onClose={()=> setShowCard(false)}/>
      }
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <h1 className="lg:text-2xl md:text-xl text-primary font-semibold">Craze Rentals</h1>
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="Ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Moon} width="24" height="24" alt="Moon" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={()=> handleShowCard()}
            >
              <img src={shoppingCart} width="24" height="24" alt="shopping Cart" />
              {
                cartData.length > 0 &&
                  <span className="rounded-full absolute top-[-12px] left-[26px] bg-[#32dd88] text-white font-semibold text-center p-[1px] w-[26px] h-[26px]">{cartData.length}</span>
              }
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
