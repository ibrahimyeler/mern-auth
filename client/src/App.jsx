import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    {/* {header} */}
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}


