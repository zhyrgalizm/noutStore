import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer__store}>
            <div className={styles.footer__block}>
                <div className='container'>
                    <div className={styles.footer__top}>
                        <div className={styles.footer__card}>
                            <h2>Режим работы:</h2>
                            <p>c 10:00 до 21:30</p>
                            <p>Без выходных</p>
                        </div>
                        <div className={styles.footer__card}>
                            <h2>Телефон:</h2>
                            <p>+996 (550) 600 000</p>
                            <p>+996 (550) 600 500</p>
                        </div>
                        <div className={styles.footer__card}>
                            <h2>Aдрес:</h2>
                            <p>Bishkek, Business center Olymp</p>
                        </div>
                        <div className={styles.navigatiion}>
                            <nav className={styles.menu__nav}>
                                <li><NavLink className={styles.menu} to='/'>Home</NavLink></li>
                                <li><NavLink className={styles.menu} to='/aboutus'>About Us</NavLink></li>
                                <li><NavLink className={styles.menu} to='/basket'>Cart</NavLink></li>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <h1>© Copyrights 2022 Design by studentsITCBootcamp</h1>
            </div>
        </footer>
    );
};

export default Footer;