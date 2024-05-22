export default function Menu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  content.innerHTML = `<h1>Welcome to My Restaurant Page</h1>`;
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('main');

  const heroText = document.createElement('div');
  heroText.classList.add('hero-text');

  const headline = document.createElement('h2');
  headline.textContent = 'Menu!!';

  const imgCont = document.createElement('div');
  imgCont.classList.add('hero-image');

  homeDiv.appendChild(heroText);
  heroText.appendChild(headline);
  homeDiv.appendChild(imgCont);
  content.appendChild(homeDiv);
}
