import React from 'react';
import Menu from './Menu/Menu';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <nav>
            <a href="">Patitas Sucias. <i class="fa-solid fa-paw"></i></a>
            
            <div className="menu">
                <Menu/>
            </div>

            <div className='cart'>
                <CartWidget qCart={3}/>
            </div>
        </nav>
    );
}

export default Navbar;
