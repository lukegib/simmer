import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.css';

import Icon from './misc/Icon';

const Hourly = ({ timezone, data }) => {
    const today = [];
    const tomorrow = [];
    const day =
        data[0] == null
            ? new Date().getDay()
            : new Date((data[0].dt - 3600 + timezone) * 1000).getUTCDay(); // day for current hour (3600 seconds = 1 hour)

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
                <Icon
                    code={element.weather[0].icon}
                    desc={element.weather[0].main}
                />
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
                <Icon
                    code={element.weather[0].icon}
                    desc={element.weather[0].main}
                />
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

Hourly.propTypes = {
    timezone: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Hourly;
