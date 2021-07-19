import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotoDetail } from '../redux/photo/photo.actions';

class PhotoDetail extends Component {
    componentDidMount() {
        this.props.getPhotoDetail(this.props.match.params.id);
    }
    render() {
        const { photo } = this.props;
        const { photoDetail, loading } = photo;
        return <div className="container-none">Detail</div>;
    }
}

const mapStateToProps = (state) => ({
    photo: state.photo,
});

export default connect(mapStateToProps, { getPhotoDetail })(PhotoDetail);
