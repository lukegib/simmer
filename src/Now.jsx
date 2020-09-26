import React from 'react';

import styles from './Info.module.css';

const Now = ({ data }) => {
    console.log(data);

    return (
        <div className={styles.weatherDataList}>
            <div className={styles.row}>
                <div className={styles.heading}>Feels Like</div>
                <div className={styles.data}>{data.feels_like}°</div>
            </div>
            <div className={styles.row}>
                <div className={styles.heading}>Wind</div>
                <div className={styles.data}>
                    <span className={styles.direction}>{data.wind_dir}</span>{' '}
                    {data.wind_speed} km/hr
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.heading}>Pressure</div>
                <div className={styles.data}>{data.pressure} hPa</div>
            </div>
            <div className={styles.row}>
                <div className={styles.heading}>Humidity</div>
                <div className={styles.data}>{data.humidity}%</div>
            </div>
            <div className={styles.row}>
                <div className={styles.heading}>UV Index</div>
                <div className={styles.data}>{data.uvi}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.heading}>Sunrise</div>
                <div className={styles.data}>05:15</div>
            </div>
            <div className={styles.row}>
                <div className={styles.heading}>Sunset</div>
                <div className={styles.data}>18:24</div>
            </div>
        </div>
    );
};

export default Now;
