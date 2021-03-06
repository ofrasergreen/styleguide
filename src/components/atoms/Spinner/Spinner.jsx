import React from 'react';
import PropTypes from 'prop-types';

const classNames = (additionalClassName, type) =>
    ['spinner', `spinner--${type}`, additionalClassName]
        .filter(cls => !!cls)
        .join(' ');

/**
 * Status: *in progress*.
 *
 * Future work: Replace it with gif
 *
 */
const Spinner = ({ className, type }) => (
    <div className={classNames(className, type)}>
        <div className="spinner__blade spinner__blade--0" />
        <div className="spinner__blade spinner__blade--1" />
        <div className="spinner__blade spinner__blade--2" />
        <div className="spinner__blade spinner__blade--3" />
        <div className="spinner__blade spinner__blade--4" />
        <div className="spinner__blade spinner__blade--5" />
        <div className="spinner__blade spinner__blade--6" />
        <div className="spinner__blade spinner__blade--7" />
        <div className="spinner__blade spinner__blade--8" />
        <div className="spinner__blade spinner__blade--9" />
        <div className="spinner__blade spinner__blade--10" />
        <div className="spinner__blade spinner__blade--11" />
        <div className="spinner__blade spinner__blade--12" />
        <div className="spinner__blade spinner__blade--13" />
    </div>
);

Spinner.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string
};

Spinner.defaultProps = {
    type: 'lg'
};

export default Spinner;