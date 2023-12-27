import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData=[
    {
        title: 'Home',
        path:'/Pages/Home',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: 'Freinds',
        path:'/Pages/Friends',
        icon:<FaIcons.FaUserFriends/>,
        cName:'nav-text'
    },
    {
        title: 'Profile',
        path:'/Pages/Profile',
        icon:<FaIcons.FaUser/>,
        cName:'nav-text'
    } 
]
