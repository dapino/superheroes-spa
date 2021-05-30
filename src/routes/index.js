import Header from '../components/Header.js';
import Home from '../views/Home.js';
import Characters from '../views/Characters.js';
import Error404 from '../views/Error404.js';
import getHash from '../utils/getHash.js';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Characters,
  '/about': 'about',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] || Error404;
  content.innerHTML = await render();
};

export default router;
