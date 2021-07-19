import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotoDetail } from '../redux/photo/photo.actions';
import { BsDownload } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

class PhotoDetail extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getPhotoDetail(this.props.match.params.id);
    }
    render() {
        const { photo } = this.props;
        const { photoDetail, loading } = photo;

        return (
            <div className="container-none">
                {loading || typeof photoDetail.data === 'undefined' ? (
                    <p className="text-3xl text-center my-3">Loading...</p>
                ) : (
                    <div className="mx-5 my-8">
                        <div className="flex gap-12 flex-wrap">
                            <img
                                className="h-full lg:w-7/12 md:w-full"
                                src={`/${photoDetail.data.pic}`}
                                alt={photoDetail.data.title}
                            />
                            <div className="flex flex-col gap-5">
                                <h1 className="text-3xl font-bold">
                                    {photoDetail.data.title}
                                </h1>
                                <p className="text-lg">
                                    <span className="flex">
                                        <span className="mr-3">Photo By</span>{' '}
                                        <FaUser className="mt-1 mr-2" />
                                        {photoDetail.data.user}
                                    </span>
                                </p>
                                <p className="text-lg">
                                    Uploaded on{' '}
                                    {new Date(
                                        photoDetail.data.created_at
                                    ).toDateString()}
                                </p>
                                <button className="rounded-2xl bg-green-500 text-white px-8 py-4 text-xl font-black hover:bg-green-600">
                                    <span className="flex justify-center">
                                        <BsDownload className="mt-1 mr-2" />
                                        Download
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    photo: state.photo,
});

export default connect(mapStateToProps, { getPhotoDetail })(PhotoDetail);
