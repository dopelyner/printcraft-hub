import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import { Button, buttonVariants } from '@/components/ui/button'
import { Leaf, Lightbulb, ShieldCheck, Users } from 'lucide-react'
import Link from 'next/link'

const perks = [
  {
    name: 'Innovation',
    Icon: Lightbulb,
    decription:
      'We embrace cutting-edge designs and innovative solutions to bring you the latest in 3D printing technology.'
  },
  {
    name: 'Community',
    Icon: Users,
    decription:
      "Join a passionate community of makers, designers, and creators who share a love for crafting and pushing the boundaries of what's possible."
  },
  {
    name: 'Quality',
    Icon: ShieldCheck,
    decription:
      'We prioritize quality in every print, ensuring that each model meets high standards and delivers a satisfying printing experience.'
  },
  {
    name: 'Inspiration',
    Icon: Leaf,
    decription:
      'Fuel your creativity with a vast collection of models that span different categories, providing inspiration for every project and interest.'
  }
]

export default function Home () {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-5xl font-bold tracking-tight text-dirtyWhite sm:text-6xl'>
            <span className='text-orange-400'>PrintCraft Hub</span>.<br />
            Crafting Possibilities, One Layer at a Time
          </h1>
          <p className='mt-6 text-lg max-w-prose text-dirtyWhite opacity-80'>
            PrintCraft Hub is more than just a marketplace for 3D printer
            models; it&apos;s a vibrant community and a creative hub for makers
            and enthusiasts. We believe in the power of crafting possibilities,
            where each layer of filament transforms into a unique creation. Our
            platform offers a diverse range of meticulously curated 3D printer
            models, spanning various categories to inspire and empower your
            creativity.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link href='/products' className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button className={'text-dirtyWhite'} variant='ghost'>
              Our quality promise &rarr;
            </Button>
          </div>
        </div>

        <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          title='Brand new'
          href='/products?sort=desc'
        />
      </MaxWidthWrapper>

      <section className='bg-dirtyWhite'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0'>
            {perks.map(perk => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-center md:text-left lg:block lg:text-center'
              >
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-background text-dirtyWhite'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-orange-600'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.decription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
