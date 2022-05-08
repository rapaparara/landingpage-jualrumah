
import './App.css';
import './style/main.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className='bg-light'>
      <NavigationBar />
      <Intro />
      </div>
      <div className='bg-light'>
        <Menu />
      </div>
      <div className='bg-primary footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
