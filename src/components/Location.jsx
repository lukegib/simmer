import React from 'react';
import PropTypes from 'prop-types';
import styles from './Location.module.css';

const Location = ({ location, handleChange, handleBlur }) => {
    return (
        <div className={styles.locationContainer}>
            <div className={styles.location}>
                <div className={styles.locationInput}>
                    <input
                        type="text"
                        value={location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <div
                        className={styles.underline}
                        style={{
                            width: `${location.length}ch`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

Location.propTypes = {
    location: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
};

export default Location;
