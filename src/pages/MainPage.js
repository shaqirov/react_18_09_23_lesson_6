import { Title } from "../components/Title/Title";
import { Gadgets } from "../components/Gadgets/Gadgets";
import { News } from "../components/News/News";
import gadgets from "../data/gadgets.json";
import news from "../data/news.json";
import style from "./mainPage.module.css";

export function MainPage() {
  return (
    <>
      <Title title="Скидки" text="" link="подробнее >" />
      <div className={style.gadgets_block}>
        {gadgets.map((gadget, index) => (
          <Gadgets key={index} gadget={gadget} />
        ))}
      </div>
      <Title
        title="Статьи и новости"
        text="Оставайтесь всегда в курсе событий"
        link="подробнее >"
      />
      <div className={style.news_block}>
        {news.map((news, index) => (
          <News key={index} news={news} />
        ))}
      </div>
    </>
  );
}
