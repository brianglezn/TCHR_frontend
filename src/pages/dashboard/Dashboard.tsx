import { useState, useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import DashboardNav from './components/DashboardNav';
import DashboardContent from './components/DashboardContent';

import './Dashboard.scss';

export type NavItem =
    | 'dashboard'
    | 'inbox'
    | 'calendar'
    | 'shifts'
    | 'timeOff'
    | 'organization'
    | 'employees'
    | 'reports';

export default function Dashboard() {
    const [currentSection, setCurrentSection] = useState<NavItem>('dashboard');
    const { getToken } = useAuth();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = await getToken();
                
                if (!token) {
                    throw new Error('No se pudo obtener el token de autenticación');
                }

                const response = await fetch('https://tchr-backend.onrender.com/api/test-auth', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                });
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Error en la autenticación');
                }

                const data = await response.json();
                console.log('Autenticación exitosa:', data);
            } catch (error) {
                if (error instanceof Error) {
                    console.error('Error al verificar la autenticación:', error.message);
                }
            }
        };

        checkAuth();
    }, [getToken]);

    return (
        <div className="dashboard-container">
            <DashboardNav
                selectedItem={currentSection}
                onItemSelect={setCurrentSection}
            />
            <DashboardContent currentSection={currentSection} />
        </div>
    );
}