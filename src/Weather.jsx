import React from 'react';

import Main from './Main';
import Info from './Info';

const Weather = ({ timezone, main, current, hourly, daily }) => {
    return (
        <div>
            <Main data={main} />
            <Info
                timezone={timezone}
                current={current}
                hourly={hourly}
                daily={daily}
            />
        </div>
    );
};

export default Weather;
