import Header from '../components/Header.js';
import Home from '../views/Home.js';
import Characters from '../views/Characters.js';
import Character from '../views/Character.js';
import Error404 from '../views/Error404.js';
import getHash from '../utils/getHash.js';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/characters/:page': Characters,
  '/character/:id': Character,
  '/about': 'about',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();

  let hash = getHash(1);
  let route = await resolveRoutes(hash);
  let render = routes[route] || Error404;
  content.innerHTML = await render();
};

export default router;
