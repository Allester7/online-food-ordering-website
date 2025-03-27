import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "../src/component/About.jsx";
import Cart from "../src/component/Cart.jsx"
import Contact from "../src/component/Contact.jsx"
import ResturantList from './component/ResturantList.jsx';
import ResturantItems from './component/ResturantItems.jsx';


const appLayout = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children : [
      {
        path: '/',
        element: <ResturantList />,
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/Cart",
        element:<Cart />
      },
      {
        path:"/Contact",
        element:<Contact />
      },
      {
        path:"/resturant/:resId",
        element:<ResturantItems />
      }
    ],
    errorElement: <h1>404 not Found</h1>
  }
]);
createRoot(document.getElementById('root')).render(
    <RouterProvider router={appLayout} />
)
