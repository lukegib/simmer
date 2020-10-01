import React from 'react';
import PropTypes from 'prop-types';

import Main from './Main';
import Menu from './Menu';

const Weather = ({ timezone, main, current, hourly, daily }) => {
    return (
        <div>
            <Main data={main} />
            <Menu
                timezone={timezone}
                current={current}
                hourly={hourly}
                daily={daily}
            />
        </div>
    );
};

Weather.propTypes = {
    timezone: PropTypes.number.isRequired,
    main: PropTypes.shape({
        temp: PropTypes.number,
        type: PropTypes.string,
        icon_code: PropTypes.string,
    }).isRequired,
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

export default Weather;
