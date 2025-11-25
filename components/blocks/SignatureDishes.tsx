import Image from 'next/image'
import styles from './SignatureDishes.module.css'

export const SignatureDishes = ({ data }: { data: any }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{data.title}</h2>

                <div className={styles.slider}>
                    {data.dishes?.map((item: any, index: number) => {
                        const dish = item.dish
                        if (!dish) return null

                        return (
                            <div key={index} className={styles.slide}>
                                <div className={styles.imageContainer}>
                                    {dish.imageRaw && (
                                        <div className={styles.imageRaw}>
                                            <Image
                                                src={dish.imageRaw}
                                                alt={`${dish.name} Raw`}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <span className={styles.label}>Soil</span>
                                        </div>
                                    )}
                                    {dish.imagePlated && (
                                        <div className={styles.imagePlated}>
                                            <Image
                                                src={dish.imagePlated}
                                                alt={`${dish.name} Plated`}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <span className={styles.label}>Soul</span>
                                        </div>
                                    )}
                                </div>
                                <div className={styles.info}>
                                    <h3 className={styles.dishName}>{dish.name}</h3>
                                    <p className={styles.dishDescription}>{dish.description}</p>
                                    <span className={styles.dishType}>{dish.type}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
