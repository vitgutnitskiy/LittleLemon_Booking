import { Link } from 'react-router-dom';
import photo from '../assets/restauranfood.jpg';
export default function Hero(){return <section className="hero"><div className="container hero-layout"><div><p className="eyebrow">Fresh flavors, warm welcomes</p><h1>Little Lemon</h1><p className="hero-location">Chicago</p><p>Bright Mediterranean dishes, familiar faces, and a seat waiting for you.</p><Link className="button button-yellow" to="/booking">Reserve a table</Link></div><img src={photo} alt="Freshly prepared Mediterranean food"/></div></section>}
