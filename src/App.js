import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import Home from './components/Home';
import SignUpPage from './components/SignUpPage';
import Nature from './components/navigationPages/Nature';

function App() {
  return (
    <>
   <BrowserRouter >
   <Routes>
    <Route path='/' element={ <Home /> } />
    <Route path='/about' element={ <HeroSection /> } />
    <Route path='/signup-page' element={ <SignUpPage />} />
    <Route path='/nature' element={ <Nature />}/>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
