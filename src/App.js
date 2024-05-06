import logo from './logo.svg';
import './App.css';
import Index from './components/Index';
import Checkout from './components/Checkout';
import Finalpage from './components/Finalpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='finalpage' element={<Finalpage />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
