import { UserDetails } from './cmps/UserDetails';
import { Favorites } from './pages/Favorites';
import { HomePage } from './pages/HomePage';


const routes = [
  {
    path: '/favorites',
    component: Favorites
  },

  {
    path: '/:userId',
    component: UserDetails
  },

  {
    path: '/',
    component: HomePage,
  },


];

export default routes;
