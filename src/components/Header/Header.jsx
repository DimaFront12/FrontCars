import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useStore } from "../../store/app-store";

export const Header = () => {
  const navigate = useNavigate();
  const store = useStore();

  return (
    <header className={styles.header}>
      {store.isAuth ? (
        <p className={styles.username}>{store.user.login}</p>
      ) : (
        <>
          <button className={styles.button} onClick={() => navigate("/auth")}>
            Войти
          </button>
          <button
            className={styles.button}
            onClick={() => navigate("/register")}
          >
            Создать аккаунт
          </button>
        </>
      )}
    </header>
  );
};
