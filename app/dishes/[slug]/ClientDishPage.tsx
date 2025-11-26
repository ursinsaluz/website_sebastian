'use client'

import { useTina } from 'tinacms/dist/react'


import { Hero } from '../../../components/blocks/Hero'
import Image from 'next/image'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ClientDishPage(props: any) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    const dish = data.dish

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Recipe',
                        name: dish.name,
                        description: dish.description,
                        image: [dish.imagePlated, dish.imageRaw, dish.imageSketch].filter(Boolean),
                        author: {
                            '@type': 'Person',
                            name: 'Sebastian Titz',
                        },
                        recipeIngredient: dish.ingredients?.map((ing: any) => `${ing.amount} ${ing.unit} ${ing.name}`),
                        recipeInstructions: dish.instructions?.children?.map((child: any) => ({
                            '@type': 'HowToStep',
                            text: child.children?.map((c: any) => c.text).join(' '),
                        })),
                    }),
                }}
            />

            <Hero data={{
                headline: dish.name,
                subline: dish.description,
                backgroundImage: dish.heroImage
            }} />
            <main style={{ minHeight: '100vh', backgroundColor: '#f8f5f2' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
                        <div>
                            <h3 style={{ fontFamily: 'var(--font-playfair)', marginBottom: '1rem', color: 'var(--color-alpine-slate)' }}>Soil (Raw)</h3>
                            <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden' }}>
                                {dish.imageRaw ? (
                                    <Image src={dish.imageRaw} alt={`${dish.name} raw`} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0' }} />
                                )}
                            </div>
                        </div>
                        <div>
                            <h3 style={{ fontFamily: 'var(--font-playfair)', marginBottom: '1rem', color: 'var(--color-alpine-slate)' }}>Soul (Plated)</h3>
                            <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden' }}>
                                {dish.imagePlated ? (
                                    <Image src={dish.imagePlated} alt={`${dish.name} plated`} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0' }} />
                                )}
                            </div>
                        </div>
                    </div>

                    {dish.imageSketch && (
                        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                            <h3 style={{ fontFamily: 'var(--font-playfair)', marginBottom: '1rem', color: 'var(--color-alpine-slate)' }}>The Concept (Sketch)</h3>
                            <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto', aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff', padding: '1rem' }}>
                                <Image src={dish.imageSketch} alt={`${dish.name} sketch`} fill sizes="(max-width: 768px) 100vw, 600px" style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                    )}

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
                        <div>
                            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-alpine-slate)' }}>Zutaten</h2>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {dish.ingredients?.map((ing: any, i: number) => (
                                    <li key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #ddd', color: 'var(--color-alpine-slate)' }}>
                                        <span>{ing.name}</span>
                                        <span style={{ fontWeight: 'bold' }}>{ing.amount} {ing.unit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-alpine-slate)' }}>Zubereitung</h2>
                            <div style={{ lineHeight: '1.8', color: 'var(--color-alpine-slate)' }}>
                                <TinaMarkdown content={dish.instructions} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}
