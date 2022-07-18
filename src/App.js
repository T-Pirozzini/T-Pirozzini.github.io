import './App.css';
import Projects from './components/Projects.jsx'
import logo from './assets/images/triforce.png'

function App() {
  return (
    <div className="App">
      <a href="index.html" className="logo">
				<span className="symbol"><img src={logo} alt="triforce" /></span>
			</a>
      <h1>Welcome to my Portfolio!</h1>
			<p>Straight to the action - hover + click to access live demos below...</p>
      <Projects />
    </div>
  );
}

export default App;
