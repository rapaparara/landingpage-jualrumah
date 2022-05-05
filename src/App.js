
import './App.css';
import './style/main.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <div className='intro-bg bg-light'>
      <NavigationBar />
      <Intro />
      </div>
      <div className='intro-bg bg-light'>
        <Menu />
      </div>
    </div>
  );
}

export default App;
