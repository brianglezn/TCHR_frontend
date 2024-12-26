import { useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import { Button } from '@mui/material';

import logo from '../../assets/logo/logo_tchr.png';

import './Home.scss';

export default function Home() {
    const { isSignedIn } = useAuth();

    if (isSignedIn) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <div className="home-container">
            <div className="home-header">
                <img src={logo} alt="TalentControl HR" />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => window.location.href = '/sign-in'}
                    size="small"
                >
                    Log In
                </Button>
            </div>
            <main className="home-main">
                <h2>Welcome to TalentControl HR</h2>
                <p>Manage your employees with ease</p>
            </main>
        </div>
    );
}
