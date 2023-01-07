
import './App.css';
import Booking from './Components/Booking';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="max-width: 1280px">
      <Navbar></Navbar>
      <Hero></Hero>
      <Booking></Booking>
    </div>
  );
}

export default App;
