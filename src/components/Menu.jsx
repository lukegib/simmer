import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styles from './Menu.module.css';

import Current from './Current';
import Hourly from './Hourly';
import Daily from './Daily';

const Menu = ({ timezone, current, hourly, daily }) => {
    return (
        <div className={styles.sliderContainer}>
            <Slider dots arrows={false} infinite={false} slidesToShow={1}>
                <Current timezone={timezone} data={current} />
                <Hourly timezone={timezone} data={hourly} />
                <Daily timezone={timezone} data={daily} />
            </Slider>
        </div>
    );
};

Menu.propTypes = {
    timezone: PropTypes.number.isRequired,
    current: PropTypes.shape({
        clouds: PropTypes.number,
        feels_like: PropTypes.number,
        humidity: PropTypes.number,
        pressure: PropTypes.number,
        sunrise: PropTypes.number,
        sunset: PropTypes.number,
        uvi: PropTypes.number,
        wind_dir: PropTypes.string,
        wind_speed: PropTypes.number,
    }).isRequired,
    hourly: PropTypes.arrayOf(PropTypes.object).isRequired,
    daily: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;
