import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';

import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

export class Badges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: undefined
        };
    }

    componentDidMount() {
        this.fetchData();

        this.intervalId = setInterval(this.fetchData, 5000);
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        if (this.state.loading && !this.state.data) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img
                                className="Badges__conf=logo"
                                src={confLogo}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    {this.state.data.length > 0 && (
                        <div className="Badges__buttons">
                            <Link to="/badges/new" className="btn btn-primary">
                                New Badge
                            </Link>
                        </div>
                    )}
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;
