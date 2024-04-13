import React from 'react';
import "./dd.css"
function Content12({ selectedContent }) {
    const getContent = () => {
        switch (selectedContent) {
            case 'dashboard':
                return (
                    <>
                        <h2>Dashboard</h2>
                        <p>This is the dashboard content.</p>
                    </>
                );
                case 'onboarding':
                    return (
                        <>
                            <h2>Onboarding</h2>
                            <p>This is the onboarding form content.</p>
                        </>
                    );
            case 'gallery':
                return (
                    <>
                        <h2>Gallery</h2>
                        <p>This is the gallery content.</p>
                    </>
                );
            case 'access':
                return (
                    <>
                        <h2>Access</h2>
                        <p>This is the access content.</p>
                    </>
                );
            case 'details':
                return (
                    <>
                        <h2>Details</h2>
                        <p>This is the details content.</p>
                    </>
                );
            case 'onboardingStudio':
                return (
                    <>
                        <h2>Onboarding Studio</h2>
                        <p>This is the onboarding studio content.</p>
                    </>
                );
            case 'onboardingOrganizer':
                return (
                    <>
                        <h2>Onboarding Organizer</h2>
                        <p>This is the onboarding organizer content.</p>
                    </>
                );
            default:
                return (
                    <>
                        <h2>Welcome to the Dashboard</h2>
                        <p>This is the main content area where you can display various dashboard elements.</p>
                    </>
                );
        }
    };

    return (
        <div className="content">
            {getContent()}
        </div>
    );
}

export default Content12;

