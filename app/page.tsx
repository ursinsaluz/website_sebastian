import { client } from '../tina/__generated__/client'
import ClientPage from './ClientPage'

import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const res = await client.queries.page({ relativePath: 'home.md' })
  return {
    title: res.data.page.seo?.title || 'Sebastian Titz - Soil to Soul',
    description: res.data.page.seo?.description || 'Kulinarische Exzellenz in Graubünden.',
  }
}

export default async function Home() {
  const res = await client.queries.page({ relativePath: 'home.md' })
  const newsRes = await client.queries.journalConnection({ sort: 'date', last: 3 })
  return <ClientPage {...res} news={newsRes.data.journalConnection.edges} />
}
