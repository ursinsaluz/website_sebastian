import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.css'

export const Hero = ({ data }: { data: any }) => {
    return (
        <section className={styles.hero}>
            {data.backgroundImage && (
                <div className={styles.bgImage}>
                    <Image
                        src={data.backgroundImage}
                        alt="Background"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div className={styles.overlay} />
                </div>
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
