import { Routes, Route } from 'react-router-dom';


import { Home } from '../components/home/Home';
import { CountryDescription } from '../components/countryDescription/CountryDescription';

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/country/:alpha2code' element={<CountryDescription/>} />
        </Routes>
    );
}
export { PublicRoutes };