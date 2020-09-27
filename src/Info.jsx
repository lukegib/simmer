import React from 'react';
import styles from './Info.module.css';
import Slider from 'react-slick';

import Now from './Now';
import Hourly from './Hourly';
import Daily from './Daily';

const Info = ({ timezone, current, hourly, daily }) => {
    return (
        <div className={styles.sliderContainer}>
            <Slider
                dots={true} // TODO:
                arrows={false}
                infinite={false}
                slidesToShow={1}
            >
                <Now timezone={timezone} data={current} />
                <Hourly timezone={timezone} data={hourly} />
                <Daily timezone={timezone} data={daily} />
            </Slider>
        </div>
    );
};

export default Info;
