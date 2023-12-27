import React from 'react';
import partnershipIcon from './Assets/partnership_icon.png';
import './Background.css';

function BackgroundIcon() {
    return (
        <div className="background_icon">
            <img src={partnershipIcon} alt=""/>
        </div>
    );
}

export default BackgroundIcon;
