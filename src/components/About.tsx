import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className="container">
                <h2 className="section-title">Sobre Mí</h2>
                <div className={styles.grid}>
                    <div className={styles.text}>
                        <p>
                            ¡Hola! Soy David, estudiante de Ingeniería Informática en ESIC University.
                            Me gusta investigar distintas áreas del mundo IT y entender cómo la tecnología evoluciona a cada rato y se aplica a situaciones reales, más allá del aula o del código.
                        </p>
                        <p>
                            Antes de la ingeniería, completé un Grado Superior en Desarrollo de Aplicaciones Multiplataforma, que me dio una base técnica sólida en programación.
                            Sin embargo, el paso a la ingeniería me ha ayudado a ver la tecnología con otros ojos y poder abrir la mente para nuevos retos: entender no solo cómo se construye, sino también cómo se integra en la nube, cómo se analiza con datos o cómo puede mejorar la forma en que las empresas trabajan y deciden.
                        </p>
                        <p>
                            Hoy busco seguir creciendo, aprendiendo y participando en proyectos donde la tecnología marque la diferencia. Me interesa especialmente todo lo que une desarrollo, datos y cloud.
                        </p>
                    </div>
                    <div className={styles.skills}>
                        <div className={styles.skillItem}>
                            <span className={styles.skillName}>Lenguajes</span>
                            <p>Java, JavaScript, Python, Kotlin</p>
                        </div>
                        <div className={styles.skillItem}>
                            <span className={styles.skillName}>Cloud & Data</span>
                            <p>Azure Fundamentals, Data Analytics, Power BI</p>
                        </div>
                        <div className={styles.skillItem}>
                            <span className={styles.skillName}>Enterprise</span>
                            <p>SAP, ABAP</p>
                        </div>
                        <div className={styles.skillItem}>
                            <span className={styles.skillName}>Formación</span>
                            <p>Ingeniería Informática, DAM</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
