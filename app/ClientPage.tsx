'use client'
import { useTina } from 'tinacms/dist/react'
import { Blocks } from '../components/Blocks'

export default function ClientPage(props: any) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    if (!data || !data.page) {
        return <div>Loading...</div>
    }

    return <Blocks blocks={data.page.blocks} />
}
