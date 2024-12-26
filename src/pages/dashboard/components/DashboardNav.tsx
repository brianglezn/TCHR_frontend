import { useState } from 'react';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { UserButton } from '@clerk/clerk-react';

import logoCollapsed from '../../../assets/logo/logo_tchr.png';
import logoTextH from '../../../assets/logo/logo_text_h.png';

import './DashboardNav.scss';

export default function DashboardNav() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleNav = () => {
        setIsCollapsed(!isCollapsed);
        document.querySelector('.dashboard-container')?.classList.toggle('nav-collapsed');
    };

    return (
        <nav className={`dashboard-nav ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="nav-header">
                <img src={isCollapsed ? logoCollapsed : logoTextH} alt="logo" />
            </div>
            <div className="nav-items">
                
            </div>
            <div className="nav-footer ">
                <UserButton />
                <Button
                    className="toggle-button"
                    onClick={toggleNav}
                    size="small"
                >
                    {isCollapsed ? <MenuOpenIcon /> : <MenuIcon />}
                </Button>
            </div>
        </nav>
    );
} 