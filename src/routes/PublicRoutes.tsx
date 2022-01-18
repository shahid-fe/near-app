import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Signup from '../pages/Signup';
import { PublicRoutesMap } from './config';

const PublicRoutes: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={PublicRoutesMap.REGISTER} element={<Signup />}></Route>
      </Routes>
    </>
  );
};

export default PublicRoutes;
