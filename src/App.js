
import './App.css';
import BookMain from './Components/BookMain/BookMain';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="max-width: 1280px">
      <Navbar></Navbar>
      <Hero></Hero>
      <BookMain></BookMain>
      <Footer></Footer>
    </div>
  );
}

export default App;
