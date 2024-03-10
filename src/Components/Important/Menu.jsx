import "./Menu.scss";
import React from "react";
import { Link } from "react-router-dom";
import Menu__btn from "./img/Menu@3x.png";
// import Logo from "./Important-img/Logo_Black@3x.png";
import Home from "./img/ui-71(1).svg";
import Trend from "./img/ui-01.svg";
import Subs from "./img/ui-45.svg";
import Library from "./img/documents-11.svg";
import History from "./img/others-07.svg";
import Watch from "./img/tech-25.svg";
import Faourite from "./img/ui-02.svg";
import Liked from "./img/ui-03.svg";
import Music from "./img/ui-80.svg";
import Game from "./img/tech-02.svg";
import More from "./img/chevron-down.svg";

import Gussie from "./img/Oval@3x.png";
import Nora from "./img/Oval@3x(1).png";
import Belle from "./img/Oval@3x(2).png";
import Eunice from "./img/Oval@3x(3).png";
import Emma from "./img/Oval@3x(4).png";
import Leah from "./img/Oval@3x(5).png";
import Setting from "./img/ui-46.png";
import Languages from "../Hooks/Localization";
import { Context as ContexLoc } from "../Context/Localization";

export default function Menu() {

  const {lang} = React.useContext(ContexLoc)
  const Xref = React.useRef(null);

  return (
    <section className="menu">
      <div className="logo__flex">
        <button
          className="menu__btn"
          onClick={() => {
            Xref.current.classList.add("close");
          }}
          onDoubleClick={() => {
            Xref.current.classList.remove("close");
          }}
        >
          <img src={Menu__btn} alt="btn" width={20} height={17} />
        </button>
        {/* <a className="logo__link" href="#link">
          <img src={Logo} alt="logo" width={116} height={25} />
        </a> */}
      </div>

      <div className="menu">
        <div ref={Xref} className="menu__close ">
          <div className="menu__list">
            <Link className="menu__link"  to="home">
              <img src={Home} alt="home" width={21} height={19} />
              <p className="menu__link__text">{Languages[lang].menu.menu__link1}</p>
            </Link>

            <a className="menu__link" href="/Trend">
              <img src={Trend} alt="home" width={16} height={21} />
              <p className="menu__link__text">{Languages[lang].menu.menu__link2}</p>
            </a>

            <a className="menu__link" href="/Sub">
              <img src={Subs} alt="home" width={17} height={18} />
              <p className="menu__link__text">{Languages[lang].menu.menu__link3}</p>
            </a>

            <a className="menu__link" href="/Lib">
              <img src={Library} alt="home" width={20} height={19} />
              <p className="menu__link__text">{Languages[lang].menu.menu__link4}</p>
            </a>

            <a className="menu__link" href="/His">
              <img src={History} alt="home" width={20} height={18} />
              <p className="menu__link__text">{Languages[lang].menu.menu__link5}</p>
            </a>

            <a className="menu__link" href="/Watch">
              <img src={Watch} alt="home" width={17} height={19} />
              <p className="menu__link__text">{Languages[lang].menu.menu__link6}</p>
            </a>

            <a className="menu__link" href="/FAV">
              <img src={Faourite} alt="home" width={19} height={18} />
              <p className="menu__link__text">{Languages[lang].menu.menu__link7}</p>
            </a>

            <a className="menu__link" href="/like">
              <img src={Liked} alt="home" width={18} height={17} />
              <p className="menu__link__text">{Languages[lang].menu.menu__link8}</p>
            </a>

            <a className="menu__link" href="/Music">
              <img src={Music} alt="home" width={18} height={20} />
              <p className="menu__link__text">{Languages[lang].menu.menu__link9}</p>
            </a>

            <a className="menu__link" href="/Game">
              <img src={Game} alt="home" width={22} height={16} />
              <p className="menu__link__text">{Languages[lang].menu.menu__link10}</p>
            </a>

            <a className="menu__link" href="/More">
              <img src={More} alt="home" width={14} height={8} />
              <p className="menu__link__text">{Languages[lang].menu.menu__link11}</p>
            </a>
          </div>

          <h1 className="menu__title">{Languages[lang].menu.menu__title}</h1>

          <div className="menu__list1">
            <a className="menu__link1" href="channel">
              <img src={Gussie} alt="gussie" width={26} height={26} />
              <p className="menu__text1">Gussie Singleton</p>
            </a>


            <a className="menu__link1" href="channel">
              <img src={Belle} alt="gussie" width={26} height={26} />
              <p className="menu__text1">Nora Francis</p>
            </a>

            <a className="menu__link1" href="channel">
              <img src={Eunice} alt="gussie" width={26} height={26} />
              <p className="menu__text1">Belle Briggs</p>
            </a>

            <a className="menu__link1" href="channel">
              <img src={Emma} alt="gussie" width={26} height={26} />
              <p className="menu__text1">Eunice Cortez</p>
            </a>

            <a className="menu__link1" href="channel">
              <img src={Leah} alt="gussie" width={26} height={26} />
              <p className="menu__text1">Emma Hanson</p>
            </a>

            <a className="menu__link1" href="channel">
              <img src={Nora} alt="gussie" width={26} height={26} />
              <p className="menu__text1">Leah Berry</p>
            </a>
          </div>
          <a className="menu__link" href="#link">
            <img src={Setting} alt="set" width={19} height={20} />
            <p className="menu__text1">Setting</p>
          </a>
        </div>
      </div>
    </section>
  );
}
