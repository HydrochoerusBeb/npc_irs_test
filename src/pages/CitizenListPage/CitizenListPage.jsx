import React, { useState } from 'react';
import { generateCitizens } from '../../data/generateData';
import CitizenList from '../../components/CItizenList/CitizenList';
import CitizenDetails from '../../components/CItizenDetails';
import { BackButton } from '../../reusable/BackButton/BackButton';
import { NavBar } from '../../reusable/NavBar/NavBar';
import s from './style.module.css'
import { Footer } from '../../reusable/Footer/Footer';


const citizensData = generateCitizens(100000);


export const CitizenListPage = () => { 
    const [selectedCitizen, setSelectedCitizen] = useState(null);
    return (
      <div className='start-screen'>
        <NavBar/>
    <div className={s.citizen_list_container}>
          <div className={s.Header_line}>
  <BackButton/>  <h1>Citizen Directory</h1>
  </div>
      <div className={s.citizen_wrapper}>
        <div className={s.list_wrapper}>
          <CitizenList citizens={citizensData} onSelectCitizen={setSelectedCitizen} />
        </div>
        <div className={s.detail_wrapper}>
          <CitizenDetails citizen={selectedCitizen} />
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}

