import Link from 'next/link';
import Image from 'next/image';
import styles from './Experience.module.css';

const experiences = [
    {
        role: "Prompt Design in Vertex AI",
        company: "Google",
        date: "Feb 2026",
        description: "Curso de ingeniería de Prompt para IA generativa.",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
        link: "https://www.credly.com/earner/earned/badge/98411323-a1ed-4cd0-a00a-87e014077c90"
    },
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
        image: "/images/azure.png",
        link: "https://www.credly.com/earner/earned/badge/dfa2c971-9ab1-448b-89e8-0dd70858b3ad"
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
                            {item.link && (
                                <Link
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.credentialLink}
                                >
                                    Ver credencial
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
