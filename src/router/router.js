//import Main from '../components/Main'
import Main from "../components/Main";
import BricksMain from "../components/bricks/Main";
import bricksDetails from "../components/bricks/Details/Main";
import construction from "../components/construction/Main";

const routes = [
  { path: "/", component: Main },
  { path: "/bricks", component: BricksMain },
  { path: "/brickDetails", component: bricksDetails },
  { path: "/construction", component: construction }
  //  { path: "/", component: Main },
  //  { path: "/preposition", component: NewTower }
];

export default routes;
