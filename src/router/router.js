//import Main from '../components/Main'
//import Main from "../components/Main";
//import BricksMain from "../components/bricks/Main";
import bricksDetails from "../components/bricks/Details/Main";
import construction from "../components/construction/Main";
import tower from "../components/tower/Main.vue";
import towerdetail from "../components/tower/detail/Main.vue";
import BrickEditor from "../components/bricks/Editor/MarkdownEditor";
import BrickViewMainV2 from "../components/bricks/Details/ViewMainV2.vue";
import HomeV2 from "../components/HomeMainV2.vue";
import brickviewv2 from "../components/bricks/MainV2.vue";
import dataBase from "../components/dataView/dataViewMain"
import selfnavbar from "../components/component_common/selfnavbar.vue"
import login from "../components/login/login.vue"

const routes = [
  { path: "*", component: HomeV2 },
  { path: "/", component: HomeV2 },
  { path: "/bricks", component: brickviewv2 },
  { path: "/brickviewv2/:id", component: brickviewv2,props:true },
  { path: "/brickDetails", component: bricksDetails },
  { path: "/construction", component: construction },
  { path: "/dataBase", component: dataBase },
  { path: "/tower", component: tower },
  { path: "/towerDetail", component: towerdetail },
  { path: "/markdownEditor/:id", component: BrickEditor },
  { path: "/brickviewmainv2/:id", component: BrickViewMainV2},
  { path: "/navbar", component: selfnavbar },
  { path: "/login",component:login}
  //  { path: "/", component: Main },
  //  { path: "/preposition", component: NewTower }
];

export default routes;
