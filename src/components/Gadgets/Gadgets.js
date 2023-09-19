import style from "./gadgets.module.css";
import gadgets from "../../data/gadgets.json";
export function Gadgets({ gadget }) {
  function showLink() {
    alert(gadget.link);
  }
  return (
    <div>
      <div className={style.gadgets_card}>
        <div>
          <div>
            <p className={style.name}>{gadget.name}</p>
            <p className={style.description}>{gadget.description}</p>
          </div>
          <div>
            <p className={style.costKGS}>{gadget.costKGS} сом</p>
            <p className={style.costUSD}>от ${gadget.costUSD}</p>
          </div>
        </div>
        <div>
          <div>
            <img className={style.image} alt="gadget" src={gadget.image} />
          </div>
          <a onClick={showLink} className={style.link} href={"/#"}>
            выбрать >
          </a>
        </div>
      </div>
    </div>
  );
}
