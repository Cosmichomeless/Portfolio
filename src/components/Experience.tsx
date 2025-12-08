import styles from './Experience.module.css';

const experiences = [
    {
        role: "SAP Advanced Business Application Programming Developer",
        company: "COFARES · Contrato de formación",
        date: "Mar 2025 - Jun 2025",
        description: "Desarrollo en entorno SAP y ABAP, conectando la parte técnica con la realidad del negocio en el sector farmacéutico."
    },
    {
        role: "Grado en Ingeniería Informática",
        company: "ESIC University",
        date: "Sept 2025 - Actualidad",
        description: "Formación en ingeniería de software, sistemas, y gestión de proyectos tecnológicos."
    },
    {
        role: "Especialización en Data Analytics y Machine Learning",
        company: "ESIC Business & Marketing School",
        date: "Oct 2023 - Jun 2025",
        description: "Formación especializada en análisis de datos, Microsoft Azure Machine Learning y Power BI."
    },
    {
        role: "Certificación: Azure Fundamentals",
        company: "Microsoft",
        date: "Abr 2024",
        description: "Conocimientos fundamentales sobre servicios en la nube y cómo se proporcionan con Microsoft Azure."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section container">
            <h2 className="section-title">Experiencia y Formación</h2>
            <div className={styles.timeline}>
                {experiences.map((item, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <span className={styles.date}>{item.date}</span>
                        <h3 className={styles.role}>{item.role}</h3>
                        <div className={styles.company}>{item.company}</div>
                        <p className={styles.description}>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
