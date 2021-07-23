import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useFormik } from 'formik';

const SearchBar = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
        },
        onSubmit: (values) => {
            alert(values.title);
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

export default SearchBar;
