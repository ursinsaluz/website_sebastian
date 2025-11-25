'use client'
import { useTina } from 'tinacms/dist/react'
import { Blocks } from '../components/Blocks'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ClientPage(props: any) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    if (!data || !data.page) {
        return <div>Loading...</div>
    }

    return <Blocks blocks={data.page.blocks} news={props.news} />
}
