import React from 'react';
import Navbar from './components/Navbar/MyNavbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Search from './pages/search';
import SignUp from './pages/signup';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PackagePage } from './components/PackageHandler/PackagePage';
import { Packages } from './components/PackageHandler/Packages';
import { FeaturedStays } from './components/FeaturedStays/FeaturedStays';

function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/search' element={<Search/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='FeaturedStays' element={<FeaturedStays/>} />
        <Route path='packages' element={<Packages/>} />
        <Route path='packages/:packageid' element={<PackagePage/>}/>
    </Routes>
    <Footer/>
    </Router>
);
}
  
export default App;
