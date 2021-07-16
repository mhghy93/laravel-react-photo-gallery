import React, { Component, Fragment } from 'react';
import { FaSearch } from 'react-icons/fa';

class Home extends Component {
    state = {};
    render() {
        return (
            <Fragment>
                <div className="container-none">
                    <div
                        className="bg-auto bg-no-repeat bg-center w-full"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('images/background.jpg')`,
                            height: '30rem',
                        }}
                    >
                        <div className="flex flex-col items-center">
                            <h1 className="text-white text-5xl font-bold mt-40">
                                Stunning free images
                            </h1>
                            <form className="mt-10 lg:w-7/12 xl:7/12 2xl:w-7/12 md:w-11/12 sm:w-full xs:w-full">
                                <div className="relative">
                                    <div className="absolute top-4 left-3">
                                        <FaSearch className="text-gray-400" />
                                    </div>
                                    <input
                                        className="px-10 py-3 rounded w-full outline-none"
                                        type="text"
                                        placeholder="Search image..."
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Home;
