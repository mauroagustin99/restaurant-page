import './style.css';
import Home from './pages/home.js';
import Contact from './pages/contact.js';
import Menu from './pages/menu.js';
import About from './pages/about.js';

document.addEventListener('DOMContentLoaded', () => {
  Home();

  document.getElementById('home-btn').addEventListener('click', Home);
  document.getElementById('menu-btn').addEventListener('click', Menu);
  document.getElementById('about-btn').addEventListener('click', About);
  document.getElementById('contact-btn').addEventListener('click', Contact);
});
