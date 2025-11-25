'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import { Menu, X } from 'lucide-react'

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    ST
                </Link>

                <nav className={styles.desktopNav}>
                    <Link href="/#philosophy" className={styles.navLink}>Philosophie</Link>
                    <Link href="/#about" className={styles.navLink}>Über Mich</Link>
                    <Link href="/#offerings" className={styles.navLink}>Angebote</Link>
                    <Link href="/contact" className={styles.navLink}>Kontakt</Link>
                </nav>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {isMobileMenuOpen && (
                    <div className={styles.mobileNav}>
                        <Link href="/#philosophy" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Philosophie</Link>
                        <Link href="/#about" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Über Mich</Link>
                        <Link href="/#offerings" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Angebote</Link>
                        <Link href="/contact" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Kontakt</Link>
                    </div>
                )}
            </div>
        </header>
    )
}
