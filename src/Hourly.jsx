import React from 'react';

import Icon from './Icon';
import styles from './Info.module.css';

const Hourly = ({ timezone, data }) => {
    const day = new Date().getDay();
    let today = [];
    let tomorrow = [];

    data.forEach((element) => {
        const elementDay = new Date((element.dt + timezone) * 1000).getUTCDay();
        if (elementDay === day) {
            today.push(element);
        } else {
            tomorrow.push(element);
        }
    });

    const todayList = today.map((element) => {
        return (
            <div className={styles.hourItem} key={element.dt}>
                <div className={styles.hour}>
                    {new Date((element.dt + timezone) * 1000).getUTCHours()}
                </div>
                <Icon code={element.weather[0].icon} />
                <div className={styles.temp}>{Math.floor(element.temp)}</div>
            </div>
        );
    });

    const tomorrowList = tomorrow.map((element) => {
        return (
            <div className={styles.hourItem} key={element.dt}>
                <div className={styles.hour}>
                    {new Date((element.dt + timezone) * 1000).getUTCHours()}
                </div>
                <Icon code={element.weather[0].icon} />
                <div className={styles.temp}>{Math.floor(element.temp)}</div>
            </div>
        );
    });

    return (
        <div className={styles.weatherData}>
            <div className={styles.hourlyList}>
                <div className={styles.tableHeading}>Today</div>
                <div className={styles.listContent}>{todayList}</div>
            </div>
            <div className={styles.hourlyList}>
                <div className={styles.tableHeading}>Tomorrow</div>
                <div className={styles.listContent}>{tomorrowList}</div>
            </div>
        </div>
    );
};

export default Hourly;
