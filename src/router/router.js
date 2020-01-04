import FrontKnowShow from '../components/FrontKnowShow'
//import Main from '../components/Main'
import HomePage from '../components/HomePage'
import AddNewCourse from '../components/AddNewCourse'

const routes = [
    {path:'/',component:HomePage},
    {path:'/view',component:FrontKnowShow},
    {path:'/addNewCourse',component:AddNewCourse}
    
  ]

  export default routes