import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image src="/images/Logo.png" alt="Logo" width={100} height={100} className={styles.logoImage} />
                    <span className={styles.logoText}>David | Desarrollador Full Stack</span>
                </Link>
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>
                        Inicio
                    </Link>
                    <Link href="#experience" className={styles.link}>
                        Experiencia
                    </Link>
                    <Link href="#tech-stack" className={styles.link}>
                        Tecnologías
                    </Link>
                    <Link href="#projects" className={styles.link}>
                        Proyectos
                    </Link>
                    <Link href="#contact" className={styles.link}>
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
