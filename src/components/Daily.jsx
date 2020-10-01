import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.css';

import Icon from './misc/Icon';

const Daily = ({ timezone, data }) => {
    const list = data.map((element) => {
        const day = new Date((element.dt + timezone) * 1000).toLocaleString(
            'en-us',
            {
                weekday: 'long',
            }
        );

        return (
            <div id="daily" className={styles.row} key={element.dt}>
                <div className={styles.heading}>{day}</div>
                <div className={styles.data}>
                    <div className={styles.icon}>
                        <Icon code={element.weather[0].icon} />
                        <div className="temp" style={{ fontSize: '16px' }}>
                            {Math.floor(element.temp.day)}
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return <div className={styles.weatherDataList}>{list}</div>;
};

Daily.propTypes = {
    timezone: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Daily;
