import Link from 'next/link';
import Image from 'next/image';
import styles from './Projects.module.css';
import { FiExternalLink, FiMail } from 'react-icons/fi';

type ProjectType = {
    title: string;
    description: string;
    link?: string;
    image?: string;
    linkLabel?: string;
    requestDemo?: boolean;
    type?: string;
    location?: string;
    date?: string;
    tech?: string[];
};

const projects: ProjectType[] = [
    {
        title: "Coremap",
        type: "Aplicación Móvil",
        description: "Aplicación nativa diseñada para la organización de conceptos transversales y generación de rutas de aprendizaje (Roadmaps) mediante IA. Implementación de 'CoreMap Architect' mediante OpenAI para generar arquitecturas de datos complejas (nodos y tiempos) en formato JSON.",
        tech: ["Swift (SwiftUI)", "Go", "PostgreSQL", "Docker", "Railway", "OpenAI API"],
        link: "https://coremap.app/",
        image: "/images/coremap.png",
        linkLabel: "Landing"
    }
];

const Projects = () => {
    return (
        <section id="projects" className={`section ${styles.section} container`}>
            <div className={styles.intro}>
                <h2 className="section-title">Proyectos</h2>
                <p style={{ color: '#8b949e', marginTop: '1rem' }}>
                    Algunas de las cosas que he construido recientemente.
                </p>
            </div>

            <div className={styles.grid}>
                {projects.map((project, index) => {
                    const imageContent = (
                        <>
                            <div className={styles.browserHeader}>
                                <div className={styles.dot} />
                                <div className={styles.dot} />
                                <div className={styles.dot} />
                            </div>
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={styles.projectImage}
                                />
                            ) : (
                                <div className={styles.placeholder}>
                                    <span>Próximamente</span>
                                </div>
                            )}
                            {project.link && project.link !== "#" && (
                                <div className={styles.imageOverlay}>
                                    <span className={styles.overlayText}>Ver Proyecto</span>
                                </div>
                            )}
                        </>
                    );

                    return (
                        <div key={index} className={styles.card}>
                            {project.link && project.link !== "#" ? (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.imageWrapper}
                                >
                                    {imageContent}
                                </Link>
                            ) : (
                                <div className={styles.imageWrapper}>
                                    {imageContent}
                                </div>
                            )}

                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    {(project.type || project.date || project.location) && (
                                        <div className={styles.projectMeta}>
                                            {project.type && <span className={styles.projectType}>{project.type}</span>}
                                            {project.date && <span className={styles.projectDate}>{project.date}</span>}
                                            {project.location && <span className={styles.projectLocation}> • {project.location}</span>}
                                        </div>
                                    )}
                                </div>
                                <p className={styles.description}>{project.description}</p>

                                {project.tech && project.tech.length > 0 && (
                                    <div className={styles.techStack}>
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className={styles.techItem}>{tech}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
