import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={styles.navContainer}>
            <div className={`${styles.navItem} ${styles.active}`}>Now</div>
            <div className={styles.navItem}>Hourly</div>
            <div className={styles.navItem}>
                <a href="#daily">Daily</a>
            </div>
        </nav>
    );
};

export default Nav;
