import React from "react";
import "./HomeForm.css";
import fezbuk from "../../assets/fezbek.svg";
import yotube from "../../assets/yotube.svg";
import insta from "../../assets/insta.svg";
function HomeForm() {
  return (
    <div>
      <div className="flex ml-[80px]">
        <div class="form_container">
          <h1 className=" konsultatsiya_title">Консультация</h1>
          <p className="kondesc">
            Персональный менеджер свяжется с вами в течение 15 минут
          </p>
          <form action="#">
            <div class="form-row">
              <div class="input-data">
                <input type="text" required />
                <div class="underline"></div>
                <label for="">Рахматов Самандар</label>
              </div>
              <div class="input-data">
                <input type="email" required />
                <div class="underline"></div>
                <label for="">E-mail</label>
              </div>
              <div class="input-data">
                <input type="number" required />
                <div class="underline"></div>
                <label for="">телефон</label>
              </div>
            </div>
            <div class="form-row"></div>
          </form>
          <div class="input-data">
            {/* <input type="text" required /> */}
            <div class="underline"></div>
            {/* <label for="">Website Name</label> */}
          </div>
          <div className="flex">
            <input
              className="ml-[5px] w-[20px] bg-transparent"
              type="checkbox"
              name=""
              id=""
            />
            <p className="text-[white] opacity-4 ml-3">
              Согласен(на) с обработкой персональных
            </p>
          </div>
          <button className="home_btn">ОСТАВИТЬ ЗАЯВКУ</button>
        </div>

        <div className="ml-[350px]">
          <h1 className="text-[36px] text-[#86DA44]">КОНТАКТЫ</h1>
          <h2 className="text-[20px] text-[white] opacity-3 mt-6">Наш офис:</h2>
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
        </div>
      </div>
    </div>
  );
}

export default HomeForm;
