import { UserButton } from '@clerk/clerk-react';

import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import BeachAccessRoundedIcon from '@mui/icons-material/BeachAccessRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';

import logoTextH from '../../../assets/logo/logo_text_h.png';
import { NavItem } from '../Dashboard';
import './DashboardNav.scss';

interface DashboardNavProps {
    selectedItem: NavItem;
    onItemSelect: (item: NavItem) => void;
}

export default function DashboardNav({ selectedItem, onItemSelect }: DashboardNavProps) {
    return (
        <nav className="dashboard-nav">
            <div className="nav-header">
                <img src={logoTextH} alt="logo" />
            </div>

            <div className="nav-items">
                <section className="nav-section">
                    <ul className="nav-list">
                        <li
                            className={`nav-item ${selectedItem === 'dashboard' ? 'selected' : ''}`}
                            onClick={() => onItemSelect('dashboard')}
                        >
                            <SpaceDashboardRoundedIcon className="nav-icon" />
                            <span>Dashboard</span>
                        </li>
                        <li
                            className={`nav-item ${selectedItem === 'inbox' ? 'selected' : ''}`}
                            onClick={() => onItemSelect('inbox')}
                        >
                            <InboxRoundedIcon className="nav-icon" />
                            <span>Inbox</span>
                        </li>
                    </ul>
                </section>

                <section className="nav-section">
                    <ul className="nav-list">
                        <li
                            className={`nav-item ${selectedItem === 'calendar' ? 'selected' : ''}`}
                            onClick={() => onItemSelect('calendar')}
                        >
                            <CalendarMonthRoundedIcon className="nav-icon" />
                            <span>Calendar</span>
                        </li>
                        <li
                            className={`nav-item ${selectedItem === 'shifts' ? 'selected' : ''}`}
                            onClick={() => onItemSelect('shifts')}
                        >
                            <WorkRoundedIcon className="nav-icon" />
                            <span>Shifts</span>
                        </li>
                        <li
                            className={`nav-item ${selectedItem === 'timeOff' ? 'selected' : ''}`}
                            onClick={() => onItemSelect('timeOff')}
                        >
                            <BeachAccessRoundedIcon className="nav-icon" />
                            <span>Time Off</span>
                        </li>
                    </ul>
                </section>

                <section className="nav-section">
                    <ul className="nav-list">
                        <li
                            className={`nav-item ${selectedItem === 'organization' ? 'selected' : ''}`}
                            onClick={() => onItemSelect('organization')}
                        >
                            <BusinessRoundedIcon className="nav-icon" />
                            <span>Organization</span>
                        </li>
                        <li
                            className={`nav-item ${selectedItem === 'employees' ? 'selected' : ''}`}
                            onClick={() => onItemSelect('employees')}
                        >
                            <PeopleRoundedIcon className="nav-icon" />
                            <span>Employees</span>
                        </li>
                        <li
                            className={`nav-item ${selectedItem === 'reports' ? 'selected' : ''}`}
                            onClick={() => onItemSelect('reports')}
                        >
                            <AssessmentRoundedIcon className="nav-icon" />
                            <span>Reports</span>
                        </li>
                    </ul>
                </section>
            </div>

            <div className="nav-footer">
                <div className="nav-footer-user" onClick={() => {
                    const userButton = document.querySelector('.cl-userButtonTrigger');
                    if (userButton instanceof HTMLElement) {
                        userButton.click();
                    }
                }}>
                    <UserButton />
                    <div className="nav-footer-text">
                        <p className="name">brianglezn</p> {/*cambiar por el nombre del usuario*/}
                        <p className="email">brianglezn@gmail.com</p> {/*cambiar por el email del usuario*/}
                    </div>
                </div>
            </div>
        </nav>
    );
} 