import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Button } from 'primereact/button';

import banner from "../assets/img/hero-1.png";
import logo from "../assets/img/logo.svg";

const MainPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/available-classes').then(res => {
      const newData = [...res.data.items];
      setCourse(newData);
    });
  }, []);

  // console.log(course);

  return (
    <div className="App">
      <div className="grid grid-nogutter surface-0 text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">Create the screens</span>
            <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
            <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <Button className="mr-3 p-button-raised" data-testid="btn-more" label="Learn More"
              type="button" />
            <Button className="p-button-outlined" data-testid="btn-register" label="Register"
              type="button" />
          </section>
        </div>
        <div className="col-12 md:col-6 overflow-hidden">
          <img alt="hero-1" className="hidden md:block md:ml-auto md:h-full" src={banner}
            style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
        </div>
      </div>
      <div className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
      </div>

      <div className="surface-0 p-4">
        <div className="text-900 font-bold text-6xl mb-4 text-center">Lets Join Course</div>
        <div className="text-700 text-xl mb-6 text-center line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>

        <div className="grid justify-content-center">
          {course?.map((item: any) => (
            <div className="col-12 lg:col-4" key={item.id}>
              <div className="p-3 h-full">
                <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                  <div className="text-900 font-medium text-xl mb-2">{item.name}</div>
                  <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                  <div className="flex align-items-center">
                    <p className="ml-2">{item.description ? item.description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.'}</p>
                  </div>
                  <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                  <ul className="list-none p-0 m-0 flex-grow-1">
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2" />
                      <span>Arcu vitae elementum</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2" />
                      <span>Dui faucibus in ornare</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2" />
                      <span>Morbi tincidunt augue</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2" />
                      <span>Duis ultricies lacus sed</span>
                    </li>
                  </ul>
                  <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                  <Button className="p-3 w-full" label="Daftar Sekarang" onClick={() => navigate(`learning-class?id=${item.id}`)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainPage
