import React from 'react'

// styles
import './Projects.css'

// project images
import Spuddy from '../assets/images/spuddies-home.png'
import FoodTruck from '../assets/images/food-truck-home.png'
import GPT from '../assets/images/GPT-home.png'
import Finance from '../assets/images/finance-tracker-home.png'
import RPS from '../assets/images/rps-home.png'
import Book from '../assets/images/bookshelf-home.png'
import Calculator from '../assets/images/calculator-home.png'
import Recipe from '../assets/images/cooking-home.png'
import Dnd from '../assets/images/dnd-home.png'
import Etch from '../assets/images/etch-home.png'
import Restaurant from '../assets/images/restaurant-home.png'
import Ttt from '../assets/images/tictactoe-home.png'
import TwelveCol from '../assets/images/12-col-home.png'
import Admin from '../assets/images/admin-home.png'
import HolyGrail from '../assets/images/holy-grail-home.png'
import Masonry from '../assets/images/masonry-home.png'
import Portfolio from '../assets/images/portfolio-home.png'
import Signup from '../assets/images/signup-home.png'
import DevFinder from '../assets/images/dev-finder-home.png'
import Gaming from '../assets/images/gaming-home.png'
import Tracker from '../assets/images/finance-home.png'
import Shinobi from '../assets/images/shinobi-home.png'
import Todo from '../assets/images/todo-home.png'
import Tweeter from '../assets/images/tweeter-home.png'
import SportsDashboard from '../assets/images/sports-dashboard-home.png'
import Scheduler from '../assets/images/scheduler-home.png'
import Workflow from '../assets/images/workflow-home.png'
import Workout from '../assets/images/workout-home.png'

