import React from 'react';

import './styles/BadgeNew.css';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import header from '../images/badge-header.svg';

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName="Joel"
                                lastName="Mendez"
                                twitter="jamendezs"
                                jobTitle="Head of IT"
                                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;
