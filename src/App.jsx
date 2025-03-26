import Header from "./component/Header";
import ResturantList from "./component/ResturantList";

import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
