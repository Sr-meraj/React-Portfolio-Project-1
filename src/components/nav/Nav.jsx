import { BsHouseDoor } from 'react-icons/bs';
import { BiBook, BiMessageSquareDetail, BiUser } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

import './Nav.css'
import { useState } from 'react';
const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}> <BsHouseDoor /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} > <BiUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiBook /></a>
            <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}> <RiServiceLine /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail /></a>
        </nav>
    );
};

export default Nav;