import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <ul id='mainmenu'
            class="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
            <NavLink to={'/'}>
                <li>
                    <a class="mobile-menu-items" >
                        <span class="mr-2 text-xl">
                            <i class="fa-regular fa-user"></i>
                        </span>About </a>
                </li>
            </NavLink>
            <NavLink to={'/resume'}>
                <li>
                    <a class="mobile-menu-items">
                        <span class="mr-2 text-xl">
                            <i class="fa-regular fa-file-lines"></i>
                        </span>Resume </a>
                </li>
            </NavLink>
            <NavLink to={'/works'}>
                <li>
                    <a class="mobile-menu-items">
                        <span class="mr-2 text-xl">
                            <i class="fas fa-briefcase"></i>
                        </span>works </a>
                </li>
            </NavLink>
            <NavLink to={'/contact'}>
                <li>
                    <a class="mobile-menu-items">
                        <span class="mr-2 text-xl">
                            <i class="fa-solid fa-address-book"></i>
                        </span> Contact </a>
                </li>
            </NavLink>
        </ul>
    )
}

export default Header
