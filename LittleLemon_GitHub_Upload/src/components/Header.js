import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../assets/logo.svg';
export default function Header(){return <header className="site-header"><div className="container header-inner"><Link to="/" aria-label="Little Lemon home"><img className="logo" src={logo} alt="Little Lemon"/></Link><Nav/></div></header>}
