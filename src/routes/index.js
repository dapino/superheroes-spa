import Header from '../components/Header.js';
import Home from '../views/Home.js';
import Character from '../views/Character.js';
import Error404 from '../views/Error404.js';
const routes = {
  '/': Home,
  '/:id': Character,
  '/about': 'about',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
};

export default router;
