import { useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
    children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isLoaded, isSignedIn } = useAuth();

    if (!isLoaded) {
        return <div>Cargando...</div>;
    }

    if (!isSignedIn) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
} 