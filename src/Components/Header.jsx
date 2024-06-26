import Ring from "../assets/ring.svg";
import Moon from "../assets/icons/moon.svg";
import shoppingCart from "../assets/shopping-cart.svg";

const Header = () => {
  return (
    <header>
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
            >
              <img src={shoppingCart} width="24" height="24" alt="shopping Cart" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
