import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={`section container ${styles.contact}`}>
            <h2 className="section-title">Contacto</h2>
            <div className={styles.formBox}>
                <p className={styles.text}>
                    Estoy buscando nuevas oportunidades. Si tienes alguna pregunta o quieres saludar, ¡no dudes en contactarme!
                </p>
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                    <a href="mailto:david@example.com" className={styles.emailLink}>
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/david-rodr/" target="_blank" rel="noopener noreferrer" className={styles.emailLink}>
                        LinkedIn
                    </a>
                    <a href="https://github.com/Cosmichomeless" target="_blank" rel="noopener noreferrer" className={styles.emailLink}>
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
