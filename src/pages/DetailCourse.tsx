import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import axios from 'axios';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

type Detail = {
  id: string;
  name: string;
  mentors: any[];
  description: string;
};

type Register = {
  fullname: string;
  email: string;
};

const DetailCourse = (): JSX.Element => {
  const [displayModal, setDisplayModal] = useState(false);
  const [detail, setDetail] = useState<Detail>({ id: '', name: '', mentors: [], description: '' });
  const [message, setMessage] = useState('');
  const [disable, setDisable] = useState(true);
  const [data, setData] = useState<Register>({ fullname: '', email: '' });
  const location = useLocation()

  useEffect(() => {
    axios.get(`http://localhost:3000${location.pathname}${location.search}`).then(res => {
      setDetail(res.data);
    });
  }, [location]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (data.fullname.length > 0 && data.email.length > 0) setDisable(false);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:3000/join-class', data).then(res => {
      setMessage(res.data.message);
      setDisplayModal(true);
    });
  }

  const onHide = () => {
    setDisplayModal(false);
    setData({ fullname: '', email: '' });
  }

  const renderFooter = () => (
    <div>
      <Button autoFocus icon="pi pi-check" label="Yes"
        onClick={() => onHide()} />
    </div>
  );

  return (
    <div className='container p-4'>
      <div className="grid">
        <div className="col-12 lg:col-8">
          <div className="surface-0">
            <div className="font-medium text-3xl text-900 mb-3">{detail?.name}</div>
            <div className="text-500 mb-5">{detail?.description}</div>
            <h4>Mentor</h4>
            <ul className="list-none p-0 m-0">
              {detail?.mentors?.map((item: any) => (
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap" key={item.id}>
                  <div className="flex-grow-1">
                    <h4 className='pt-0 mt-1'>{item.name}</h4>
                    <p className='pt-2 mt-1'>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-12 lg:col-4">
          <div className="flex align-items-center justify-content-center mt-4">
            <div className="surface-card p-4 shadow-2 border-round w-full">
              <div className="text-center mb-5">
                <div className="text-900 text-3xl font-medium mb-3">Daftar Sekarang</div>
              </div>
              <div>
                <form id="registerForm" onSubmit={handleSubmit}>
                  <label className="block text-900 font-medium mb-2" htmlFor='fullname'>Fullname</label>
                  <InputText className="w-full mb-3" id="fullname" name="fullname"
                    onChange={onChange}
                    placeholder="Fullname"
                    type="text"
                    value={data.fullname} />
                  <label className="block text-900 font-medium mb-2" htmlFor='email' >Email</label>
                  <InputText className="w-full mb-3" id="email" name="email"
                    onChange={onChange}
                    placeholder="Email"
                    type="email"
                    value={data.email} />
                  <Button className="w-full" disabled={disable} id='submit'
                    label="Register" type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <Dialog breakpoints={{ '960px': '75vw' }} footer={renderFooter()} header="Registration Success!"
          modal={false} onHide={() => onHide()}
          style={{ width: '50vw' }} visible={displayModal}>
          <p className="m-0">{message}</p>
        </Dialog>
      </div>
    </div>
  )
}

export default DetailCourse
