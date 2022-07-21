import './App.css';
import Projects from './components/Projects.jsx'
import CodeLogo from './assets/images/Code-Logo.png'


function App() {
  return (
    <div className="App">
      <div className="header">        
        <a href="index.html">
          <img src={CodeLogo} className="logo" alt="logo" />
        </a>
        <h1>Welcome to my Portfolio!</h1>
      </div>
			<p>Straight to the action - hover + click to access live demos & code below...</p>
      <Projects />
    </div>
  );
}

export default App;
