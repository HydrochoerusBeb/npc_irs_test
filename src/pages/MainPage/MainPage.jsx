import React, { useState } from "react";
import { Dashboard } from "../../components/Dashboard";
import { generateCitizens } from "../../data/generateData";
import { NavBar } from "../../reusable/NavBar/NavBar";
import { Footer } from "../../reusable/Footer/Footer";
import s from './style.module.css'
const citizensData = generateCitizens(100000);

export const MainPage = () => {
  return (
    <div
      className='start-screen'
    >
      <NavBar></NavBar>

      <div
        className={s.main_page_conrainer}
      >
        <h1 className={s.main_page_header}>Welcome to main page!</h1>
        <div className={s.dashboard_container}>
          <div className={s.dashboard_margin} >
            <Dashboard citizens={citizensData} />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};
