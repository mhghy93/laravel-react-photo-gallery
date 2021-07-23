import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { searchPhoto } from '../redux/photo/photo.actions';
import SearchBar from '../components/search/SearchBar';
import PhotoListItem from '../components/photos/PhotoListItem';

class SearchResults extends Component {
    componentDidMount() {
        this.props.searchPhoto(this.props.match.params.title);
    }

    render() {
        const { photo } = this.props;
        const { photos, loading } = photo;

        return (
            <Fragment>
                <div className="container-none">
                    <div className="mx-5">
                        <SearchBar />
                    </div>

                    {loading || typeof photos.data === 'undefined' ? (
                        <Fragment>
                            {typeof photos.message === 'undefined' ? (
                                <p className="text-3xl text-center py-3">
                                    Loading...
                                </p>
                            ) : (
                                <p className="text-3xl text-center py-3">
                                    {photos.message}
                                </p>
                            )}
                        </Fragment>
                    ) : (
                        <Fragment>
                            {/* Photo List */}
                            <h1 className="text-4xl text-center mb-5">
                                Search Results
                            </h1>
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

export default connect(mapStateToProps, { searchPhoto })(SearchResults);
