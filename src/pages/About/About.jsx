import React from "react";
import Header from "../../components/Header/Header";
import aboutimg from "../../assets/aboutimg.png";
import nol from "../../assets/04.png";
import line from "../../assets/line.png";
import about from "../../assets/about.png";
import bosh from "../../assets/bosh.png";
import projectimg1 from "../../assets/projectimg1.png";
import projectimg2 from "../../assets/projectimg2.png";
import projectimg3 from "../../assets/projectimg3.png";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import about_prekt from "../../assets/about_prekt.png";
import parterni from "../../assets/parterni.png";
import konsultatsi from "../../assets/konsultatsi.png";
import "./about.css";
import HomeForm from "../../components/HomeForm/HomeForm";
import Footer from "../../components/Footer/Footer";
function About() {
  return (
    <div>
      <div className="bg-[#1E1E1E] ">
        <Header></Header>
        <div className="h-1000px flex justify-between pl-[60px]">
          <div>
            <span className="about_glavni">
              Главная - Проекты - Котеж в краснодаре
            </span>
            <div className="flex items-center gap-5">
              <img src={line} alt="" />
              <h1 className="about_title">Koтеж в краснодаре</h1>
            </div>
            <p className="about_desc">
              Равным образом реализация намеченных плановых заданий широкому
              кругу (специалистов) участи кругу (специалистов) участи
            </p>
            <div className="mt-[-200px] mb-[113px]">
              <button className="about_btnn mt-[-300px]">
                Связаться с нами
              </button>
              <img className=" mt-[90px] ml-[25px] " src={nol} alt="" />
            </div>
          </div>
          <div>
            <img className="about_img" src={aboutimg} alt="" />
          </div>
        </div>
        <div>
          <img src={about} alt="" />
          <div className="absolute flex mt-[-570px] pl-[200px]">
            <div className="">
              <h1 className="flex kotej items-center">
                <img src={line} alt="" />
                Описания котежа
              </h1>
              <p className="about_desc">
                С другой стороны новая модель организационной деятельности
                играет важную роль в формировании системы обучения кадров,
                соответствует насущным потребностям. <br />
                <br /> Повседневная практика показывает, что постоянный
                количественный рост и сфера нашей активности.Повседневная
                практика показывает, что начало повседневной работы по
                формированию позиции требуют от нас анализа системы обучения
                кадров, соответствует насущным потребностям. Таким образом
                сложившаяся структура организации требуют определения и
                уточнения соответствующий условий активизации. Разнообразный и
                богатый опыт сложившаяся структура организации позволяет оценить
                значение новых предложений.. Таким образом сложившаяся структура
                организации требуют определения и уточнения соответствующий
                условий активизации.
              </p>
            </div>
            <table className="ml-[200px] mt-[70px] text-[white]">
              <th className="flex w-[500px] justify-between mb-[27px]">
                <tr>АДРЕС</tr>
                <tr className="text-[white] opacity-40">
                  г.Краснодар, Чиланзарский район, 24-7-7
                </tr>
              </th>
              <th className="flex w-[500px] justify-between mb-[27px]">
                <tr>ПЛОЩАДЬ</tr>
                <tr className="text-[white] opacity-40">
                  г.Краснодар, Чиланзарский район, 24-7-7
                </tr>
              </th>
              <th className="flex w-[500px] justify-between mb-[27px]">
                <tr>МАТЕРИАЛЫ</tr>
                <tr className="text-[white] opacity-40">
                  г.Краснодар, Чиланзарский район, 24-7-7
                </tr>
              </th>
              <th className="flex w-[500px] justify-between mb-[27px]">
                <tr>СРОК</tr>
                <tr className="text-[white] opacity-40">
                  г.Краснодар, Чиланзарский район, 24-7-7
                </tr>
              </th>
              <th className="flex w-[500px] justify-between mb-[27px]">
                <tr>ЭТАЖНОСТЬ</tr>
                <tr className="text-[white] opacity-40">
                  г.Краснодар, Чиланзарский район, 24-7-7
                </tr>
              </th>
            </table>
          </div>
          <div className="absolute mt-[-100px] ml-[900px] flex">
            <th className="flex ml-[10px]">
              <button className="proekt mr-[20px]">
                Рассчитать подобный проек
              </button>
              <h2 className="flex w-[500px] justify-betweenmb-[27px]">
                <img src={bosh} alt="" />
                <p className=" w-[351px] text-[white] opacity-40 ml-[-20px] ">
                  Наши эксперты рассчитают для вас <br /> стоимость
                  строительстваобъект 45 минут
                </p>
              </h2>
            </th>
          </div>
        </div>

        <img className="ml-[100px] mt-[100px]" src={about_prekt} alt="" />
        <div className=" projectt absolute   h-[900px] mt-[-860px] pl-[60px] pr-[60px] ">
          <div className="flex items-center pt-[260px] justify-between gap-10">
            <div className="project_div">
              <img src={projectimg1} alt="" />
              <img className="mt-[-83px]" src={project1} alt="" />
            </div>
            <div className="project_div">
              <img src={projectimg2} alt="" />
              <img className="mt-[-83px]" src={project2} alt="" />
            </div>
            <div className="project_div">
              <img src={projectimg3} alt="" />
              <img className="mt-[-83px]" src={project3} alt="" />
            </div>
          </div>
        </div>
        <div className="ml-[50px] mt-[95px] parterni mb-[95px]">
          <img src={parterni} alt="" />
        </div>
        <div className=" konsultatsiya h-[734px] w-[1600px] ml-[-60px]">
          <img className="absolute ml-[60px]" src={konsultatsi} alt="" />
          <div className=" absolute ml-[250px] mt-[125px]">
            <HomeForm></HomeForm>
          </div>
        </div>
        <div className="">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default About;
