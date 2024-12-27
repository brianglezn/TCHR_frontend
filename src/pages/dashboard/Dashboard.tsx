import { useState } from 'react';
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
    | 'payroll'
    | 'reports';

export default function Dashboard() {
    const [currentSection, setCurrentSection] = useState<NavItem>('dashboard');

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