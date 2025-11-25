import Link from 'next/link'
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h2 className={styles.logo}>Sebastian Titz</h2>
                        <p className={styles.tagline}>Soil to Soul.</p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h3>Navigation</h3>
                            <Link href="/#philosophy">Philosophie</Link>
                            <Link href="/#about">Über Mich</Link>
                            <Link href="/#offerings">Angebote</Link>
                        </div>
                        <div className={styles.column}>
                            <h3>Kontakt</h3>
                            <p>Klinik Gut Fläsch</p>
                            <p>Restaurant PINOT</p>
                            <a href="mailto:contact@sebastiantitz.ch">contact@sebastiantitz.ch</a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Sebastian Titz. All rights reserved.</p>
                    <div className={styles.legal}>
                        <Link href="/impressum">Impressum</Link>
                        <Link href="/datenschutz">Datenschutz</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
