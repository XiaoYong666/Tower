//import Main from '../components/Main'
import Main from "../components/SubjectDetail/Main";
import Welcome from "../components/Welcome/Main";
import NewTower from "../components/Tower/NewTower";

const routes = [
  { path: "/welcome", component: Welcome },
  { path: "/", component: Main },
  { path: "/preposition", component: NewTower }
];

export default routes;
