import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={`${styles.hero} container`}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hola, soy <br />
                    <span className={styles.highlight}>David Rodriguez Diaz</span>
                </h1>
                <p className={styles.subtitle}>
                    Estudiante de Ingeniería Informática apasionado por el desarrollo, los datos y el cloud.
                    Creando soluciones tecnológicas que marquen la diferencia.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link href="#projects" className="btn">
                        Ver Proyectos
                    </Link>
                    <a href="https://github.com/Cosmichomeless" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#333' }}>
                        GitHub
                    </a>
                    <Link href="#contact" className="btn" style={{ background: 'transparent', border: '1px solid var(--card-border)' }}>
                        Contactar
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
