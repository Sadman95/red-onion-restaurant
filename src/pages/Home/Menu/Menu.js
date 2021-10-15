import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='d-flex justify-content-center my-5'>
            <ul className='p-0'>
                <NavLink activeClassName='text-danger text-decoration-underline' to='/breakfast' className='mx-4 text-decoration-none'>Breakfast</NavLink>
                <NavLink activeClassName='text-danger text-decoration-underline' to='/lunch' className='mx-4 text-decoration-none'>Lunch</NavLink>
                <NavLink activeClassName='text-danger text-decoration-underline' to='/dinner' className='mx-4 text-decoration-none'>Dinner</NavLink>
            </ul>
        </div>
    );
};

export default Menu;