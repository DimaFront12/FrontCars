import { useNavigate } from "react-router-dom";
import Styles from "./Registration.module.css";
import { useState } from "react";
import { isResponseOk, register } from "../../api/api-utils";
import { endpoints } from "../../api/config";

export const Registration = () => {
  const [regData, setRegData] = useState({ login: "", password: "" });
  const [message, setMessage] = useState({ status: null, text: null });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await register(endpoints.users, regData);

    if (isResponseOk(userData)) {
      setMessage({ status: "success", text: "Успешная регистрация" });
      navigate("/auth");
    } else {
      setMessage({ status: "error", text: "Ошибка регистрации" });
    }
  };
  return (
    <main className={Styles.main}>
      <div className={Styles.rectangle}>
        <p className={Styles.register}>Регистрация</p>
        <form className={Styles["reg-form"]} onSubmit={handleSubmit}>
          <label className={Styles["reg-form__label"]}>
            <p className={Styles["reg-form__text"]}>Логин</p>
            <input
              className={Styles["reg-form__email"]}
              value={regData.login}
              name="login"
              type="text"
              placeholder="Почта"
              onChange={handleInput}
            ></input>
          </label>
          <label className={Styles["reg-form__label"]}>
            <p className={Styles["reg-form__text"]}>Пароль</p>
            <div className={Styles["reg-form__showPassword"]}>
              <input
                className={Styles["reg-form__password"]}
                value={regData.password}
                name="password"
                type="password"
                placeholder="Пароль"
                minLength={8}
                onChange={handleInput}
              ></input>
            </div>
          </label>
          <button
            type="submit"
            name="submit"
            className={Styles["reg-form__button"]}
          >
            Зарегистрироваться
          </button>
          {message.status && (
            <p className={Styles["form__message"]}>{message.text}</p>
          )}
        </form>
      </div>
    </main>
  );
};
