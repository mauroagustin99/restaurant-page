export default function Home() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  content.innerHTML = `<h1>Welcome to My Restaurant Page</h1>`;
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('main');

  const heroText = document.createElement('div');
  heroText.classList.add('hero-text');

  const headline = document.createElement('h2');
  headline.textContent = 'Meet, Eat and Enjoy True Taste';

  const imgCont = document.createElement('div');
  imgCont.classList.add('hero-image');

  homeDiv.appendChild(heroText);
  heroText.appendChild(headline);
  homeDiv.appendChild(imgCont);
  content.appendChild(homeDiv);
}
