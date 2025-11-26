import Image from 'next/image'
import Link from 'next/link'
import styles from './SignatureDishes.module.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SignatureDishes = ({ data }: { data: any }) => {
    return (
        <section className={styles.signatureDishes} id="signatureDishes">
            <div className={styles.container}>
                <h2 className={styles.title}>{data.title}</h2>

                <div className={styles.slider}>
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {data.dishes?.map((item: any, index: number) => {
                        const dish = item.dish
                        if (!dish) return null

                        return (
                            <Link key={index} href={`/dishes/${dish._sys.filename}`} className={styles.slide} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className={styles.imageContainer}>
                                    {dish.imageRaw && (
                                        <div className={styles.imageRaw}>
                                            <Image
                                                src={dish.imageRaw}
                                                alt={`${dish.name} Raw`}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <span className={styles.label}>Soul</span>
                                        </div>
                                    )}
                                </div>
                                <div className={styles.info}>
                                    <h3 className={styles.dishName}>{dish.name}</h3>
                                    <p className={styles.dishDescription}>{dish.description}</p>
                                    <div className={styles.cardFooter}>
                                        <span className={styles.dishType}>{dish.type}</span>
                                        <span className={styles.recipeLink}>Zum Rezept &rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
