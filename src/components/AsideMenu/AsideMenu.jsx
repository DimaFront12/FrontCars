import { Link, useLocation } from "react-router-dom";
import styles from "./AsideMenu.module.css";
import { useStore } from "../../store/app-store";
import logo from "../../../public/Logo.svg"
import Home from "../../../public/Home.svg"
import Cars from "../../../public/Cars.svg"
import Bell from "../../../public/Bell.svg"
import Settings from "../../../public/Settings.svg"
import Logout from "../../../public/Logout.svg"

export const AsideMenu = () => {
  const location = useLocation();
  const authContext = useStore();

  return (
    <aside className={styles.asideMenu}>
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.icons}>
        <div className={styles.pages}>
          <Link to="/">
            <img
              className={`${location.pathname === "/" && styles.navigationActive}`}
              src={Home}
              alt=""
            />
          </Link>
          <Link to="/news">
            <img
              className={`${location.pathname === "/news" && styles.navigationActive}`}
              src={Cars}
              alt=""
            />
          </Link>
          <img src="/public/Favorite.svg" alt="" />
        </div>
        <div className={styles.utils}>
          <img src={Bell} alt="" />
          <img src={Settings} alt="" />
          {authContext.user && (
            <img
            className={styles.logout}
              src={Logout}
              alt=""
              onClick={() => {
                authContext.logout();
              }}
            />
          )}
        </div>
      </div>
    </aside>
  );
};
