import React from "react";
import Header from "../../components/Header/Header";
import fezbuk from "../../assets/fezbek.svg";
import yotube from "../../assets/yotube.svg";
import insta from "../../assets/insta.svg";
import line from "../../assets/line.png";
import "./Project.css";
import Footer from "../../components/Footer/Footer";
function Projects() {
  return (
    <div className="bg-[#1E1E1E]">
      <div>
        <Header></Header>
        <div className="pl-[100px] flex justify-between ">
          <div>
            <h1 className="text-[36px] flex items-center gap-8 text-[#86DA44]">
              <img src={line} alt="" /> КОНТАКТЫ
            </h1>
            <h2 className="text-[20px] text-[white] opacity-3 mt-6">
              Наш офис:
            </h2>
            <p className="text-[21px] text-[white] w-[301px] mt-4">
              г.Москва ул. Ломоносова д. 16 9:00-21:00 Без выходных
            </p>
            <h2 className="text-[21px] text-[white] mt-6">+8 800 800 80 80</h2>
            <span className="text-[20px] text-[white] opacity-3 mt-8 inline-block">
              Электронная почта:
            </span>
            <p className="text-[20px] text-[white] mt-5">
              ForestINVERONMENTAL@mail.ru
            </p>
            <div className="flex gap-4 mt-10">
              <img src={fezbuk} alt="" />
              <img src={yotube} alt="" />
              <img src={insta} alt="" />
            </div>
            <button className="project_btn">Связаться с нами</button>
          </div>
          <iframe
            className="pr-[60px] mb-[450px]"
            width="933"
            height="575"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935902.026073868!2d59.55768404999999!3d41.50893265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4af17741b759bd%3A0xd4e5697ae3e9d9a0!2sUzbekistan!5e0!3m2!1sen!2sus!4v1686481472680!5m2!1sen!2sus"
          ></iframe>
        </div>
        <div>
          <div className=" mt-[-300px] ml-[440px] mb-[100px]">
            <p className="servicesdesc ml-[-100px]">
              получите расчет сметы с учетом стоимости работ и материалов через
              30 минут
            </p>
            <h1 className="servicestitle">Оставьте заявку прямо сейчас</h1>
            <div className="flex gap-[150px]  w-[1300px] ml-[-250px] mt-[60px]">
              <div class="input-data w-[440px]">
                <input type="text" required placeholder="имя" />
                <div class="underline"></div>
              </div>
              <div class="input-data w-[440px]">
                <input type="email" required placeholder="телефон" />
                <div class="underline"></div>
              </div>
              <button className="otpiravit ml-[-100px]">Отправить</button>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default Projects;
