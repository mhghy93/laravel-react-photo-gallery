import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { BsUpload } from 'react-icons/bs';
import LogIn from '../auth/LogIn';

class Navbar extends Component {
    state = {
        showLogin: false,
    };

    handleShowLogin = () => {
        this.setState({ showLogin: true });
    };

    handleHideLogin = () => {
        this.setState({ showLogin: false });
    };
    render() {
        return (
            <Fragment>
                <nav className="flex justify-between bg-white h-18 shadow-2xl">
                    <div className="ml-5 py-4">
                        <Link className="flex" to="/">
                            <img
                                className="h-8 w-8"
                                src="/images/logo.png"
                                alt="logo"
                            />
                            <span className="ml-2">IMAGESTORE</span>
                        </Link>
                    </div>

                    <ul className="flex justify-items-center py-4">
                        <li
                            onClick={this.handleShowLogin}
                            className="mr-5 text-gray-800"
                        >
                            Log in
                        </li>
                        <li className="mr-5 text-gray-800">Join</li>
                        <li className="mr-5">
                            <button className="rounded-2xl bg-green-500 text-white px-8 py-1 hover:bg-green-600">
                                <span className="flex justify-center">
                                    <BsUpload className="mt-1" />{' '}
                                    <span className="ml-2">Upload</span>
                                </span>
                            </button>
                        </li>
                    </ul>
                </nav>
                {this.state.showLogin && (
                    <LogIn
                        showLoginModal={this.state.showLogin}
                        handleHideLogin={this.handleHideLogin}
                    />
                )}
            </Fragment>
        );
    }
}

export default Navbar;
