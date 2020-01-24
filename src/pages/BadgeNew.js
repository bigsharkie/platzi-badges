import React from 'react';

import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/platziconf-logo.svg';
import api from '../api';
import md5 from 'md5';

class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
            avatarUrl: ''
        }
    };

    handleChange = e => {
        let hashedEmail = md5(this.state.form.email);

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
                avatarUrl: `https://s.gravatar.com/avatar/${hashedEmail}`
            }
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        console.log('Submitting...');
        this.setState({ loading: true, error: null });

        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false });
        } catch (error) {
            this.setState({ loading: false, error });
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img
                        className="BadgeNew__hero-img img-fluid"
                        src={header}
                        alt="Logo"
                    />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={
                                    this.state.form.firstName || 'FIRST_NAME'
                                }
                                lastName={
                                    this.state.form.lastName || 'LAST_NAME'
                                }
                                twitter={this.state.form.twitter || 'TWITTER'}
                                jobTitle={
                                    this.state.form.jobTitle || 'JOB_TITLE'
                                }
                                email={this.state.form.email || 'EMAIL'}
                                avatarUrl=""
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;
