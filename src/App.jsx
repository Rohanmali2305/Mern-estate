import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/signin';
import SignUp from './pages/SignUP';
import About from './pages/about';
import Profile from './pages/profile';

export default function App() {
  return <BrowserRouter>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<Signin />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
    </BrowserRouter>;
}

