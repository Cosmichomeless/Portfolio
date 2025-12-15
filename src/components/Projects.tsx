import Link from 'next/link';
import Image from 'next/image';
import styles from './Projects.module.css';
import { FiExternalLink, FiMail } from 'react-icons/fi';

const projects = [
    {
        title: "Beat Finder Web",
        description: "Dashboard musical inteligente. Gestiona playlists y descubre música con Spotify + Deezer.",
        link: "https://bf-web-taupe.vercel.app/",
        image: "/images/BeatFinderWeb.png",
        requestDemo: true,
    },
    {
        title: "Beat Finder App",
        description: "App nativa con 'Swipes' estilo Tinder. Backend Spring Boot y algoritmos personalizados.",
        link: "https://landingbf.vercel.app/",
        image: "/images/BeatFinderMobile.png",
        linkLabel: "Web"
    },
    {
        title: "My roadmap Proximamente",
        description: "Creador de roadmap para proyectos.",
        link: "#",
        image: null,
    },

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
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={styles.card}
                    >
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.title}>{project.title}</h3>
                            </div>
                            <p className={styles.description}>{project.description}</p>

                            <div className={styles.actions}>
                                {project.link !== "#" && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.btn} ${styles.btnPrimary}`}
                                    >
                                        {project.linkLabel || "Visitar Sitio"} <FiExternalLink />
                                    </a>
                                )}
                                {project.requestDemo && (
                                    <a
                                        href="mailto:Drodriguez1703@gmail.com?subject=Solicitud Demo Beat Finder"
                                        className={`${styles.btn} ${styles.btnSecondary}`}
                                    >
                                        Pedir Demo <FiMail />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className={styles.imageWrapper}>
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={300}
                                    height={200}
                                    className={styles.projectImage}
                                />
                            ) : (
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#30363d'
                                }}>
                                    <span>Próximamente</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
