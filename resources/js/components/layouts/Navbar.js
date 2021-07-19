import React, { Component } from 'react';
import { BsUpload } from 'react-icons/bs';

class Navbar extends Component {
    render() {
        return (
            <nav className="flex justify-between bg-white h-18 shadow-2xl">
                <div className="ml-5 py-4">
                    <a className="flex" href="/">
                        <img
                            className="h-8 w-8"
                            src="/images/logo.png"
                            alt="logo"
                        />
                        <span className="ml-2">IMAGESTORE</span>
                    </a>
                </div>

                <ul className="flex justify-items-center py-4">
                    <li className="mr-5 text-gray-800">
                        <a href="/">Log in</a>
                    </li>
                    <li className="mr-5 text-gray-800">
                        <a href="/">Join</a>
                    </li>
                    <li className="mr-5">
                        <button className="rounded-2xl bg-green-500 text-white px-8 py-1">
                            <span className="flex justify-center">
                                <BsUpload className="mt-1 font-black" />{' '}
                                <span className="ml-2">Upload</span>
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
