
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Router';

function App() {
  return (
    <div className="max-width: 1280px">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
