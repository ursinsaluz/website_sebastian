import { client } from '../../../tina/__generated__/client'
import { useTina } from 'tinacms/dist/react'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

export const dynamicParams = false

export async function generateStaticParams() {
    const dishes = await client.queries.dishConnection()
    const paths = dishes.data.dishConnection.edges?.map((edge) => ({
        slug: edge?.node?._sys.filename,
    })) || []
    return paths
}

import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    try {
        const res = await client.queries.dish({ relativePath: `${slug}.md` })
        return {
            title: res.data.dish.seo?.title || res.data.dish.name + ' - Sebastian Titz',
            description: res.data.dish.seo?.description || res.data.dish.description,
        }
    } catch (e) {
        return {
            title: 'Sebastian Titz',
        }
    }
}

export default async function DishPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    let res;
    try {
        res = await client.queries.dish({ relativePath: `${slug}.md` })
    } catch {
        return notFound()
    }
    return <ClientDishPage {...res} />
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ClientDishPage(props: any) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    const dish = data.dish

    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#f8f5f2' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                    <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '3rem', marginBottom: '1rem' }}>{dish.name}</h1>
                    <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>{dish.description}</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
                        <div>
                            <h3 style={{ fontFamily: 'var(--font-playfair)', marginBottom: '1rem' }}>Soil (Raw)</h3>
                            <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden' }}>
                                <Image src={dish.imageRaw} alt={`${dish.name} raw`} fill style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div>
                            <h3 style={{ fontFamily: 'var(--font-playfair)', marginBottom: '1rem' }}>Soul (Plated)</h3>
                            <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden' }}>
                                <Image src={dish.imagePlated} alt={`${dish.name} plated`} fill style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>

                    {dish.imageSketch && (
                        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                            <h3 style={{ fontFamily: 'var(--font-playfair)', marginBottom: '1rem' }}>The Concept (Sketch)</h3>
                            <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto', aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff', padding: '1rem' }}>
                                <Image src={dish.imageSketch} alt={`${dish.name} sketch`} fill style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                    )}

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
                        <div>
                            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '1.5rem' }}>Zutaten</h2>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {dish.ingredients?.map((ing: any, i: number) => (
                                    <li key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #ddd' }}>
                                        <span>{ing.name}</span>
                                        <span style={{ fontWeight: 'bold' }}>{ing.amount} {ing.unit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '1.5rem' }}>Zubereitung</h2>
                            <div style={{ lineHeight: '1.8' }}>
                                <TinaMarkdown content={dish.instructions} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
