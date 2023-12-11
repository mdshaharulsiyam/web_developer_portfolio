import React from 'react'
import { NavLink } from 'react-router-dom'

const DextopHeader = () => {
    return (
        <ul id='mainmenu' class="flex justify-center ">
            <NavLink to={'/'}>
                <li> <a class="menu-item">
                    <span class="text-xl mb-1">
                        <i class="fa-regular fa-user"></i>
                    </span> About </a></li>
            </NavLink>
            <NavLink to={'/resume'}>
                <li> <a class="menu-item" >
                    <span class="text-xl mb-1">
                        <i class="fa-regular fa-file-lines"></i>
                    </span> Resume </a>
                </li>
            </NavLink>
            <NavLink to={'/works'}>
                <li><a class="menu-item">
                    <span class="text-xl mb-1">
                        <i class="fas fa-briefcase"></i>
                    </span> works </a></li>
            </NavLink>
            {/* <li> <a class="menu-item" href="contactOne.html">
                <span class="text-xl mb-1">
                    <i class="fa-solid fa-address-book"></i>
                </span> Contact </a></li> */}
        </ul>
    )
}

export default DextopHeader
