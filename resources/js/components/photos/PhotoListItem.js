import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

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
                <Link
                    style={{ textDecoration: 'none' }}
                    to={`/photos/${photo.id}`}
                >
                    <img
                        className="h-full w-full"
                        src={`/${photo.pic}`}
                        alt={photo.title}
                    />
                    {this.state.showTitle ? (
                        <div className="absolute left-2 bottom-4 text-white">
                            <p>{photo.title}</p>
                        </div>
                    ) : (
                        <Fragment></Fragment>
                    )}
                </Link>
            </div>
        );
    }
}

export default PhotoListItem;
