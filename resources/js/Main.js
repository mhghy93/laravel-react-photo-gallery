import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './pages/Home';
import PhotoDetail from './pages/PhotoDetail';
import Profile from './pages/Profile';
import SearchResults from './pages/SearchResults';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/photos/:id" component={PhotoDetail} />
                    <Route
                        exact
                        path="/photos/search/:title"
                        component={SearchResults}
                    />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Main;
