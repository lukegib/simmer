import React from 'react';

import Icon from './Icon';
import styles from './Info.module.css';

const Daily = ({ timezone, data }) => {
    console.log(data);

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

export default Daily;
