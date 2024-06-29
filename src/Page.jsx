import { useContext } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import MovieList from "./Components/cine/MovieList";
import { ThemeContext } from "./Components/context";

const Page = () => {
  const {darkMood} = useContext(ThemeContext);

  return (
    <div className={`h-full w-full ${darkMood ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
