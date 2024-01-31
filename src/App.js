import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import './css/header.css';
import './css/restaurants.css';
import './css/plan.css';
import './css/map.css';
import Home from './Page/Home';
import Plan from './Page/Plan';
import Restaurants from './Page/Restaurants';
import About from './Page/About';
import Login from './Page/Login';
import Account from './Page/Account';
import Header from "./Components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
      path: "/plan",
    element: <Plan />,
  },
  {
    path: "/restaurants",
    element: <Restaurants />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Account",
    element: <Account />,
  }
  ]);


function App() {

  return (
      <>

        <RouterProvider router={router} />
      </>
  );
}

export default App;
