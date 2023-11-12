import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-3"> {/* Navbar menu content here */} <NavLink to='/about' className={({isActive})=>isActive?'btn btn-primary btn-sm':'btn btn-ghost btn-sm'}>About</NavLink> <NavLink to='/login' className={({isActive})=>isActive?'btn btn-primary btn-sm':'btn btn-ghost btn-sm'}>Login</NavLink> <NavLink to='/register' className={({isActive})=>isActive?'btn btn-primary btn-sm':'btn btn-ghost btn-sm'}>Register</NavLink> 
      
      </div>
    );
};

export default Sidebar;