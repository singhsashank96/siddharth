import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

  const Home = lazy(() => import('./components/home/Home'));
  const Checkout = lazy(() => import('./components/checkout/Checkout'));
  const Finalpage = lazy(() => import('./components/finalpage/Finalpage'));

  function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/finalpage' element={<Finalpage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div >
  );
}

export default App;
