import Empanada from '../img/empanada.jpg';
import Ceviche from '../img/ceviche.jpg';
import Provoleta from '../img/provoleta.jpg';
import Asado from '../img/asado.jpg';
import LomoSaltado from '../img/lomosaltado.jpg';
import Chorizos from '../img/chorizos.jpg';
import Alfajor from '../img/alfajor.jpg';
import Suspiro from '../img/suspiro.png';
import Flan from '../img/flan.jpg';

export default function Menu() {
  const content = document.getElementById('content');
  content.innerHTML = ''; //Clean the content

  const title = document.createElement('h1');
  title.classList.add('title');

  title.textContent = 'Our Menu';
  const text = document.createElement('p');
  text.classList.add('text');
  text.textContent =
    'At La Pampa y Sabor, we pride ourselves on offering a diverse selection of traditional Argentine and Peruvian dishes, made with the freshest ingredients and cooked to perfection.';

  //Menu container (GRID)
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  //function to add each menu-item
  function createMenuElement(menuType, title, desc, imgSrc) {
    const image = document.createElement('img');
    image.src = imgSrc;
    image.alt = title;
    image.classList.add('menu-item-img');

    const titleElement = document.createElement('p');
    titleElement.classList.add('menu-text', 'menu-title');
    titleElement.textContent = title;

    const descElement = document.createElement('p');
    descElement.classList.add('menu-text');
    descElement.textContent = desc;

    const menuItem = document.createElement('div');
    menuItem.classList.add('item');

    menuItem.appendChild(image);
    menuItem.appendChild(titleElement);
    menuItem.appendChild(descElement);

    menuType.appendChild(menuItem);
    return menuType;
  }

  //Appetizers title
  const appetizersTitle = document.createElement('h1');
  appetizersTitle.classList.add('section-title');
  appetizersTitle.textContent = 'Appetizers';

  //Appetizers container
  const appetizers = document.createElement('div');
  appetizers.classList.add('section-container');

  //Creating appetizer items
  createMenuElement(
    appetizers,
    'Empanadas',
    'Fresh fish marinated in lime juice, with onions, cilantro, and a touch of Peruvian spice.',
    Empanada
  );
  createMenuElement(
    appetizers,
    'Ceviche',
    'Handmade pastries filled with beef, chicken, or spinach and cheese.',
    Ceviche
  );
  createMenuElement(
    appetizers,
    'Provoleta',
    'Grilled provolone cheese topped with oregano and served with fresh bread.',
    Provoleta
  );

  //Main Courses title
  const mainCoursesTitle = document.createElement('h1');
  mainCoursesTitle.classList.add('section-title');
  mainCoursesTitle.textContent = 'Main Courses';

  //Main Courses container
  const mainCourses = document.createElement('div');
  mainCourses.classList.add('section-container');

  //Creating main courses items
  createMenuElement(
    mainCourses,
    'Asado',
    'Traditional Argentine BBQ with a selection of meats including ribs, flank steak, and sausages.',
    Asado
  );
  createMenuElement(
    mainCourses,
    'Lomo Saltado',
    'Stir-fried beef with onions, tomatoes, and fries, served with rice.',
    LomoSaltado
  );
  createMenuElement(
    mainCourses,
    'Bife de Chorizo',
    'Juicy sirloin steak grilled to your liking, served with roasted vegetables.',
    Chorizos
  );

  //Desserts title
  const dessertsTitle = document.createElement('h1');
  dessertsTitle.classList.add('section-title');
  dessertsTitle.textContent = 'Desserts';

  //Main Courses container
  const desserts = document.createElement('div');
  desserts.classList.add('section-container');

  //Creating main courses items
  createMenuElement(
    desserts,
    'Alfajores',
    'Traditional Argentine cookies filled with dulce de leche.',
    Alfajor
  );
  createMenuElement(
    desserts,
    'Suspiro a la Limeña',
    'Creamy Peruvian dessert made with condensed milk and cinnamon.',
    Suspiro
  );
  createMenuElement(
    desserts,
    'Flan',
    'Creamy caramel flan served with whipped cream.',
    Flan
  );

  content.appendChild(title);
  content.appendChild(text);
  content.appendChild(menuContainer);

  menuContainer.appendChild(appetizersTitle);
  menuContainer.appendChild(appetizers);

  menuContainer.appendChild(mainCoursesTitle);
  menuContainer.appendChild(mainCourses);

  menuContainer.appendChild(dessertsTitle);
  menuContainer.appendChild(desserts);
}
