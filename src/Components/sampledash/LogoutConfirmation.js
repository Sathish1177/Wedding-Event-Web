// LogoutConfirmation.js
import React from 'react';
import './LogoutConfirmation.css';

function LogoutConfirmation({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Logout Confirmation</h2>
                <p>Are you sure you want to log out?</p>
                <div className="buttons">
                    <button onClick={onConfirm}>Yes</button>
                    <button onClick={onClose}>No</button>
                </div>
            </div>
        </div>
    );
}

export default LogoutConfirmation;
