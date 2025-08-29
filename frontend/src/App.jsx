import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import DoctorList from './pages/DoctorList.jsx';
import DoctorDetails from './pages/DoctorDetails.jsx';
import SymptomChecker from './pages/SymptomChecker.jsx';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/'element={<Home />} />
                <Route path='/symptom-checker'element={<SymptomChecker />}/>
                <Route path='/doctors-list/:specialization'element={<DoctorList />}/>
                <Route path='/doctors/:id'element={<DoctorDetails />}/>
            </Routes>
            <Footer />
        </Router>
    )
};
