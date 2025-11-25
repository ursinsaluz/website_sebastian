import Image from 'next/image'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import styles from './Philosophy.module.css'

export const Philosophy = ({ data }: { data: any }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2 className={styles.title}>{data.title}</h2>
                    <div className={styles.body}>
                        <TinaMarkdown content={data.body} />
                    </div>
                </div>
                {data.image && (
                    <div className={styles.imageWrapper}>
                        <Image
                            src={data.image}
                            alt={data.title}
                            width={600}
                            height={800}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                )}
            </div>
        </section>
    )
}
