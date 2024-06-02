import React from "react";
import "./Home.css";
import Layout from "../../components/Header/Header";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Footer from "../../components/Footer/Footer";

function Homee() {
  return (
    <div>
      <div className="home_container">
        <div className="home_header">
          <Header></Header>
          <div className="pl-[60px] pr-[60px] header_div">
            <h1 className="header_title">
              посреди<span> леса</span> далеко от шума
            </h1>
            <p className="header_desc">
              Равным образом реализация намеченных плановых заданий широкому
              кругу (специалистов) участие в формировании
            </p>
            <button className="header_btn">Связаться с нами</button>
          </div>
        </div>
        <div className="home_hero">
          <Hero></Hero>
          <Section></Section>
          <div></div>
        </div>
        <div className="mt-[67px]">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default Homee;
