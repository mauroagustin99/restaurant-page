export default function Menu() {
  const content = document.getElementById('content');
  //I'll use .innerHTML to show a easy method to make the page just writing text
  content.innerHTML = `<h1 class="title">About Us</h1>
  <p class="text">La Pampa y Sabor was founded with a passion for bringing the rich culinary traditions of Argentina and Peru to the local community. Inspired by the diverse flavors of these two countries, our restaurant aims to deliver an unforgettable dining experience.</p>
  <h2 class="subtitle">Our Story</h2>
  <p class="text">Our journey began in Buenos Aires and Lima, where our founders fell in love with the vibrant cultures and bold flavors of Argentine and Peruvian cuisine. Bringing these experiences back home, La Pampa y Sabor was born to share the essence of Argentina and Peru with everyone who walks through our doors.</p>
  <h2 class="subtitle">Our Values</h2>
  <ul>
  <li>Authenticity: We stay true to traditional recipes and cooking methods.</li>
  <li>Quality: Only the finest ingredients make it to your plate.</li>
  <li>Passion: We are passionate about food and the joy it brings to our customers.</li>
  </ul>
  <h2 class="subtitle">Meet the Team</h2>
  <p class="text">Our talented chefs and friendly staff are dedicated to making your visit special. Come and meet the people who make La Pampa y Sabor a place worth visiting.</p>
  `;
}
