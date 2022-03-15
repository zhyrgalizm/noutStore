import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAlllaptops, getByName } from '../../Redux/reducers/items-reducer';
import { Link } from 'react-router-dom';

const Home = () => {
    const laptopArr = useSelector(state => state?.laptop?.laptopArr)
    const dispatch = useDispatch()

    const search = (e) => {
        dispatch(getByName(e?.target?.value))
    }


    useEffect(() => {
        dispatch(getAlllaptops())
        AOS.init();
    }, [])


    const addToBasket = (el) => {
        let all_products = JSON.parse(localStorage.getItem('products'))
        let arr = all_products || []

        const product = {
            name: el.title,
            id: el.id,
            count: 1,
            price: el.price,
            img: el.image,
        }

        let one_elem = arr.find(elem => el.id == elem.id)
        if (one_elem) {
            one_elem.count = one_elem.count + 1
            el.totalPrice = one_elem.price * one_elem.count
        } else {
            arr.push(product)
        }

        localStorage.setItem('products', JSON.stringify(arr))
    }



    return (
        <section className={styles.home_section}>

            <div className={styles.title_back}>
                <h2 >Home page</h2>
            </div>
            <div className='container'>
                <form className={styles.search} onSubmit={e => e.preventDefault()}>
                    <input onChange={search} type='text' placeholder='Enter' className={styles.inp} />
                    <button className={styles.btn}>Search </button>
                </form>
                <div className={styles.menu}>
                    <div className={styles.container}>
                        {
                            laptopArr.map((e) => {
                                return (
                                    <div data-aos="flip-up" data-aos-duration="1500" className={styles.menu_card} key={e.id}>
                                        <Link to={'/detail/' + e?.id}>
                                            <div className={styles.card__img}>
                                                <img src={e.image} alt="" />
                                            </div>
                                            <div className={styles.menu_title}>
                                                <h2>{e.title}</h2>

                                            </div>
                                            <div className={styles.menu_price}>
                                                <p>{e.price}</p>
                                            </div>
                                        </Link>
                                        <button className={styles.add__btn} onClick={() => {
                                            addToBasket(e)
                                        }}>Add To Cart</button>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>




            </div>

        </ section>
    );
};

export default Home;