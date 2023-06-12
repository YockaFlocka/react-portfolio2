import React from 'react'
import Project from '../components/Project';
import WeatherDash from '../assets/weather-dashboard.JPG';
import TinDog from '../assets/TinDog.JPG';
import WorkScheduler from '../assets/day-scheduler.JPG';
import CSSPortfolio from '../assets/css-site.JPG';
import RideGuide from '../assets/RideGuide.JPG';
import "../styles/Portfolio.css";


function Portfolio() {
  return (
    <div className='projects'>
      <h1 className='projectTitle'> My Projects </h1>
      <div className='projectList'>
        <a href='https://tindog.herokuapp.com/'>
        <Project name="TinDog" image={TinDog} />
        </a>
        <a href='https://yockaflocka.github.io/day-scheduler/'>
        <Project name="Work Scheduler" image={WorkScheduler} />
        </a>
        <a href='https://yockaflocka.github.io/weather-dashboard/'>
        <Project name="Weather Dashboard" image={WeatherDash} />
        </a>
        <a href='https://yockaflocka.github.io/css/'>
        <Project name="CSS Portfolio" image={CSSPortfolio} />  
        </a>  
        <a href='https://bike-trail-explore-grp-1.herokuapp.com/'>
        <Project name="RideGuide" image={RideGuide} />
        </a>    
      </div>
    </div>
  )
}

export default Portfolio