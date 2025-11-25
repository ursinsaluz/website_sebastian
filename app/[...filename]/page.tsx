import { client } from '../../tina/__generated__/client'
import ClientPage from '../ClientPage'
import { notFound } from 'next/navigation'

export const dynamicParams = false

export async function generateStaticParams() {
    const pages = await client.queries.pageConnection()
    const paths = pages.data.pageConnection.edges?.map((edge) => {
        const filename = edge?.node?._sys.filename
        if (!filename || filename === 'home') return null // Skip home page as it's handled by app/page.tsx
        return { filename: filename.split('/') }
    }).filter(Boolean) || []
    return paths
}

import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ filename: string[] }> }): Promise<Metadata> {
    const { filename: filenameArr } = await params
    const filename = filenameArr.join('/')
    try {
        const res = await client.queries.page({ relativePath: `${filename}.md` })
        return {
            title: res.data.page.seo?.title || 'Sebastian Titz',
            description: res.data.page.seo?.description || 'Sebastian Titz - Soil to Soul',
        }
    } catch (e) {
        return {
            title: 'Sebastian Titz',
        }
    }
}

export default async function Page({ params }: { params: Promise<{ filename: string[] }> }) {
    const { filename: filenameArr } = await params
    const filename = filenameArr.join('/')
    let res;
    try {
        res = await client.queries.page({ relativePath: `${filename}.md` })
    } catch {
        return notFound()
    }
    return <ClientPage {...res} />
}
