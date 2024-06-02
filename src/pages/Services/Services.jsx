import React from "react";
import Header from "../../components/Header/Header";
import line from "../../assets/line.png";
import nol from "../../assets/04.png";
import service from "../../assets/service.png";
import HomeForm from "../../components/HomeForm/HomeForm";
import servicesimg from "../../assets/services-img.png";
import "./Services.css";
import { Form } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
function Services() {
  return (
    <div className="bg-[#1E1E1E] ">
      <div>
        <Header></Header>
        <div>
          <div className="h-1000px flex justify-between pl-[60px]">
            <div>
              <span className="about_glavni">Главная - Услуги</span>
              <div className="flex items-center gap-5">
                <img src={line} alt="" />
                <h1 className="about_title mt-[-50px]">
                  Строительство
                  <h1 className="text-[#86DA44] mt-[-30px] w-[500px]">
                    домов и коттеджей
                  </h1>
                </h1>
              </div>
              <p className="about_desc w-[620px] mb-[400px]">
                на выбор подходяший раззмер и конфигурация дома для разных
                земельных участок и разного состава семьи ( молодая пара. семья
                с маленьким ребенком, дом для большой семьи).Мы сможем
                установить дом где угодно - на участке перед вышем домом, в
                лесной зоне, на береге реки. Доставку осуществляет наша компания{" "}
                <br />
                <br />
                Преимущества Комплексный подряд. Вы можете заказать выполнение
                всех работ в нашей компании: от проектирования до электромонтажа
                в готовом здании. «АНКА техник» располагает парком спецтехники,
                штатом специалистов. Возможно сотрудничество на условиях
                субподряда. <br />
                <br /> Качество. Мы учитываем характеристики участка, соблюдаем
                ШНК, другие нормы, используем надежные строительные технологии.
                <br />
                <br />
                Сотрудничество. Компания «АНКА техник» подберет технологии
                строительства, стройматериалы, обеспечит их поставку.
                Запланированные работы выполняются без нарушения графика.
                Грамотная организация строительства позволяет возводить коттеджи
                и таунхаусы всего за несколько месяцев.
                <br />
                <br />
                Сопутствующие услуги. Мы выполняем изыскания, топосъемку,
                подготовку территории к застройке, демонтаж старых зданий.
              </p>
              <div className="mt-[-200px] mb-[113px]">
                <button className="about_btn mt-[-300px]">
                  Связаться с нами
                </button>
                {/* <img className=" mt-[90px] ml-[25px] " src={nol} alt="" /> */}
              </div>
            </div>
            <div>
              <img
                className="about_img mt-[150px] pr-[60px] mb-[100px]"
                src={service}
                alt=""
              />
            </div>
          </div>
          <div className="">
            <div>
              <img src={servicesimg} alt="" />
            </div>
            <div className="absolute mt-[-300px] ml-[440px]">
              <p className="servicesdesc ml-[-100px]">
                получите расчет сметы с учетом стоимости работ и материалов
                через 30 минут
              </p>
              <h1 className="servicestitle">Оставьте заявку прямо сейчас</h1>
              <div className="flex gap-[150px]  w-[1300px] ml-[-250px] mt-[60px]">
                <div class="input-data w-[440px]">
                  <input type="text" required />
                  <div class="underline"></div>
                  <label for="">имя</label>
                </div>
                <div class="input-data w-[440px]">
                  <input type="email" required />
                  <div class="underline"></div>
                  <label for="">телефон</label>
                </div>
                <button className="otpiravit ml-[-100px]">Отправить</button>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default Services;
