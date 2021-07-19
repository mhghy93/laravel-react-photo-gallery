import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { getAllPhotos } from '../redux/photo/photo.actions';
import PhotoListItem from '../components/photos/PhotoListItem';

class Home extends Component {
    componentDidMount() {
        this.props.getAllPhotos();
    }

    render() {
        const { photo } = this.props;
        const { photos, loading } = photo;

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

                    {loading || typeof photos.data === 'undefined' ? (
                        <p className="text-3xl text-center my-3">Loading...</p>
                    ) : (
                        <Fragment>
                            {/* Photo List */}
                            {photos.data.length > 0 ? (
                                <div className="mx-5 my-3 grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                                    {photos.data.map((photo) => (
                                        <PhotoListItem
                                            key={photo.id}
                                            photo={photo}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <p className="text-3xl text-center my-3">
                                    No photos found
                                </p>
                            )}
                        </Fragment>
                    )}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    photo: state.photo,
});

export default connect(mapStateToProps, { getAllPhotos })(Home);
