import { useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import logo from '../assets/logo/logo_tchr.png';
type ProtectedRouteProps = {
    children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isLoaded, isSignedIn } = useAuth();

    if (!isLoaded) {
        return <div className='loading-container'>
            <img src={logo} alt="logo" style={{ width: '100px', height: 'auto' }} />
        </div>;
    }

    if (!isSignedIn) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
} 