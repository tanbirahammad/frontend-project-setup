import { createBrowserRouter } from "react-router-dom"
import App from '../App'
import About from "../page/About";
import Login from "../page/Login";
import Register from "../page/Register";
import AdminLayout from "../components/Layout/AdminLayout";
import Home from "../page/Home";


const routes=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'about',
        element:<About/>, 
            },
           
        ]
    },
    
    {
        path:'/login',
        element:<Login/>,
    },
    {
        path:'/register',
        element:<Register/>,
    },
    // Admin Dashboard Routes Starts
    {
        path:'/admin',
        element:<AdminLayout/>,
        children:[
            
        ]
    },
    // Admin Dashboard Routes End






])

export default routes;