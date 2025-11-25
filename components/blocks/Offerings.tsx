import Link from 'next/link'
import Image from 'next/image'
import styles from './Offerings.module.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Offerings = ({ data }: { data: any }) => {
    return (
        <section className={styles.section} id="offerings">
            <div className={styles.container}>
                <h2 className={styles.title}>{data.title}</h2>

                <div className={styles.grid}>
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {data.items?.map((item: any, index: number) => (
                        <div key={index} className={styles.card}>
                            {item.image && (
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            )}
                            <div className={styles.content}>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <p className={styles.description}>{item.description}</p>
                                {item.link && (
                                    <Link href={item.link} className={styles.link}>
                                        Mehr erfahren &rarr;
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
