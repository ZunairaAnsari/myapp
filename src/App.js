import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import Home from './components/Home';
import SignUpPage from './components/SignUpPage';

function App() {
  return (
   <>
   <BrowserRouter >
   <Routes>
    <Route path='/' element={ <Home /> } />
    <Route path='/about' element={ <HeroSection /> } />
    <Route path='/signup-page' element={ <SignUpPage />} />
    <Route />
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
