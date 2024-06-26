import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import MovieList from "./Components/cine/MovieList";

function App() {
  return (
    <>
      <Header/>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar/>
          <MovieList/>
        </div>
        
      </main>
    </>
  );
}

export default App;
