import { Link, useRoutes } from "react-router-dom";

import routes from "./routes/index.js";
import Routes from "./Routes.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const routeResult = useRoutes(routes);
  return (
    <>
      <main className="p-0 ml-0">
        {/* You can use by useRoutes like this (I prefer it): */}
        {/* {routeResult} */}
        {/* Or use by defining it */}
        <Routes />
      </main>
    </>
  );
}

export default App;
