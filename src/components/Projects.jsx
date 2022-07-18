import React from 'react'

// styles
import './Projects.css'

// project images
import Spuddy from '../assets/images/spuddies-home.png'

export default function Projects() {
  
  return (    
    <div className="projects">    
      <article className="project">        
        <img src={Spuddy} alt="spuddies restaurant application" />       
        <a href="https://spuddies-food-ordering.herokuapp.com/">
          <h2>Spuddies Restaurant</h2>
          <div>											
            <p>Food ordering application</p>
            <p>Stack: HTML CSS JS PostgreSQL</p>
            <p>API: Twilio</p>
          </div>
        </a>        
      </article>
      
      <article>
        <span className="image">
          {/* <img src="images/food-truck-home.png" style="height: 280px;" alt="food truck application" /> */}
        </span>
        <a href="https://628686b4787a3b03908a9839--chipper-buttercream-16e62d.netlify.app/">
          <h2>FoodTruck Finder</h2>
          <div className="content">
            <p>Food truck locating application</p>
            <p>Stack: HTML CSS JS React PostgreSQL</p>
            <p>API: Leaflet Mapbox Stripe</p>
          </div>
        </a>
      </article>
      <article className="style3">
        <span className="image">
          {/* <img src="images/GPT-home.png" style="height: 280px;" alt="GPT-3 application" /> */}
        </span>
        <a href="https://62857e96c2d87717e882e101--earnest-swan-080405.netlify.app/">
          <h2>Fun With GPT-3</h2>
          <div className="content">
            <p>OpenAI communication application</p>
            <p>Stack: HTML CSS JS React</p>
            <p>API: GPT-3 OpenAI</p>
          </div>
        </a>
      </article>
      <article className="style4">
        <span className="image">
          {/* <img src="images//finance-tracker-home.png" style="height: 280px;" alt="Finance Tracking application" /> */}
        </span>
        <a href="https://financetracker-f047d.web.app/">
          <h2>FinanceTracker</h2>
          <div className="content">
            <p>Transaction tracking application</p>
            <p>Stack: HTML CSS JS React Firebase</p>											
          </div>
        </a>
      </article>
      <article className="style5">
        <span className="image">
          {/* <img src="images/rps-home.png" style="height: 280px;" alt="Rock Paper Scissors game" /> */}
        </span>
        <a href="https://t-pirozzini.github.io/Rock-Paper-Scissors/">
          <h2>Rock/Paper/Scissors</h2>
          <div className="content">
            <p>Rock, Paper, Scissors game vs AI</p>											
          </div>
        </a>
      </article>
      <article className="style6">
        <span className="image">
          {/* <img src="images/etch-home.png" style="height: 280px;" alt="Etch-n-sketch application" /> */}
        </span>
        <a href="https://t-pirozzini.github.io/Etch-N-Sketch/">
          <h2>Etch-N-Sketch</h2>
          <div className="content">
            <p>Etch-N-Sketch drawing application</p>
            <p>Stack: HTML CSS JS</p>
          </div>
        </a>
      </article>
      <article className="style2">
        <span className="image">
          {/* <img src="images/calculator-home.png" style="height: 280px;" alt="" /> */}
        </span>
        <a href="https://t-pirozzini.github.io/Calculator/">
          <h2>Calculator</h2>
          <div className="content">
            <p>Calculator application</p>
            <p>Stack: HTML CSS JS</p>
          </div>
        </a>
      </article>
      <article className="style3">
        <span className="image">
          {/* <img src="images/dnd-home.png" style="height: 280px;" alt="" /> */}
        </span>
        <a href="https://t-pirozzini.github.io/landing_page/">
          <h2>D&D Landing Page</h2>
          <div className="content">
            <p>A Landing Page for my Rhyme of the Frostmaiden❄️ D&D Campaign</p>
          </div>
        </a>
      </article>
      <article className="style1">
        <span className="image">
          {/* <img src="images/cooking-home.png" style="height: 280px;" alt="" /> */}
        </span>
        <a href="https://cooking-web-application.firebaseapp.com/">
          <h2>Recipe Book</h2>
          <div className="content">
            <p>Recipe book application</p>
            <p>Stack: HTML CSS JS React Firebase</p>
          </div>
        </a>
      </article>
      <article className="style5">
        <span className="image">
          {/* <img src="images/restaurant-home.png" style="height: 280px;" alt="" /> */}
        </span>
        <a href="https://t-pirozzini.github.io/Restaurant-Page/">
          <h2>Restaurant Page</h2>
          <div className="content">
            <p>Simple restaurant page application</p>
            <p>Stack: HTML CSS JS</p>
          </div>
        </a>
      </article>
      <article className="style6">
        <span className="image">
          {/* <img src="images/tictactoe-home.png" style="height: 280px;" alt="" /> */}
        </span>
        <a href="https://t-pirozzini.github.io/Tic-Tac-Toe/">
          <h2>Tic-Tac-Toe</h2>
          <div className="content">
            <p>Tic-Tac-Toe application</p>
            <p>Stack: HTML CSS JS</p>
          </div>
        </a>
      </article>
      <article className="style4">
        <span className="image">
          {/* <img src="images//bookshelf-home.png" style="height: 280px;" alt="" /> */}
        </span>
        <a href="https://t-pirozzini.github.io/Book-Shelf/">
          <h2>Book Shelf</h2>
          <div className="content">
            <p>Book Shelf/Library application</p>
            <p>Stack: HTML CSS JS</p>
          </div>
        </a>
      </article>      
    </div>
  )
}
