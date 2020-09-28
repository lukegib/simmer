import React from 'react';
import styles from './Info.module.css';

// TODO: clean this up

const Now = ({ timezone, data }) => {
    const sunrise = new Date((data.sunrise + timezone) * 1000);
    const sunset = new Date((data.sunset + timezone) * 1000);

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
                <div className={styles.data}>
                    {`${sunrise.getUTCHours()}:${
                        sunrise.getUTCMinutes() > 9
                            ? sunrise.getUTCMinutes()
                            : `0${sunrise.getUTCMinutes()}`
                    }`}
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.heading}>Sunset</div>
                <div className={styles.data}>
                    {`${sunset.getUTCHours()}:${
                        sunset.getUTCMinutes() > 9
                            ? sunset.getUTCMinutes()
                            : `0${sunrise.getUTCMinutes()}`
                    }`}
                </div>
            </div>
        </div>
    );
};

export default Now;
