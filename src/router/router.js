import FrontKnowShow from '../components/FrontKnowShow'
//import Main from '../components/Main'
import HomePage from '../components/HomePage'
import AddNewCourse from '../components/AddNewCourse'
import Prepostion from '../components/Preposition'

const routes = [
    {path:'/',component:HomePage},
    {path:'/view',component:FrontKnowShow},
    {path:'/addNewCourse',component:AddNewCourse},
    {path:'/preposition',component:Prepostion}
    
  ]

  export default routes