import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { useFormik } from 'formik';
import { searchPhoto } from '../../redux/photo/photo.actions';

const SearchBar = ({ searchPhoto }) => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        onSubmit: (values) => {
            if (window.location.pathname.includes('/search')) {
                searchPhoto(values.title);
                history.push(`/photos/search/${values.title}`);
            } else {
                history.push(`/photos/search/${values.title}`);
            }
        },
    });
    return (
        <form
            onSubmit={formik.handleSubmit}
            className="mt-10 lg:w-7/12 xl:7/12 2xl:w-7/12 md:w-11/12 sm:w-full xs:w-full"
        >
            <div className="relative">
                <div className="absolute top-4 left-3">
                    <FaSearch className="text-gray-400" />
                </div>
                <input
                    className="px-10 py-3 rounded w-full outline-none"
                    name="title"
                    type="text"
                    placeholder="Search image..."
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
            </div>
        </form>
    );
};

const mapStateToProps = (state) => ({
    photo: state.photo,
});

export default connect(mapStateToProps, { searchPhoto })(SearchBar);
