import React from 'react';

import './styles/PageError.css';

export default function PageError(props) {
    return (
        <div className="PageError">
            <span>❌</span>
            {props.error.message}
            <span>❌</span>
        </div>
    );
}
