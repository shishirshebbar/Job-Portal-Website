
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
import Companies from './components/admin/Companies'
import CreateCompany from './components/admin/CreateCompany'
import CompanySetup from './components/admin/CompanySetup'
import Adminjobs from './components/admin/Adminjobs'
import AddNewJob from './components/admin/AddNewJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoutes from './components/admin/ProtectedRoutes'



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
  },
  {
    path:"/admin/companies",
    element:<Companies/>
  },
  {
    path:"/admin/companies",
    element:<ProtectedRoutes><Companies/></ProtectedRoutes>
  },
  {
    path:"/admin/companies/create",
    element:<ProtectedRoutes><CreateCompany/></ProtectedRoutes>
  },
  {
    path:"/admin/companies/:id",
    element:<ProtectedRoutes><CompanySetup/></ProtectedRoutes>
  },
  {
    path:"/admin/jobs",
    element:<ProtectedRoutes><Adminjobs/></ProtectedRoutes>
  },
  {
    path:"/admin/jobs/create",
    element:<ProtectedRoutes><AddNewJob/></ProtectedRoutes>
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<ProtectedRoutes><Applicants/></ProtectedRoutes>
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
