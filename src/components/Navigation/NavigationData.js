import React from 'react'
// import { AiOutlineConsoleSql } from 'react-icons/ai'
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
// import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import * as VscIcons from "react-icons/vsc";
import * as CgIcons from "react-icons/cg";
import * as ImIcons from "react-icons/im";






export const navigationData = [
    {
        title: 'Home',
        path: "/",
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: 'Account',
        path: "",
        icon: <VscIcons.VscAccount />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: "",
        icon: <VscIcons.VscSettingsGear />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: "",
        icon: <BiIcons.BiLogOut />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: "",
        icon: <HiIcons.HiOutlineMail />,
        cName: 'nav-text'
    },
    {
        title: 'Dark Mode',
        path: "",
        icon: <CgIcons.CgDarkMode />,
        cName: 'nav-text'
    },
    {
        title: 'My Orgs',
        path: "",
        icon: <ImIcons.ImClubs />,
        cName: 'nav-text'
    },
]