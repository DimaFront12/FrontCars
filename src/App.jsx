import { Header } from "./components/Header/Header";
import { AsideMenu } from "./components/AsideMenu/AsideMenu";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { CarsList } from "./pages/CarsList/CarsList";
import { Routes, Route } from "react-router-dom";
import { Registration } from "./pages/Registration/Registration";
import { Authorization } from "./pages/Authorization/Authorization";
import { useStore } from "./store/app-store";
import { useLayoutEffect } from "react";
import "./App.css";

function App() {
  const store = useStore();

  useLayoutEffect(() => {
    store.checkAuth();
  }, []);

  return (
    <>
      <div className="app">
          <div className="mainContentApp">
            <Header/>
            <Routes>
              <Route path="/" element={<NewsPage />} />
              <Route path="/news" element={<CarsList />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/auth" element={<Authorization />} />
            </Routes>
          </div>
        <AsideMenu />
      </div>
    </>
  );
}

export default App;
