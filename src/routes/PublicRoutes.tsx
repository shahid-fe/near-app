import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Register from '../pages/Register';
import { PublicRoutesMap } from './config';

const PublicRoutes: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={PublicRoutesMap.REGISTER} element={<Register />}></Route>
      </Routes>
    </>
  );
};

export default PublicRoutes;
