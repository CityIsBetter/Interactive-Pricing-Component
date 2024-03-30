import React from 'react'
import './DarkMode.css'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
        document.querySelector(".bg-img").setAttribute('filter', 'dark');
        document.querySelector(".circles").setAttribute('filter', 'ldark');
        document.querySelector(".icon").setAttribute('src', `${sun}`);
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
        document.querySelector(".bg-img").setAttribute('filter', 'light');
        document.querySelector(".circles").setAttribute('filter', 'light');
        document.querySelector(".icon").setAttribute('src', `${moon}`);
    }
    const toggleTheme = e => {
      if(e.target.checked) setDarkMode();
      else setLightMode();
    }
  return (
    <label class="switch">
      <input id='toggle' type="checkbox" onChange={toggleTheme} label='theme toggle'/>
      <img src={moon} alt="" className='icon'></img>
    </label>
  )
}

export default DarkMode;