import React from 'react';

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
    return (
        <div className={styles.errorContainer}>
            <div className={styles.heading}>
                <h1>{code}</h1>
                <h2>Error</h2>
            </div>
            <div className={styles.desc}>
                <p>That place isn't recognized!</p>
                <p>Weather Penguin is not happy.</p>
            </div>
            <div className={styles.penguin}>
                <img src={penguin} alt="unhappy penguin" />
            </div>
        </div>
    );
};

export default Error;
