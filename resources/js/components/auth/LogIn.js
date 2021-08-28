import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { IoCloseOutline } from 'react-icons/io5';
import { useFormik } from 'formik';
import { userLogIn } from '../../redux/auth/auth.actions';

const LogIn = ({
    showLoginModal,
    handleHideLogin,
    userLogIn,
    auth: { isAuthenticated, error },
}) => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            userLogIn(values.email, values.password);
        },
    });

    if (isAuthenticated) {
        handleHideLogin();
        history.push('/profile');
    }

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
                            <form
                                onSubmit={formik.handleSubmit}
                                className="mx-5 mt-2 py-5 flex flex-col"
                            >
                                {error.message && (
                                    <p className="text-red-600 mb-3">
                                        * {error.message}
                                    </p>
                                )}
                                <input
                                    className="rounded w-full outline-none py-3 px-5 border border-gray-300 mb-5"
                                    type="email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    placeholder="Email"
                                />
                                {error.email && (
                                    <p className="text-red-600 mb-3">
                                        * {error.email}
                                    </p>
                                )}
                                <input
                                    className="rounded w-full outline-none py-3 px-5 border border-gray-300 mb-5"
                                    type="password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    placeholder="Password"
                                />
                                {error.password && (
                                    <p className="text-red-600 mb-3">
                                        * {error.password}
                                    </p>
                                )}
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

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { userLogIn })(LogIn);
