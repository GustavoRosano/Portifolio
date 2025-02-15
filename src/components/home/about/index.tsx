import styles from '../../../styles/Home/about.module.css'
import React, { useEffect, useState, useRef } from "react";
import Image from 'next/image';

import ProfilePicture from '../../../assets/png/profile-picture.png'


const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);


    return (
        <div 
            id='sobre-mim' 
            className={`${styles.about} ${isVisible ? styles.animate : ''}`}
            ref={aboutRef}
        >

            <div className={styles.aboutContainer}>
                <h2 className={styles.aboutTitle}>Sobre Mim</h2>
                <div className={styles.aboutContent}>
                    <Image src={ProfilePicture} alt='Foto Profissional' className={styles.profilePicture} />
                    <div className={styles.infoContainer}>
                        <p className={styles.text}>Olá, sou Gustavo Rosano Teixeira, Desenvolvedor Front-end formado em Análise e Desenvolvimento de Sistemas pela FMU. Sou apaixonado por tecnologia e por transformar ideias em soluções reais.</p>
                        <p className={styles.text}>Tenho experiência em desenvolvimento com ferramentas como <b>React.js</b>, <b>Next.js</b>, <b>Tailwind CSS</b> e <b>Typescript</b> além de atuar em plataformas como <b>Vtex</b>, <b>Shopify</b> e <b>Wakecommerce</b>.</p>
                        <p className={styles.text}>Minha trajetória inclui projetos desafiadores como freelancer e passagens por empresas como Livraria Saraiva e Oba Hortifruti, onde pude criar interfaces funcionais e impactantes. </p>
                        <p className={styles.text}>Sou proativo, dedicado e sempre em busca de aprender algo novo. Acredito no poder do código para simplificar problemas e criar experiências que realmente fazem a diferença.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
