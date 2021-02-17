
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';

import Dashboard from './reports/dashboard';

import { Provider } from 'react-redux';
import store from '../store';

import LoginForm from './auth/LoginForm';
import PrivateRoute from './common/PrivateRoute';

import { loadUser } from '../actions/auth';
import Header from './layout/Header';
import RegisterForm from './auth/RegisterForm';
import Report from './reports/daily_total/daily_report';
import CountryReport from './reports/country/country_report';
import CountryDailyReport from './reports/country_daily/country_daily_report';

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Header />
                    <Switch>
                        <PrivateRoute exact path='/' component={Report} />
                        <PrivateRoute exact path='/country' component={CountryReport} />
                        <PrivateRoute exact path='/country/daily' component={CountryDailyReport} />
                        <Route exact path='/register' component={RegisterForm} />
                        <Route exact path='/login' component={LoginForm} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));