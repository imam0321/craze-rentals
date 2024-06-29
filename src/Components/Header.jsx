import Ring from "../assets/ring.svg";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CardDetails from "./cine/CardDetails";
import { MovieContext, ThemeContext } from "./context";

const Header = () => {
  const [showCard, setShowCard] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMood, setDarkMood } = useContext(ThemeContext);

  const handleShowCard = () => {
    setShowCard(true);
  };

  return (
    <header>
      {showCard && <CardDetails onClose={() => setShowCard(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <h1 className="lg:text-2xl md:text-xl text-primary font-semibold">
            Craze Rentals
          </h1>
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
              onClick={() => setDarkMood((darkMood) => !darkMood)}
            >
              <img
                src={darkMood ? Sun : Moon}
                width="24"
                height="24"
                alt="Moon"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => handleShowCard()}
            >
              <img
                src={shoppingCart}
                width="24"
                height="24"
                alt="shopping Cart"
              />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[26px] bg-[#32dd88] text-white font-semibold text-center p-[1px] w-[26px] h-[26px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
