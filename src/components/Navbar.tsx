import React from 'react'

import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';

import logo from "../assets/img/logo.svg";

const Navbar = () : JSX.Element => {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      url: '/'
    },
  ];

  const start = () => (
    <a href='/'>
      <img alt="logo" className="mr-2" height="40"
        src={logo} />
    </a>
  );

  const end = () => (
    <InputText placeholder="Search" type="text" />
  );

  return (
    <div className='container'>
        <Menubar end={end} model={items} start={start} />
    </div>
  )
}

export default Navbar;
