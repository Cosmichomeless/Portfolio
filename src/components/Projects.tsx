import styles from './Projects.module.css';

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured shopping platform built with Next.js and Stripe.",
        tags: ["Next.js", "TypeScript", "Stripe"],
    },
    {
        title: "Task Management App",
        description: "A productivity tool for managing daily tasks and team collaboration.",
        tags: ["React", "Redux", "Firebase"],
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather tracking application with interactive maps.",
        tags: ["JavaScript", "API Integration", "CSS"],
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section container">
            <h2 className="section-title">Proyectos Destacados</h2>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardImage}>
                            {/* Image would go here */}
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.cardDesc}>{project.description}</p>
                            <div className={styles.tags}>
                                {project.tags.map((tag) => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
