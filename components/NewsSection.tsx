import Link from 'next/link'
import Image from 'next/image'
import styles from './NewsSection.module.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NewsSection = ({ data, news }: { data: any, news: any[] }) => {
    return (
        <section className={styles.section} id="news">
            <div className={styles.container}>
                <div style={{ textAlign: 'center' }}>
                    <h2 className={styles.title}>{data.title}</h2>
                    <p className={styles.description}>{data.description}</p>
                </div>

                <div className={styles.slider}>
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {news?.map((item: any, i: number) => {
                        const post = item.node
                        return (
                            <div key={i} className={styles.slide}>
                                <div className={styles.imageContainer}>
                                    {post.coverImage ? (
                                        <Image src={post.coverImage} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                                    ) : (
                                        <div style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc' }}>
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.date}>
                                        {new Date(post.date).toLocaleDateString('de-DE')}
                                    </div>
                                    <h3 className={styles.newsTitle}>{post.title}</h3>
                                    <p className={styles.lead}>
                                        {post.lead}
                                    </p>
                                    {post.externalLink ? (
                                        <Link
                                            href={post.externalLink}
                                            target={post.externalLink.startsWith('http') ? '_blank' : undefined}
                                            rel={post.externalLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className={styles.link}
                                        >
                                            Mehr lesen &rarr;
                                        </Link>
                                    ) : (
                                        <span style={{ fontSize: '0.9rem', color: '#999' }}>Coming soon</span>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
