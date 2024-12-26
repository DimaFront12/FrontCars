import { Link, useLocation } from "react-router-dom";
import styles from "./AsideMenu.module.css";
import { useStore } from "../../store/app-store";

export const AsideMenu = () => {
  const location = useLocation();
  const authContext = useStore();

  return (
    <aside className={styles.asideMenu}>
      <img className={styles.logo} src="../../../public/Logo.svg" alt="" />
      <div className={styles.icons}>
        <div className={styles.pages}>
          <Link to="/">
            <img
              className={`${location.pathname === "/" && styles.navigationActive}`}
              src="../../../public/Home.svg"
              alt=""
            />
          </Link>
          <Link to="/news">
            <img
              className={`${location.pathname === "/news" && styles.navigationActive}`}
              src="../../../public/Cars.svg"
              alt=""
            />
          </Link>
          <img src="../../../public/Favorite.svg" alt="" />
        </div>
        <div className={styles.utils}>
          <img src="../../../public/Bell.svg" alt="" />
          <img src="../../../public/Settings.svg" alt="" />
          {authContext.user && (
            <img
            className={styles.logout}
              src="../../../public/Logout.svg"
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
