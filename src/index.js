import './style.css';
import './menu.css';
import Background from './woman-taking-marinated-beef-served-with-onion-sumac-herbs.jpg';
import Home from './pages/home.js';
import Contact from './pages/contact.js';
import Menu from './pages/menu.js';
import About from './pages/about.js';

//Added buttons functionality by js
document.addEventListener('DOMContentLoaded', () => {
  //Function to add active state to the actual loadead button
  function loadPage(loadFunction, buttonId) {
    loadFunction(); //Load clicked button function
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach((button) => {
      button.classList.remove('active'); //Remove all active states
    });
    document.getElementById(buttonId).classList.add('active'); //Add active state to the actual clicked button
  }
  //Load home page
  loadPage(Home, 'home-btn');

  //Add event listeners to buttons
  document
    .getElementById('home-btn')
    .addEventListener('click', () => loadPage(Home, 'home-btn'));
  document
    .getElementById('menu-btn')
    .addEventListener('click', () => loadPage(Menu, 'menu-btn'));
  document
    .getElementById('about-btn')
    .addEventListener('click', () => loadPage(About, 'about-btn'));
  document
    .getElementById('contact-btn')
    .addEventListener('click', () => loadPage(Contact, 'contact-btn'));
});
