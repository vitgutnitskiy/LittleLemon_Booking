import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import ConfirmedBooking from './pages/ConfirmedBooking';
import './App.css';
export default function App() {
 return <BrowserRouter><a className="skip-link" href="#main">Skip to content</a><Header/><Routes>
  <Route path="/" element={<Home/>}/><Route path="/booking" element={<Booking/>}/><Route path="/confirmed" element={<ConfirmedBooking/>}/><Route path="*" element={<main id="main" className="container"><h1>Page not found</h1></main>}/>
 </Routes><Footer/></BrowserRouter>;
}
