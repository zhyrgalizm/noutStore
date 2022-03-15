import React, { useEffect } from 'react';
import styles from './About.module.css'
import people from './../../Images/aboutus.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {

    }, [])
    return (
        <div>
            <div className={styles.about__back}>
                <div className={styles.about__card}>
                    <img className={styles.peoples} src={people} alt="" />
                    <div className={styles.card__text}>
                        <h2>About Us</h2>
                        <div className={styles.paragraph}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatum sit, repellat quaerat omnis exercitationem maiores eum dolorum non! Dolores illum consectetur porro inventore sunt labore, laudantium reprehenderit repellendus nostrum excepturi quasi numquam incidunt nemo doloremque? Rerum harum voluptatibus nisi debitis amet illum fugiat sequi error alias quia, reiciendis ratione quo deleniti eligendi, doloremque et iure dolorem! Sapiente culpa modi dolores dolorem mollitia eveniet, nam optio quaerat rerum esse voluptas delectus aspernatur similique deserunt nemo quo et natus illo quas ullam sed aliquid. Cupiditate eligendi vero ducimus repellendus deleniti quos beatae, quas eos accusantium obcaecati amet, recusandae repellat ab id. Pariatur, consectetur ipsum. Laborum omnis accusantium fuga ducimus maxime eos delectus suscipit numquam itaque non saepe deserunt, neque optio labore quo! Omnis, accusantium. Tempore architecto velit molestias, accusantium eum, facilis ad eos doloremque dolores, necessitatibus minus facere explicabo sequi iure corporis quos nobis labore quas magni aspernatur. Consectetur quod explicabo perspiciatis et. Aperiam blanditiis exercitationem sunt quia. Illo reprehenderit iusto enim esse unde aut? Ducimus, eos atque assumenda cumque dolore voluptas quam fugit nisi provident fugiat. Labore architecto quibusdam doloremque maxime, maiores iure eligendi delectus assumenda vitae consectetur aliquid corporis adipisci ducimus pariatur in qui, asperiores laborum. Accusantium, aliquid nobis!</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro dolorum delectus facilis eos maxime reprehenderit fugiat dolorem dolor molestiae, aperiam dicta cupiditate, quidem, pariatur aliquid et ipsa quos aliquam sunt hic. Distinctio, in dolorum ratione neque voluptates tenetur aperiam incidunt, sint ipsum, fugiat assumenda cumque repellendus eos fuga id! Qui sed labore, doloribus a nihil alias molestiae deleniti quidem veritatis nesciunt incidunt similique ullam, eligendi iste eos debitis autem inventore perspiciatis aut! Amet et laboriosam earum distinctio molestiae. Commodi iusto fugit modi voluptates officiis, ea inventore sint accusantium architecto libero! Nobis expedita quas quos hic numquam rem sapiente odit aspernatur.</p>
                            <h3>МИЛИОН ЛЕТ НА РЫНКЕ</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;