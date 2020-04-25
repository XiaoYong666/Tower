//import Main from '../components/Main'
//import Main from "../components/Main";
//import BricksMain from "../components/bricks/Main";
//import bricksDetails from "../components/bricks/Details/Main";
//import construction from "../components/construction/Main";
//import tower from "../components/tower/Main.vue";
//import towerdetail from "../components/tower/detail/Main.vue";
import BrickEditor from "../components/bricks/Editor/MarkdownEditor";
import article from "../components/bricks/Details/articleV2.vue";
import HomeV2 from "../components/HomeMainV2.vue";
import brick from "../components/bricks/brickV2.vue";
import dataBase from "../components/dataView/dataViewMain"
import selfnavbar from "../components/component_common/selfnavbar.vue"
import login from "../components/login/login.vue"
import searchPage from "../components/seachPage/search"

const routes = [
  { path: "*", component: HomeV2 },
  { path: "/", component: HomeV2 },
  { path: "/brick/:id", component: brick,props:true },
//  { path: "/brick/:id", component: brick,props:true },
//  { path: "/brickDetails", component: bricksDetails },
//  { path: "/construction", component: construction },
  { path: "/dataBase", component: dataBase },
//  { path: "/tower", component: tower },
//  { path: "/towerDetail", component: towerdetail },
  { path: "/markdownEditor/:id", component: BrickEditor },
  { path: "/article/:id", component: article},
  { path: "/navbar", component: selfnavbar },
  { path: "/login",component:login},
  { path: "/search/",component:searchPage}
  //  { path: "/", component: Main },
  //  { path: "/preposition", component: NewTower }
];

export default routes;
