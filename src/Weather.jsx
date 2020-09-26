import React from 'react';
import styles from './Weather.module.css';

import Icon from './Icon';

const Weather = ({ data }) => {
    return (
        <div className={styles.weatherContainer}>
            <div className={styles.weatherIcon}>
                <Icon code={data.icon_code} />
            </div>
            <div className={styles.temp}>
                <div className={styles.degrees}>
                    {data.temp}
                    <span className={styles.unit}>°C</span>
                </div>
            </div>
            <div className={styles.title}>{data.type}</div>
        </div>
    );
};

export default Weather;
