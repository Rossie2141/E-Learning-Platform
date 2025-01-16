import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Courses from './components/Home/Courses';
import SignUp from './components/Login/signUp';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar

// Wrapper component to handle conditional rendering of Navbar
const AppLayout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/", "/signup"]; // Define routes where Navbar shouldn't appear

  return (
    <>
      {/* Conditionally render the Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
