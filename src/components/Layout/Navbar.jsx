import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex gap-3"> {/* Navbar menu content here */} 
        <NavLink to='/' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Home</NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>About</NavLink> 
        <NavLink to='/login' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Login</NavLink> 
        <NavLink to='/register' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Register</NavLink>


        </div>
    );
};

export default Navbar;