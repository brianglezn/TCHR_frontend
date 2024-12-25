import { SignIn, SignUp, useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

export default function Home() {
    const { isSignedIn } = useAuth();

    if (isSignedIn) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <div className="landing-container">
            <div className="auth-section">
                <h1>TCHR App</h1>
                <div className="auth-buttons">
                    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
                    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
                </div>
            </div>
        </div>
    );
}
