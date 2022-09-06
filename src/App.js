import logo from './logo.svg';
import './App.css';
import NavBarComp from './Components/NavBarComp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './Pages/MainPage';
import CartPage from './Pages/CartPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import SalesReportPage from './Pages/Admin/SalesReportPage';
import StocksPage from './Pages/Admin/StocksPage';
import Protected from './Protected';
function App() {
  return (
    <div className="App">
      <Router>
        <h1 className='shoplogo'>Happy Buying</h1>
        <NavBarComp />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/Signup' element={<SignupPage />} />
          <Route path='/stocks' element={<StocksPage />} />
          <Route path='/sales' element={<SalesReportPage />} />
          <Route path='/cart' element={<Protected Component={CartPage} />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
