import Index from '@views/home'
import Data from '@views/data';
import User from '@views/user';
import Login from '@views/login';
const routes = [
  {
    path: "/",
    component: Index
  },
  {
    path: "/data",
    component: Data
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/login",
    component: Login
  }
];

export default routes