export default function Projects() {
  
  return ( 
    <div>   

    {/* Full-stack */}
    <h3 className='heading'>Full-Stack</h3>
    <div className="projects">

    <article className="project">        
        <img src={SportsDashboard} alt="sports dashboard application" />       
        <a href="https://financetracker-f047d.web.app/">
          <h2>FinanceTracker</h2>
          <div className="content">
            <p>Transaction tracking application</p>
            <p>Stack: HTML CSS JS React Firebase</p>											
          </div>
        </a>
      </article>
    <article className="project">        
        <img src={Finance} alt="fianance tracker application" />       
        <a href="https://financetracker-f047d.web.app/">
          <h2>FinanceTracker</h2>
          <div className="content">
            <p>Transaction tracking application</p>
            <p>Stack: HTML CSS JS React Firebase</p>											
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={Spuddy} alt="spuddies restaurant application" />       
        <a href="https://spuddies-food-ordering.herokuapp.com/">
          <h2>Spuddies Restaurant</h2>
          <div className='content'>											
            <p>Food ordering application</p>
            <p>Stack: HTML CSS JS PostgreSQL Twilio</p>            
          </div>
        </a>        
      </article>
      <article className="project">        
        <img src={Workout} alt="fianance tracker application" />       
        <a href="https://financetracker-f047d.web.app/">
          <h2>FinanceTracker</h2>
          <div className="content">
            <p>Transaction tracking application</p>
            <p>Stack: HTML CSS JS React Firebase</p>											
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={Workflow} alt="fianance tracker application" />       
        <a href="https://financetracker-f047d.web.app/">
          <h2>FinanceTracker</h2>
          <div className="content">
            <p>Transaction tracking application</p>
            <p>Stack: HTML CSS JS React Firebase</p>											
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={FoodTruck} alt="food truck application" />       
        <a href="https://628686b4787a3b03908a9839--chipper-buttercream-16e62d.netlify.app/">
          <h2>FoodTruck Finder</h2>
          <div className="content">
            <p>Food truck locating application</p>
            <p>Stack: HTML CSS JS React PostgreSQL Leaflet Mapbox Stripe</p>
          </div>
        </a>        
      </article>
      <article className="project">        
        <img src={Scheduler} alt="fianance tracker application" />       
        <a href="https://financetracker-f047d.web.app/">
          <h2>FinanceTracker</h2>
          <div className="content">
            <p>Transaction tracking application</p>
            <p>Stack: HTML CSS JS React Firebase</p>											
          </div>
        </a>
      </article>     
      <article className="project">        
        <img src={Recipe} alt="recipe application" />       
        <a href="https://cooking-web-application.firebaseapp.com/">
          <h2>Recipe Book</h2>
          <div className="content">
            <p>Recipe book application</p>
            <p>Stack: HTML CSS JS React Firebase</p>
          </div>
        </a>
      </article>

      </div>

    {/* Front-end */}
    <h3 className='heading'>Front-End</h3>
    <div className="projects">
      <article className="project">        
        <img src={GPT} alt="open AI application" />       
        <a href="https://62857e96c2d87717e882e101--earnest-swan-080405.netlify.app/">
          <h2>Fun With GPT-3</h2>
          <div className="content">
            <p>OpenAI communication application</p>
            <p>Stack: HTML CSS JS React GTP-3/OpenAI</p>            
          </div>
        </a>
      </article>      
      <article className="project">        
        <img src={DevFinder} alt="fianance tracker application" />       
        <a href="https://financetracker-f047d.web.app/">
          <h2>FinanceTracker</h2>
          <div className="content">
            <p>Transaction tracking application</p>
            <p>Stack: HTML CSS JS React Firebase</p>											
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={Gaming} alt="fianance tracker application" />       
        <a href="https://financetracker-f047d.web.app/">
          <h2>FinanceTracker</h2>
          <div className="content">
            <p>Transaction tracking application</p>
            <p>Stack: HTML CSS JS React Firebase</p>											
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={Tracker} alt="fianance tracker application" />       
        <a href="https://financetracker-f047d.web.app/">
          <h2>FinanceTracker</h2>
          <div className="content">
            <p>Transaction tracking application</p>
            <p>Stack: HTML CSS JS React Firebase</p>											
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={Shinobi} alt="fianance tracker application" />       
        <a href="https://financetracker-f047d.web.app/">
          <h2>FinanceTracker</h2>
          <div className="content">
            <p>Transaction tracking application</p>
            <p>Stack: HTML CSS JS React Firebase</p>											
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={Todo} alt="fianance tracker application" />       
        <a href="https://financetracker-f047d.web.app/">
          <h2>FinanceTracker</h2>
          <div className="content">
            <p>Transaction tracking application</p>
            <p>Stack: HTML CSS JS React Firebase</p>											
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={Tweeter} alt="fianance tracker application" />       
        <a href="https://financetracker-f047d.web.app/">
          <h2>FinanceTracker</h2>
          <div className="content">
            <p>Transaction tracking application</p>
            <p>Stack: HTML CSS JS React Firebase</p>											
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={Book} alt="book shelf application" />       
        <a href="https://t-pirozzini.github.io/Book-Shelf/">
          <h2>Book Shelf</h2>
          <div className="content">
            <p>Book Shelf/Library application</p>
            <p>Stack: HTML CSS JS</p>
          </div>
        </a>
      </article> 

    </div>

    {/* Responsive web design */}
    <h3 className='heading'>Responsive Web Design</h3>
    <div className="projects">
      

      <article className="project">        
        <img src={TwelveCol} alt="dnd application" />       
        <a href="https://t-pirozzini.github.io/landing_page/">
          <h2>D&D Landing Page</h2>
          <div className="content">
            <p>A Landing Page for my Rhyme of the Frostmaiden❄️ D&D Campaign</p>
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={Admin} alt="dnd application" />       
        <a href="https://t-pirozzini.github.io/landing_page/">
          <h2>D&D Landing Page</h2>
          <div className="content">
            <p>A Landing Page for my Rhyme of the Frostmaiden❄️ D&D Campaign</p>
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={HolyGrail} alt="dnd application" />       
        <a href="https://t-pirozzini.github.io/landing_page/">
          <h2>D&D Landing Page</h2>
          <div className="content">
            <p>A Landing Page for my Rhyme of the Frostmaiden❄️ D&D Campaign</p>
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={Masonry} alt="dnd application" />       
        <a href="https://t-pirozzini.github.io/landing_page/">
          <h2>D&D Landing Page</h2>
          <div className="content">
            <p>A Landing Page for my Rhyme of the Frostmaiden❄️ D&D Campaign</p>
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={Portfolio} alt="dnd application" />       
        <a href="https://t-pirozzini.github.io/landing_page/">
          <h2>D&D Landing Page</h2>
          <div className="content">
            <p>A Landing Page for my Rhyme of the Frostmaiden❄️ D&D Campaign</p>
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={Signup} alt="dnd application" />       
        <a href="https://t-pirozzini.github.io/landing_page/">
          <h2>D&D Landing Page</h2>
          <div className="content">
            <p>A Landing Page for my Rhyme of the Frostmaiden❄️ D&D Campaign</p>
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={Dnd} alt="dnd application" />       
        <a href="https://t-pirozzini.github.io/landing_page/">
          <h2>D&D Landing Page</h2>
          <div className="content">
            <p>A Landing Page for my Rhyme of the Frostmaiden❄️ D&D Campaign</p>
          </div>
        </a>
      </article>
      <article className="project">        
        <img src={Restaurant} alt="restaurant application" />       
        <a href="https://t-pirozzini.github.io/Restaurant-Page/">
          <h2>Restaurant Page</h2>
          <div className="content">
            <p>Simple restaurant page application</p>
            <p>Stack: HTML CSS JS</p>
          </div>
        </a>
      </article>

    </div>

    {/* Games */}
    <h3 className='heading'>Games</h3>
    <div className="projects">

      <article className="project">        
        <img src={RPS} alt="rock, paper, scissors application" />       
        <a href="https://t-pirozzini.github.io/Rock-Paper-Scissors/">
          <h2>Rock/Paper/Scissors</h2>
          <div className="content">
            <p>Rock, Paper, Scissors game vs AI</p>											
          </div>
        </a>
      </article>

      <article className="project">        
        <img src={Etch} alt="etch n sketch application" />       
        <a href="https://t-pirozzini.github.io/Etch-N-Sketch/">
          <h2>Etch-N-Sketch</h2>
          <div className="content">
            <p>Etch-N-Sketch drawing application</p>
            <p>Stack: HTML CSS JS</p>
          </div>
        </a>
      </article>

      <article className="project">        
        <img src={Calculator} alt="calculator application" />       
        <a href="https://t-pirozzini.github.io/Calculator/">
          <h2>Calculator</h2>
          <div className="content">
            <p>Calculator application</p>
            <p>Stack: HTML CSS JS</p>
          </div>
        </a>
      </article>  

      <article className="project">        
        <img src={Ttt} alt="tic-tac-toe application" />       
        <a href="https://t-pirozzini.github.io/Tic-Tac-Toe/">
          <h2>Tic-Tac-Toe</h2>
          <div className="content">
            <p>Tic-Tac-Toe application</p>
            <p>Stack: HTML CSS JS</p>
          </div>
        </a>
      </article>

    </div>
    </div>
  )
}
