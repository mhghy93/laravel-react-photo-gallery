import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Profile extends Component {
    render() {
        const { auth } = this.props;
        const { isAuthenticated } = auth;

        // if (!isAuthenticated) {
        //     return <Redirect to="/" />;
        // }

        return (
            <div className="container-none">
                <h1>Profile</h1>
                <h1>Welcome</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Profile);
