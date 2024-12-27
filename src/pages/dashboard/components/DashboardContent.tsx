import { lazy, Suspense } from 'react';
import { NavItem } from '../Dashboard';

import './DashboardContent.scss';

const DashboardHome = lazy(() => import('../features/dashHome/DashHome'));
const Inbox = lazy(() => import('../features/inbox/Inbox'));
const Calendar = lazy(() => import('../features/calendar/Calendar'));
const Shifts = lazy(() => import('../features/shifts/Shifts'));
const TimeOff = lazy(() => import('../features/timeOff/TimeOff'));
const Reports = lazy(() => import('../features/reports/Reports'));
const Employees = lazy(() => import('../features/employees/Employees'));
const Organization = lazy(() => import('../features/organization/Organization'));


interface DashboardContentProps {
    currentSection: NavItem;
}

export default function DashboardContent({ currentSection }: DashboardContentProps) {
    const renderContent = () => {
        switch (currentSection) {
            case 'dashboard':
                return <DashboardHome />;
            case 'inbox':
                return <Inbox />;
            case 'calendar':
                return <Calendar />;
            case 'shifts':
                return <Shifts />;
            case 'timeOff':
                return <TimeOff />;
            case 'reports':
                return <Reports />;
            case 'employees':
                return <Employees />;
            case 'organization':
                return <Organization />;
            default:
                return <DashboardHome />;
        }
    };

    return (
        <main className="dashboard-content">
            <Suspense fallback={<div>Loading...</div>}> {/*Cambiar por un spinner */}
                {renderContent()}
            </Suspense>
        </main>
    );
} 