import React from 'react';
import styles from './Loading.module.css';
import loadingSpinner from './assets/loading.png';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <img src={loadingSpinner} alt="Loading..." />
        </div>
    );
};

export default Loading;
