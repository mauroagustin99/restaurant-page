export default function Home() {
  //I'll use .innerHTML to show a easy method to make the page just writing text
  const content = document.getElementById('content');

  content.innerHTML = `<h1 class="title">Welcome to La Pampa y Sabor!</h1>
  <p class="text">Experience the vibrant fusion of Argentine and Peruvian cuisine right here in the heart of the city. At La Pampa y Sabor, we bring you the best of both worlds, from succulent steaks to exquisite ceviche. Whether you're looking for a romantic dinner or a family gathering, our warm and inviting atmosphere will make you feel right at home.</p>
  <h2 class="subtitle">Join us for a culinary journey across Argentina and Peru.</h2>
  <p class="end text">Discover our story and passion for great food.</p>
  `;
}
