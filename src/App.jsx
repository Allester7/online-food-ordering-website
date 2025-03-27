import Header from "./component/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <Provider store={appStore}>

      <Header />
      <Outlet />
    </Provider>
  );
}

export default App;
