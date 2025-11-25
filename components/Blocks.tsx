import { Hero } from './blocks/Hero'
import { Philosophy } from './blocks/Philosophy'
import { About } from './blocks/About'
import { Offerings } from './blocks/Offerings'
import { SignatureDishes } from './blocks/SignatureDishes'

export const Blocks = (props: any) => {
    return (
        <>
            {props.blocks
                ? props.blocks.map(function (block: any, i: number) {
                    switch (block.__typename) {
                        case 'PageBlocksHero':
                            return <Hero data={block} key={i} />
                        case 'PageBlocksPhilosophy':
                            return <Philosophy data={block} key={i} />
                        case 'PageBlocksAbout':
                            return <About data={block} key={i} />
                        case 'PageBlocksOfferings':
                            return <Offerings data={block} key={i} />
                        case 'PageBlocksSignatureDishes':
                            return <SignatureDishes data={block} key={i} />
                        default:
                            return null
                    }
                })
                : null}
        </>
    )
}
