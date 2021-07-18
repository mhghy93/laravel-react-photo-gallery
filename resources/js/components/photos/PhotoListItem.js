import React, { Component, Fragment } from 'react';

class PhotoListItem extends Component {
    state = { showTitle: false };

    handleMouseOver = () => {
        this.setState({ showTitle: true });
    };

    handleMouseOut = () => {
        this.setState({ showTitle: false });
    };

    render() {
        const { photo } = this.props;
        return (
            <div
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
                className="relative"
            >
                <img
                    className="h-full w-full"
                    src={photo.pic}
                    alt={photo.title}
                />
                {this.state.showTitle ? (
                    <div className="absolute left-2 bottom-4 text-white">
                        <p>{photo.title}</p>
                    </div>
                ) : (
                    <Fragment></Fragment>
                )}
            </div>
        );
    }
}

export default PhotoListItem;
