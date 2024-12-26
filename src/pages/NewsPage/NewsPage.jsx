import { useEffect, useState } from "react";
import styles from "./NewsPage.module.css";

export const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((data) => data.json())
      .then((data) => {
        setNews(data);
      });
  }, []);

  return (
    <main className={styles.newsPage}>
      <p className={styles.namePage}>Новости</p>
      <div className={styles.cardsList}>
        {news &&
          news.length > 0 &&
          news.map((data) => (
            <div className={styles.cardNews} key={data._id}>
              <h2 className={styles.title}>{data.title}</h2>
              <div>
                <p>{data.text}</p>
                <img
                  className={styles.img}
                  src={data.photo}
                  alt="фото машины"
                />
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};
