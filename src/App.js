
import './App.css';
import './style/main.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <div className='bg-light'>
      <NavigationBar />
      <Intro />
      </div>
      <div className='bg-light h-100'>
        <Menu />
      </div>
    </div>
  );
}

export default App;
