export default function About() {
  const content = document.getElementById('content');

  //I'll use .innerHTML to show a easy method to make the page just writing text
  content.innerHTML = `<h1 class="title">Get in Touch</h1>
  <p class="text">We'd love to hear from you! Whether you have questions about our menu, want to make a reservation, or just want to say hello, feel free to reach out to us.</p>
  <h2 class="subtitle">Contact Information:</h2>
    <ul>
  <li>Phone: +1 234 567 890</li>
  <li>Email: info@lapampaysabor.com</li>
  <li>Address: 123 Fake Street, Fake City, Fake State, Fake ZIP Code</li>
  </ul>
  <h2 class="subtitle">Opening Hours:</h2>
  <ul>
  <li>Monday - Thursday: 11:00 AM - 10:00 PM</li>
  <li>Friday - Saturday: 11:00 AM - 11:00 PM</li>
  <li>Sunday: 12:00 PM - 9:00 PM</li>
  </ul>
  <h2 class="subtitle">Follow Us:</h2>
  <p class="text">Stay updated with our latest news, special offers, and events by following us on social media.</p>
  <ul>
  <li>Facebook: facebook.com/fakefacebook</li>
  <li>Instagram: @mauromarcosano</li>
  
  </ul>
  `;
}
