import Image from 'next/image'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import styles from './About.module.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const About = ({ data }: { data: any }) => {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{data.title}</h2>
                    <div className={styles.body}>
                        <TinaMarkdown content={data.body} />
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.timeline}>
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {data.timeline?.map((item: any, index: number) => (
                            <div key={index} className={styles.timelineItem}>
                                <div className={styles.year}>{item.year}</div>
                                <div className={styles.station}>{item.station}</div>
                                <div className={styles.description}>{item.description}</div>
                            </div>
                        ))}
                    </div>

                    {data.image && (
                        <div className={styles.imageWrapper}>
                            <Image
                                src={data.image}
                                alt="Sebastian Titz"
                                width={500}
                                height={700}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
