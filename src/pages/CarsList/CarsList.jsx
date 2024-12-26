import { useEffect, useState } from "react";
import styles from "./CarsList.module.css";

export const CarsList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/cars")
      .then((data) => data.json())
      .then((data) => {
        setCars(data);
      });
  }, []);
  return (
    <main className={styles.main}>
      <p className={styles.namePage}>Машины</p>
      <div className={styles.cardsList}>
        {cars &&
          cars.length > 0 &&
          cars.map((car) => (
            <div className={styles.carCard} key={car._id}>
              <div className={styles.title}>
                <h3 className={styles.carName}>{car.name}</h3>
                <p className={styles.carType}>{car.category}</p>
              </div>
              <img src={car.photo} alt={car.name} />
              <div className={styles.info}>
                <div className={styles.info__inner}>
                  <div className={styles.rating}>
                    <img
                      className={styles.star}
                      src="../../../public/star.svg"
                      alt=""
                    />
                    <p>{car.rating}</p>
                  </div>
                  <p>{car.price} ₽/ч</p>
                </div>
                <button className={styles.button}>Забронировать</button>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};
