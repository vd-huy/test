import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
