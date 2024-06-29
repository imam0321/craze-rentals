import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./Components/context";
import Page from "./Page";
import { cartReducer, initialState } from "./Components/reducers/CartReducer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkMood, setDarkMood] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <ThemeContext.Provider value={{ darkMood, setDarkMood }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer/>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
