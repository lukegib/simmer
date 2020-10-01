import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';

import Icon from './misc/Icon';

const Main = ({ data }) => {
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

Main.propTypes = {
    data: PropTypes.shape({
        temp: PropTypes.number,
        type: PropTypes.string,
        icon_code: PropTypes.string,
    }).isRequired,
};

export default Main;
