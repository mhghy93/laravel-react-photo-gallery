import React, { Fragment } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const LogIn = ({ showLoginModal, handleHideLogin }) => {
    return (
        <Fragment>
            {showLoginModal && (
                <Fragment>
                    <div
                        onClick={() => handleHideLogin()}
                        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                        className="overflow-auto absolute inset-0 z-10"
                    ></div>

                    <div className="absolute inset-0 flex items-start justify-center items-center">
                        <div className="bg-white z-10 rounded-lg shadow-lg">
                            <div className="flex justify-end">
                                <IoCloseOutline
                                    onClick={() => handleHideLogin()}
                                    className="text-2xl font-extra-bold text-gray-500 mt-2 mr-2 "
                                />
                            </div>
                            <form className="mx-5 mt-2 py-5 flex flex-col">
                                <input
                                    className="rounded w-full outline-none py-3 px-5 border border-gray-300 mb-5"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                <input
                                    className="rounded w-full outline-none py-3 px-5 border border-gray-300 mb-5"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <button className="rounded-2xl bg-green-500 text-white px-8 py-2 hover:bg-green-600 mb-5">
                                    Log In
                                </button>
                            </form>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default LogIn;
