
import './App.css';
import AvailableService from './Components/AvailableService/AvailableService';
import Booking from './Components/Booking';
import BookMain from './Components/BookMain/BookMain';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="max-width: 1280px">
      <Navbar></Navbar>
      <Hero></Hero>
      <BookMain></BookMain>
    </div>
  );
}

export default App;
