import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    David Rodriguez Diaz
                </Link>
                <div className={styles.links}>
                    <Link href="#about" className={styles.link}>
                        Sobre Mí
                    </Link>
                    <Link href="#experience" className={styles.link}>
                        Experiencia
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
