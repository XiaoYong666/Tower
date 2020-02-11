//import Main from '../components/Main'
import Main from "../components/Main";
import BricksMain from "../components/bricks/Main";
import bricksDetails from "../components/bricks/Details/Main";
import construction from "../components/construction/Main";
import tower from "../components/tower/Main.vue"
import towerdetail from "../components/tower/detail/Main.vue"

const routes = [
  {path:"*",component:Main},
  { path: "/", component: Main },
  { path: "/bricks", component: BricksMain },
  { path: "/brickDetails", component: bricksDetails },
  { path: "/construction", component: construction },
  { path: "/tower", component: tower},
  {path:"/towerDetail",component:towerdetail}
  //  { path: "/", component: Main },
  //  { path: "/preposition", component: NewTower }
];

export default routes;
