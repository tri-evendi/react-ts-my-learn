import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Route, Routes } from 'react-router-dom';

import axios from 'axios';

import Navbar from './components/Navbar';
import DetailCourse from './pages/DetailCourse';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

axios.defaults.withCredentials = false;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const App = (): JSX.Element => (
  <div className='app'>
    <Navbar />
    <Routes>
      <Route element={<MainPage />} path='/' />
      <Route element={<DetailCourse />} path='/learning-class' />
      <Route element={<NotFoundPage />} path='*' />
    </Routes>
  </div>
)

export default App;
