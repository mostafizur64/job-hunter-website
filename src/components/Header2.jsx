import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header2 = () => {
    return (
        <div>
            
                <div className='bg-slate-50'>
                    <nav className='px-12  mx-auto flex justify-between items-center py-14'>
                        <NavLink to='/'><h1 className='text-2xl'>Job Hunter</h1></NavLink>
                        <div className='space-x-8 text-xl text-slate-400'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/statistics'>Statistics</NavLink>
                            <NavLink to='/appliedJobs'className={({ isActive }) => isActive ? "active" : 'default:'}>Applied Jobs</NavLink>
                            <NavLink to='/blog'>Blog</NavLink>
                        </div>
                        <div>
                            <button className='btn-primary'>Star Applying</button>
                        </div>
                    </nav>
                    <div className='text-center text-3xl'>Applied Jobs</div>
                    <img className='w-[200px] h-[150px]' src="https://i.ibb.co/qncFjm2/Vector.png" alt="image" />
                    <img className='absolute top-0 right-0 w-[180px] h-[135px]' src="https://i.ibb.co/9TC2cHZ/Vector-1.png" alt="" />

                </div>
           
        </div>
    );
};

export default Header2;