import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as MdManageAccounts from "react-icons/fa";
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Manage park',
    path: '/report',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard',
    path: '/galery',
    icon: <AiIcons.AiOutlinePicture />,
    cName: 'nav-text'
  },
  {
    title: 'User',
    path: '/user',
    icon: <AiIcons.AiOutlineUsergroupAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Streaming',
    path: '/notifications',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text'
  }
];
