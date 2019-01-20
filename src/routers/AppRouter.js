import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import EditPostPage from '../components/EditPostPage';
import CreatePostPage from '../components/CreatePostPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';    
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage}/>
                <PrivateRoute path="/edit" component={EditPostPage}/>
                <PrivateRoute path="/create" component={CreatePostPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter; 