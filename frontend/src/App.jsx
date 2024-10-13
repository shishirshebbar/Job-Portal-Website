
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/structure/Navbar'
import Login from './components/authorization/Login'
import Home from './components/Home'
import Signup from './components/authorization/Signup'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import ViewProfile from './components/ViewProfile'
import JobDescription from './components/JobDescription'



const approuter= createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:"description/:id",
    element:<JobDescription/>
  },  
  {
    path:'/browse',
    element:<Browse/>

  },
  {
    path:'/profile',
    element:<ViewProfile/>
  }
])
function App() {


  return (
    <div>
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default App
