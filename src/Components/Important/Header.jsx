import "./Header.scss";
import Search from "./img/search.svg"
import Make from "./img/makevid.png"
import Apps from "./img/app.png"
import Not from "./img/notification.png"
import pro from "./img/Userpic.png"
import Logo from "./img/Logo_Black@3x.png"
import { Link } from "react-router-dom";
import useTheme from "../Hooks/useTheme";
import Languages from "../Hooks/Localization";
import { Context as ContextLocal } from "../Context/Localization";
import React from "react";

export default function Header() {

  const {lang, setLang} = React.useContext(ContextLocal)

  const [theme, setTheme] = useTheme()

  return (
    <header className="header">
      <div className="header__info">
           <div className="need__div">
            <Link className="header__logo" href="Logo" to={"home"}>
                <img src={Logo} alt="Logo" width={106} height={25}/>
             </Link>
             <form className="form">
                  <input className="header__input" type="search"  placeholder="Search"/>
                  <img className="search" src={Search} alt="Search" width={19} height={19}/>
              </form>

              <select value={lang} onChange={(evt) => setLang(evt.target.value)} >
            <option value="uz">UZ</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>

          <select value={theme} onChange={(evt) => setTheme(evt.target.value)}>
            <option value="dark">Light</option>
            <option value="light">Dark</option>
          </select>
           </div>

           <div className="menu__div">

                    <button className="menu__create--video">
                        <img src={Make} alt="MakeVide"  width={27} height={20}/>
                    </button>

                    <button className="menu__create--video">
                        <img src={Apps} alt="Menu1" width={21} height={21}/>
                    </button>

                    <button className="menu__create--video">
                        <img src={Not} alt="Notification" width={21} height={21}/>
                    </button>

                    <button className="menu__create--video">
                      <Link to={"channel"}>
                        <img src={pro} alt="Profile" width={40} height={40}/>
                        </Link>
                    </button>
                </div> 

      </div>
    </header>
  );
}
