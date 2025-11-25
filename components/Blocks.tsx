import { Hero } from './blocks/Hero'
import { Philosophy } from './blocks/Philosophy'
import { About } from './blocks/About'
import { Offerings } from './blocks/Offerings'
import { SignatureDishes } from './blocks/SignatureDishes'
import { ContactForm } from './blocks/ContactForm'
import { NewsSection } from './NewsSection'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Blocks = (props: any) => {
    return (
        <>
            {props.blocks
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                        case 'PageBlocksContactForm':
                            return <ContactForm data={block} key={i} />
                        case 'PageBlocksNews':
                            return <NewsSection data={block} news={props.news} key={i} />
                        default:
                            return null
                    }
                })
                : null}
        </>
    )
}
