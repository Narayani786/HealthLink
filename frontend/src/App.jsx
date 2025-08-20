import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DoctorList from './pages/DoctorList';
import DoctorDetails from './pages/DoctorDetails';
import SymptomChecker from './pages/SymptomChecker';

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
