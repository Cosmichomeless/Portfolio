import styles from './Contact.module.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className={`section container ${styles.contact}`}>
            <div className={styles.card}>
                <h2 className={styles.title}>
                    ¿Tienes un <span className={styles.highlight}>proyecto</span> en mente?
                </h2>
                <p className={styles.text}>
                    Actualmente estoy abierto a nuevas oportunidades y colaboraciones.
                    Si quieres hablar sobre tecnología, datos o desarrollo, ¡mi bandeja de entrada está siempre abierta!
                </p>

                <div className={styles.actions}>
                    <a href="mailto:Drodriguez1703@gmail.com" className={`${styles.button} ${styles.emailBtn}`}>
                        <FaEnvelope /> Envíame un correo
                    </a>
                    <a href="https://www.linkedin.com/in/david-rodr/" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.socialBtn}`}>
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://github.com/Cosmichomeless" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.socialBtn}`}>
                        <FaGithub /> GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
