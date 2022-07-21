import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";

import logo from "../../images/migpack5.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { MenuLavel } from "../MenuLavel/MenuLavel";

function Header() {

  return (

    <div className={styles.wrapper}>
      <div className={styles.top_menu}>
        <div>
          <Link className={styles.link_top_menu} to="">Информация о доставке</Link>
          <Link className={styles.link_top_menu} to="">О нас</Link>
          <Link className={styles.link_top_menu} to="">Политика безопасности</Link>
        </div>
        <div>
          <FontAwesomeIcon icon={faHeart} />
          <Link className={styles.link_top_menu} to="">Избранное</Link>
          <FontAwesomeIcon icon={faAlignRight} />
          <Link className={styles.link_top_menu} to="">Сравнение</Link>
          <FontAwesomeIcon icon={faUser} />
          <Link className={styles.link_top_menu} to="">Личный кабинет</Link>
        </div>
      </div>

      <div className={styles.container}>
        <img src={logo} alt="логотип"></img>

        <div className={styles.searchVisible_long}><SearchForm></SearchForm></div>

        

        <div>
          <span className={styles.mumber_phone}>+7 (495) 744-60-84</span>
          <FontAwesomeIcon className={styles.icon_media} icon={faChevronDown} />
          <div className={styles.phone_envelope}>
            <FontAwesomeIcon className={styles.icon} icon={faPhone} />
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          </div>
        </div>

        <FontAwesomeIcon className={styles.shopping_bag} icon={faShoppingBag} />
      </div>

      <div className={styles.menu_avel}>

        <button className={`${styles.searchVisible_short} ${styles.catalog}`}>Категории</button>
        <div className={styles.searchVisible_long}><MenuLavel></MenuLavel></div>

        

      

      <div className={styles.searchVisible_short}><SearchForm></SearchForm></div>
      </div>


      
    </div>
  );
}

export { Header };
