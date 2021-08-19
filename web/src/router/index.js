import Index from '@views/home'
import Data from '@views/data';
import User from '@views/user';
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
  }
];

export default routes