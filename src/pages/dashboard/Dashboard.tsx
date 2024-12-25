import { UserButton } from '@clerk/clerk-react';

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Dashboard</h1>
                <UserButton afterSignOutUrl="/" />
            </header>
            <main className="dashboard-content">
                <p>Bienvenido al Dashboard</p>
            </main>
        </div>
    );
}
