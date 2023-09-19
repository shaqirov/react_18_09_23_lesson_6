import style from "./title.module.css";

export function Title(props) {
  return (
    <>
      <div>
        <p className={style.title}>{props.title}</p>
        <p className={style.text}>{props.text}</p>
        <div>
          <a className={style.link} href={"#/"}>
            {props.link}
          </a>
        </div>
      </div>
    </>
  );
}
