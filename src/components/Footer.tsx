'use client'

import { usePathname } from 'next/navigation'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Icons } from './Icons'
import Link from 'next/link'

const Footer = () => {
  const pathname = usePathname()
  const pathsToMinimize = ['/verify-email', '/sign-up', '/sign-in']

  return (
    <footer className='bg-background flex-grow-0'>
      <MaxWidthWrapper>
        <div className='border-t border-primary'>
          {pathsToMinimize.includes(pathname) ? null : (
            <div className='spb-8 pt-16'>
              <div className='flex justify-center'>
                <Icons.logo className='h-12 w-auto' />
              </div>
            </div>
          )}

          {pathsToMinimize.includes(pathname) ? null : (
            <div>
              <div className='relative flex items-center px-6 py-6 sm:py-8 lg:mt-0'>
                <div className='text-center relative mx-auto max-w-sm'>
                  <h3 className='font-semibold text-primary'>
                    Become a seller
                  </h3>
                  <p className='mt-2 text-sm text-foreground font-medium'>
                    If you&apos;d like to sell high-quality digital products,
                    you can do so in minutes.{' '}
                    <Link
                      href='/sign-in?as=seller'
                      className='whitespace-nowrap font-medium text-gray-300   hover:text-zinc-400'
                    >
                      Get started &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='py-10 md:flex md:items-center md:justify-between'>
          <div className='text-center md:text-left text-dirtyWhite'>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>

          <div className='mt-4 flex items-center justify-center md:mt-0'>
            <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-sm text-dirtyWhite hover:text-gray-300'
              >
                Cookies Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-dirtyWhite hover:text-gray-300'
              >
                Terms
              </Link>
              <Link
                href='#'
                className='text-sm text-dirtyWhite hover:text-gray-300'
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
