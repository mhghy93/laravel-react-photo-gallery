import React, { Component, Fragment } from 'react';

class PhotoListItem extends Component {
    render() {
        const { photo } = this.props;
        return (
            <Fragment>
                <img
                    className="h-full w-full"
                    src={photo.pic}
                    alt={photo.title}
                />
            </Fragment>
        );
    }
}

export default PhotoListItem;
