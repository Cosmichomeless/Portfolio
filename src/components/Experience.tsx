import Link from 'next/link';
import Image from 'next/image';
import styles from './Experience.module.css';

const experiences = [
    {
        role: "Grado en Ingeniería Informática",
        company: "ESIC University",
        date: "Sept 2025 - Actualidad",
        description: "Formación en ingeniería de software, sistemas, y gestión de proyectos tecnológicos.",
        image: "/images/esicU.png"
    },
    {
        role: "SAP ABAP Developer",
        company: "COFARES · Contrato de formación",
        date: "Mar 2025 - Jun 2025",
        description: "Desarrollo en entorno SAP y ABAP, conectando la parte técnica con la realidad del negocio en el sector farmacéutico.",
        image: "/images/cofares.png"
    },
    {
        role: "Data Analytics & Machine Learning",
        company: "ESIC Business & Marketing School",
        date: "Oct 2023 - Jun 2025",
        description: "Formación especializada en análisis de datos, Microsoft Azure Machine Learning y Power BI.",
        image: "/images/esicB.png"
    },
    {
        role: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
        company: "ESIC Business & Marketing School",
        date: "Sept 2023 - Jun 2025",
        description: "Ciclo formativo de grado superior enfocado en el desarrollo de software para diferentes plataformas y dispositivos.",
        image: "/images/esicB.png"
    },
    {
        role: "Certificación: Azure Fundamentals",
        company: "Microsoft",
        date: "Abr 2024",
        description: "Conocimientos fundamentales sobre servicios en la nube y cómo se proporcionan con Microsoft Azure.",
        image: "/images/azure.png"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section container">
            <h2 className="section-title">Experiencia y Formación</h2>
            <div className={styles.timeline}>
                {experiences.map((item, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.iconWrapper}>
                            <Image
                                src={item.image}
                                alt={item.company}
                                width={40}
                                height={40}
                                style={{ borderRadius: '50%', objectFit: 'contain', background: 'white' }}
                                className={styles.companyLogo}
                            />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <h3 className={styles.role}>{item.role}</h3>
                                <span className={styles.date}>{item.date}</span>
                            </div>
                            <div className={styles.company}>{item.company}</div>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
