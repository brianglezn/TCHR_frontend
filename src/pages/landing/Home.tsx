import { SignIn, SignUp, useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

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
            </div>
            <main className="home-main">
                <h2>Welcome to TalentControl HR</h2>
                <p>Manage your employees with ease</p>
            </main>
            <SignIn path="/" routing="path" signUpUrl="/sign-up" />
            <SignUp path="/sign-up" routing="path" signInUrl="/" />
        </div>
    );
}
