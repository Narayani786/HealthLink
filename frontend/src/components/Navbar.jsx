import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={{ padding: '10', background: '#0077cc', color: 'white' }}>
            <Link to='/' style={{ marginRight: '15px', color: 'white' }}>Home</Link>
            <Link to='/doctors' style={{ color: 'white' }}>Doctors</Link>
        </nav>
    );
}


