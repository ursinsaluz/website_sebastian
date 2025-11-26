import { client } from '../../../tina/__generated__/client'
import { notFound } from 'next/navigation'
import ClientDishPage from './ClientDishPage'

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
    } catch {
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
