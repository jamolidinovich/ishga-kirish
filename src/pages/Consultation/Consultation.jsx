import React from "react";
import Header from "../../components/Header/Header";
import "./Consultation.css";
import line from "../../assets/line.png";
function Consultation() {
  return (
    <div className="consulation_header">
      <Header></Header>
      <div className="contact-form">
        <h2 className="flex items-center gap-8">
          <img src={line} alt="" />
          СВЯЗАТЬСЯ С НАМИ
        </h2>
        <p>Персональный менеджер свяжется с вами в течение 15 минут</p>
        <form className="ml-[40px]">
          <div class="input-data w-[354px] mb-[60px] ">
            <input type="email" required placeholder="имя" />
            <div class="underline"></div>
            <label for="">E-mail</label>
          </div>
          <div class="input-data w-[354px] mb-[60px]">
            <input type="email" required placeholder="E-mail" />
            <div class="underline"></div>
            <label for="">E-mail</label>
          </div>
          <div class="input-data w-[354px] mb-[60px]">
            <input type="email" required placeholder="телефон" />
            <div class="underline"></div>
            <label for="">E-mail</label>
          </div>
          <div className="flex absolute items-center ">
            <input type="checkbox" name="" id="" className="bg-black" />
            <p className="mt-[15px] absolute w-[500px]">
              Согласен(на) с обработкой персональных данных
            </p>
          </div>
          <button className="mt-[70px] submit" type="submit">
            ОСТАВИТЬ ЗАЯВКУ
          </button>
        </form>
      </div>
      <div className="h-[200px] mt-[100px]"></div>
    </div>
  );
}

export default Consultation;
