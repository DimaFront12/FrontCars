import { useState } from "react";
import { useStore } from "../../store/app-store";
import Styles from "./Authorization.module.css";
import { authorize, isResponseOk } from "../../api/api-utils";
import { endpoints } from "../../api/config";
import { useNavigate } from "react-router-dom";

export const Authorization = () => {
  const [authData, setAuthData] = useState({ login: "", password: "" });
  const [message, setMessage] = useState({ status: null, text: null });

  const authContext = useStore();

  const navigate = useNavigate();

  const handleInput = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = await authorize(endpoints.auth, authData);

    if (isResponseOk(userData)) {
      authContext.login({ ...userData, id: userData._id }, userData.jwt);

      setMessage({ status: "success", text: "Вы авторизовались!" });
      navigate("/")
    } else {
      setMessage({ status: "error", text: "Неверный логин или пароль" });
    }
  };
  return (
    <main className={Styles.main}>
      <div className={Styles.rectangle}>
        <p className={Styles.register}>С возвращением, автолюбитель!</p>
        <form className={Styles["reg-form"]} onSubmit={handleSubmit}>
          <label className={Styles["reg-form__label"]}>
            <p className={Styles["reg-form__text"]}>Логин</p>
            <input
              className={Styles["reg-form__email"]}
              value={authData.login}
              name="login"
              type="text"
              placeholder="Логин"
              onChange={handleInput}
            ></input>
          </label>
          <label className={Styles["reg-form__label"]}>
            <p className={Styles["reg-form__text"]}>Пароль</p>
            <div className={Styles["reg-form__showPassword"]}>
              <input
                className={Styles["reg-form__password"]}
                value={authData.password}
                name="password"
                type="password"
                placeholder="Пароль"
                onChange={handleInput}
              ></input>
            </div>
          </label>

          <button
            type="submit"
            name="submit"
            className={Styles["reg-form__button"]}
          >
            Войти
          </button>
          {message.status && (
            <p className={Styles["form__message"]}>{message.text}</p>
          )}
        </form>
      </div>
    </main>
  );
};
