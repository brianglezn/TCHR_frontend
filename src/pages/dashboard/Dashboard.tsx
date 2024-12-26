import DashboardNav from './components/DashboardNav';
import DashboardContent from './components/DashboardContent';

import './Dashboard.scss';

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <DashboardNav />
            <DashboardContent />
        </div>
    );
}