import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error.module.css';
import penguin from './assets/penguin.png';

/* TODO: Fix this so that it displays the message and code */

//
// error code
// 400 - city name missing / invalid
// 403 - access restricted
// 404 - no location found
// 429 - too many requests
// 500 - server error, try again
//

const Error = ({ code }) => {
    let desc;

    switch (code) {
        default:
        case 400:
            desc = "Can't find that location!";
            break;
        case 403:
            desc = 'Access restricted!';
            break;
        case 404:
            desc = "That location doesn't seem to exist!";
            break;
        case 429:
            desc = 'Too many requests for one penguin to handle!';
            break;
        case 500:
            desc = 'Server error, try again in a minute or so!';
            break;
    }

    return (
        <div className={styles.errorContainer}>
            <div className={styles.heading}>
                <h1>{code}</h1>
                <h2>Error</h2>
            </div>
            <div className={styles.desc}>
                <p>{desc}</p>
            </div>
            <div className={styles.penguin}>
                <img src={penguin} alt="unhappy penguin" />
            </div>
        </div>
    );
};

Error.propTypes = {
    code: PropTypes.number.isRequired,
};

export default Error;
