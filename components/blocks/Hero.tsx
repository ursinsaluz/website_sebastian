import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Hero = ({ data }: { data: any }) => {
    return (
        <section className={styles.hero}>
            {data.backgroundImage ? (
                <div className={styles.bgImage}>
                    <img
                        src={data.backgroundImage}
                        alt="Background"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div className={styles.overlay} />
                </div>
            ) : (
                <div className={styles.bgImage} style={{ backgroundColor: 'var(--color-alpine-slate)' }} />
            )}
            <div className={styles.content}>
                <h1 className={styles.headline}>{data.headline}</h1>
                <p className={styles.subline}>{data.subline}</p>
                {data.ctaLink && (
                    <Link href={data.ctaLink} className={styles.cta}>
                        {data.ctaText}
                    </Link>
                )}
            </div>
        </section>
    )
}
