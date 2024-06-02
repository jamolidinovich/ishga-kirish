import React from "react";
import "./Section.css";
import sectionimg from "../../assets/sectionimg.png";
import group from "../../assets/group.png";
import tuqiz from "../../assets/9.png";
import onuch from "../../assets/13.png";
import yuz from "../../assets/103.png";
import projectimg1 from "../../assets/projectimg1.png";
import projectimg2 from "../../assets/projectimg2.png";
import projectimg3 from "../../assets/projectimg3.png";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import parterni from "../../assets/parterni.png";
import HomeForm from "../HomeForm/HomeForm";
import sifr from "../../assets/sifr.png";
import konsultatsi from "../../assets/konsultatsi.png";
function Section() {
  return (
    <div>
      <div>
        <div>
          <div className="section_container flex">
            <div className="ml-[136px] pt-[100px]">
              <h1 className="section_title">
                <span>индивидуальное</span> проектирование вашех домов
              </h1>
              <p className="section_desc">
                на выбор подходяший раззмер и конфигурация дома для разных
                земельных участок и разного состава семьи ( молодая пара. семья
                с маленьким ребенком, дом для большой семьи).Мы сможем
                установить дом где угодно - на участке перед вышем домом, в
                лесной зоне, на береге реки. Доставку осуществляет наша компания
              </p>
              <p className="section_title2">Подробнее об услугах</p>
            </div>
            <div className="ml-[50px] ">
              <img className="section-img" src={sectionimg} alt="" />
              <img
                className=" section-img mt-[-280px] ml-[280px]"
                src={group}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[400px]">
        <div className="sifr">
          {/* pl-[200px] pr-[100px] */}
          <img className="absolute ml-[-60px]" src={sifr} alt="" />
          <div className=" absolute flex pl-[200px] pr-[100px] pt-[70px]  justify-between">
            <h1 className="sifr_title flex items-center gap-8">
              <img src={tuqiz} alt="" />
              <span className="w-[150px] inline-block">лет опыта работы</span>
            </h1>
            <h1 className="sifr_title flex items-center gap-8">
              <img src={onuch} alt="" />
              <span className="w-[280px] inline-block">
                крутых дизайнеров и архитекторов
              </span>
            </h1>
            <h1 className="sifr_title flex items-center gap-8">
              <img src={yuz} alt="" />
              <span className="w-[280px] inline-block">
                проектов во всех регионах страны
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className=" project h-[900px] mt-[-100px]">
        <div className="flex items-center pt-[260px] justify-between">
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
      <div className="ml-[50px] parterni mb-[95px]">
        <img src={parterni} alt="" />
      </div>
      <div className=" konsultatsiya h-[734px] w-[1600px] ml-[-60px]">
        <img className="absolute" src={konsultatsi} alt="" />
        <div className=" absolute ml-[250px] mt-[125px]">
          <HomeForm></HomeForm>
        </div>
      </div>
      <div className="h-[400px]">l</div>
    </div>
  );
}

export default Section;
