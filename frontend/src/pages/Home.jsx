import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome to HealthLink</h1>
            <p>Find the right doctor for your needs.</p>
            
            <Link to='/symptom-checker'>
            <button>Check my symptoms</button>
            </Link>
        </div>
    );
}
