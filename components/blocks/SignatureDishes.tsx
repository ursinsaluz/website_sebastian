import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './SignatureDishes.module.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SignatureDishes = ({ data }: { data: any }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (sliderRef.current) {
            const scrollLeft = sliderRef.current.scrollLeft;
            const width = sliderRef.current.offsetWidth;
            // Assuming 85vw width + 20px gap approx, but simpler to just divide by scrollWidth / count
            // Or better: calculate index based on scroll position
            // The slide width is 85vw.
            // Let's use the center point to determine active slide
            const slideWidth = sliderRef.current.scrollWidth / (data.dishes?.length || 1);
            const index = Math.round(scrollLeft / slideWidth);
            setActiveSlide(index);
        }
    };

    const scrollToSlide = (index: number) => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.scrollWidth / (data.dishes?.length || 1);
            sliderRef.current.scrollTo({
                left: index * slideWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className={styles.signatureDishes} id="signatureDishes">
            <div className={styles.container}>
                <h2 className={styles.title}>{data.title}</h2>

                <div
                    className={styles.slider}
                    ref={sliderRef}
                    onScroll={handleScroll}
                >
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

                <div className={styles.dotsContainer}>
                    {data.dishes?.map((_: any, index: number) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === activeSlide ? styles.dotActive : ''}`}
                            onClick={() => scrollToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
