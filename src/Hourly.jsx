import React from 'react';

import Icon from './Icon';
import styles from './Info.module.css';

const failedVersion = (
    <div className={styles.row} key="">
        <div className={styles.data}>
            <div className={styles.icon}>
                <Icon code="01n" />
                <div className="temp">0</div>
            </div>
        </div>
        <div className={styles.heading}>3</div>
        <div className={styles.data}>
            <div className={styles.icon}>
                <Icon type="01d" />
                <div className="temp">21</div>
            </div>
        </div>
    </div>
);

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
