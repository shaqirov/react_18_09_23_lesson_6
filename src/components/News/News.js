import style from "./news.module.css";
export function News({ news }) {
  return (
    <div>
      <div>
        <img className={style.image} alt="news" src={news.image} />
      </div>
      <div className={style.text_block}>
        <p className={style.date}>{news.date}</p>
        <h5 className={style.title}>{news.title}</h5>
        <p className={style.text}>{news.text}</p>
        <a href={news.link} className={style.link}>
          подробнее >
        </a>
      </div>
    </div>
  );
}
