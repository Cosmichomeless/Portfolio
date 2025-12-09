import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import { FaGithub, FaEnvelope, FaCode, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className={`${styles.hero} container`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Hola, soy David<br />
                        <span className={styles.highlight}> Desarrollador Full Stack </span>
                    </h1>

                    <div className={styles.bio}>
                        <p>
                            ¡Hola! Soy David, estudiante de Ingeniería Informática en ESIC University.
                            Me gusta investigar distintas áreas del mundo IT y entender cómo la tecnología evoluciona a cada rato y se aplica a situaciones reales.
                        </p>
                        <p>
                            Antes de la ingeniería, completé un Grado Superior en DAM, lo que me dio una base sólida en programación. Hoy busco proyectos donde development, data y cloud marquen la diferencia.
                        </p>
                    </div>

                    <div className={styles.actions}>
                        <a href="https://github.com/Cosmichomeless" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#333' }} aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/david-rodr/" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#0077b5' }} aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <Link href="#contact" className="btn" style={{ background: 'transparent', border: '1px solid var(--card-border)' }} aria-label="Contactar">
                            <FaEnvelope />
                        </Link>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/david.png"
                            alt="David Rodriguez"
                            width={400}
                            height={500}
                            className={styles.profileImage}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
