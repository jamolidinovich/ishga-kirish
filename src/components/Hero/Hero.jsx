import React from "react";
import "./Hero.css";
import group from "../../assets/group.png";
import heroimg from "../../assets/heroimg.png";
function Hero() {
  return (
    <div>
      <div>
        <div className="hero_container flex">
          <div className="hero_div">
            <h1 className="hero_title">
              <span>принципы </span>которых мы придерживаемся
            </h1>
            <div className="mt-[65px]">
              <h2 className="hero_title2">Качества</h2>
              <p className="hero_desc">
                Равным образом реализация намеченных плановых заданий широкому
                кругу (специалистов) участие в формировании вилла в лесу
              </p>
            </div>
            <div className="mt-[65px]">
              <h2 className="hero_title2">Креативность</h2>
              <p className="hero_desc">
                Значимость этих проблем настолько очевидна, что реализация
                намеченных плановых заданий
              </p>
            </div>
            <div className="mt-[65px]">
              <h2 className="hero_title2">Современность</h2>
              <p className="hero_desc">
                Значимость этих проблем настолько очевидна, что реализация
                намеченных плановых заданий играет важную роль в формировании
                позиций
              </p>
            </div>
          </div>
          <div>
            <img
              className="mt-[120px] ml-[75px] hero_img"
              src={heroimg}
              alt=""
            />
            <img
              className="mt-[-392px] ml-[390px] w-[55px] h-[55px] hero_imgg "
              src={group}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
