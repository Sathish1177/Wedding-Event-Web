import React from 'react';
 import "./dd.css"
function Sidebar12({ onMenuItemClick }) {
    return (
        <div className="sidebar">
            <a href="#" onClick={() => onMenuItemClick('dashboard')}>Dashboard</a>
            <a href="#" onClick={() => onMenuItemClick('onboarding')}>Onboarding</a>
            {/* <div className="dropdown">
                <a href="#">Onboarding</a>
                <div className="dropdown-content">
                    <a href="#" onClick={() => onMenuItemClick('onboardingStudio')}>Onboarding Studio</a>
                    <a href="#" onClick={() => onMenuItemClick('onboardingOrganizer')}>Onboarding Organizer</a>
                </div>
            </div> */}
            <a href="#" onClick={() => onMenuItemClick('gallery')}>Gallery</a>
            <a href="#" onClick={() => onMenuItemClick('access')}>Access</a>
            <a href="#" onClick={() => onMenuItemClick('details')}>Details</a>
            {/* <a href="#">Log Out</a> */} as we will logout successfully.
            <a href="#" onClick={() => onMenuItemClick('logout')}>Log Out</a>
        </div>
    );
}

export default Sidebar12;
