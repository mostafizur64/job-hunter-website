import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='bg-slate-50'>
        <nav className='px-12  mx-auto flex justify-between items-center py-14'>
        <NavLink to='/'className={({ isActive }) => isActive ? "active" : 'default:'}>    
                    <h1 className='text-2xl'>Job Hunter</h1></NavLink>
            <div className='space-x-8 text-xl text-slate-400'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/appliedJobs'>Applied Jobs</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
            <div>
                <button className='btn-primary'>Star Applying</button>
            </div>
        </nav>
      
        </div>
        </div>
    );
};

export default Header;