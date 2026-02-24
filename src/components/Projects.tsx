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
};

const projects: ProjectType[] = [
    {
        title: "Coremap",
        description: "Herramienta de productividad con IA que transforma metas complejas en mapas de nodos dinámicos.",
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
                                </div>
                                <p className={styles.description}>{project.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
