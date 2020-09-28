import React from 'react';
import PropTypes from 'prop-types';

import sun from './assets/sun.png';
import moon from './assets/moon.png';
import sunCloud from './assets/sunCloud.png';
import moonCloud from './assets/moonCloud.png';
import cloud from './assets/cloud.png';
import overcast from './assets/overcast.png';
import heavyRain from './assets/heavyRain.png';
import rain from './assets/rain.png';
import thunder from './assets/thunder.png';
import snow from './assets/snow.png';
import mist from './assets/mist.png';

const Icon = ({ code }) => {
    const desc = 'todo'; // TODO:

    switch (code) {
        // clear day
        case '01d':
            return <img src={sun} alt={desc} />;
        // clear night.. 105px
        case '01n':
            return <img src={moon} alt={desc} />;
        // cloudy-sun day
        case '02d':
            return <img src={sunCloud} alt={desc} />;
        // cloudy-moon night
        case '02n':
            return <img src={moonCloud} alt={desc} />;
        // single cloud
        case '03d':
        case '03n':
            return <img src={cloud} alt={desc} />;
        // multi-cloud (darker at back)
        case '04d':
        case '04n':
            return <img src={overcast} alt={desc} />;
        // rain cloud
        case '09d':
        case '09n':
            return <img src={heavyRain} alt={desc} />;
        // rain cloud
        case '10d':
        case '10n':
            return <img src={rain} alt={desc} />;
        // thunder
        case '11d':
        case '11n':
            return <img src={thunder} alt={desc} />;
        // snow
        case '13d':
        case '13n':
            return <img src={snow} alt={desc} />;
        // mist
        case '50d':
        case '50n':
            return <img src={mist} alt={desc} />;
        default:
            return <div>-</div>;
    }
};

Icon.propTypes = {
    code: PropTypes.string.isRequired,
};

export default Icon;
