import styles from './TechStack.module.css';
import { SiGo, SiSwift, SiTypescript, SiJavascript, SiPython, SiKotlin, SiSap, SiHtml5, SiCss3, SiNextdotjs, SiSpringboot, SiDocker, SiGit, SiMysql, SiPostgresql } from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { BiCodeAlt, BiBarChart } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";

const TechStack = () => {
    return (
        <section id="tech-stack" className={styles.section}>
            <div className="container">
                <h2 className="section-title">Tecnologías</h2>

                <div className={styles.intro}>
                    <p>
                        En mi viaje por el <span className={styles.highlight}>mundo del desarrollo</span>, he cultivado <span className={styles.highlight}>experiencia y habilidades</span> en una variedad de tecnologías. <span className={styles.highlight}>Mi stack tecnológico incluye:</span>
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Frontend */}
                    <div className={styles.categoryCard}>
                        <h3 className={styles.categoryTitle}>Frontend</h3>
                        <div className={styles.skillsGrid}>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#E34F26' }}><SiHtml5 /></div>
                                <span className={styles.skillName}>HTML</span>
                            </div>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#1572B6' }}><SiCss3 /></div>
                                <span className={styles.skillName}>CSS</span>
                            </div>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#F7DF1E' }}><SiJavascript /></div>
                                <span className={styles.skillName}>JavaScript</span>
                            </div>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#FFFFFF' }}><SiNextdotjs /></div>
                                <span className={styles.skillName}>Next.js</span>
                            </div>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className={styles.categoryCard}>
                        <h3 className={styles.categoryTitle}>Backend</h3>
                        <div className={styles.skillsGrid}>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#E76F00' }}><FaJava /></div>
                                <span className={styles.skillName}>Java</span>
                            </div>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#7F52FF' }}><SiKotlin /></div>
                                <span className={styles.skillName}>Kotlin</span>
                            </div>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#6DB33F' }}><SiSpringboot /></div>
                                <span className={styles.skillName}>Spring Boot</span>
                            </div>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#3776AB' }}><SiPython /></div>
                                <span className={styles.skillName}>Python</span>
                            </div>
                        </div>
                    </div>

                    {/* Cloud & Data */}
                    <div className={styles.categoryCard}>
                        <h3 className={styles.categoryTitle}>Cloud & Data</h3>
                        <div className={styles.skillsGrid}>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#0089D6' }}><VscAzure /></div>
                                <span className={styles.skillName}>Azure</span>
                            </div>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#F2C811' }}><BiBarChart /></div>
                                <span className={styles.skillName}>Power BI</span>
                            </div>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#2496ED' }}><SiDocker /></div>
                                <span className={styles.skillName}>Docker</span>
                            </div>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#2496ED' }}><SiPostgresql /></div>
                                <span className={styles.skillName}>PostgreSQL</span>
                            </div>
                        </div>
                    </div>


                    {/* Enterprise / Tools */}
                    <div className={styles.categoryCard}>
                        <h3 className={styles.categoryTitle}>Enterprise</h3>
                        <div className={styles.skillsGrid}>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#0FAAFF' }}><SiSap /></div>
                                <span className={styles.skillName}>SAP</span>
                            </div>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#B0B0B0' }}><BiCodeAlt /></div>
                                <span className={styles.skillName}>ABAP</span>
                            </div>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#F05032' }}><SiGit /></div>
                                <span className={styles.skillName}>Git</span>
                            </div>
                        </div>
                    </div>
                    {/* Learning */}
                    <div className={styles.categoryCard}>
                        <h3 className={styles.categoryTitle}>Aprendiendo</h3>
                        <div className={styles.skillsGrid}>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#3776AB' }}><SiTypescript /></div>
                                <span className={styles.skillName}>TypeScript</span>
                            </div>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#3776AB' }}><SiSwift /></div>
                                <span className={styles.skillName}>Swift</span>
                            </div>
                            <div className={styles.skillItem}>
                                <div className={styles.iconWrapper} style={{ color: '#3776AB' }}><SiGo /></div>
                                <span className={styles.skillName}>Go</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
