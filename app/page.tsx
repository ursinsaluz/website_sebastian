import { client } from '../tina/__generated__/client'
import ClientPage from './ClientPage'

export default async function Home() {
  const res = await client.queries.page({ relativePath: 'home.md' })
  return <ClientPage {...res} />
}
