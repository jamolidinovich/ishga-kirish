import React from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
// import "./Header.css";
import fezbuk from "../../assets/fezbek.svg";
import yotube from "../../assets/yotube.svg";
import insta from "../../assets/insta.svg";
import group2 from "../../assets/group2.png";
function Footer() {
  return (
    <div>
      <div className="header-container bg-[#000]">
        <div className="logo w-[87px]">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="nav w-[893px] gap-[40px] ">
          <p className="text-white ml-[-50px]">© Все право защищены 2021</p>
          {/* <NavLink exact to={"/"} activeClassName="active">
            Главная
          </NavLink> */}
          <NavLink to={"/about"} activeClassName="active">
            О нас
          </NavLink>
          <NavLink to={"/services"} activeClassName="active">
            Услуги
          </NavLink>
          <NavLink to={"/project"} activeClassName="active">
            Проекты
          </NavLink>{" "}
          <NavLink to={"/consultation"} activeClassName="active">
            Консультация
          </NavLink>
          <NavLink to={"/contact"} activeClassName="active">
            Контакты
          </NavLink>
        </div>
        <img className="ml-[-150px]" src={group2} alt="" />
        <div className="icon flex items-center gap-[19px]">
          <img src={fezbuk} alt="" />
          <img src={yotube} alt="" />
          <img src={insta} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
