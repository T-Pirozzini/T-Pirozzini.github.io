import './App.css';
import Projects from './components/Projects.jsx'
import logo from './assets/images/triforce.png'


function App() {
  return (
    <div className="App">
      <a href="index.html">
			  <img src={logo} className="triforce" alt="triforce" />
			</a>
      <h1>Welcome to my Portfolio!</h1>
			<p>Straight to the action - hover + click to access live demos & code below...</p>
      <Projects />
    </div>
  );
}

export default App;
