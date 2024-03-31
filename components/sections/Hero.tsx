'use client'

import Link from 'next/link'
import React from 'react'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { useRouter } from 'next/navigation'

const Hero = () => {
  const router = useRouter()

  return (
    <section className='max-w-7xl mx-auto  space-y-6 pb-8 py-8  md:py-16 lg:py-20  relative '>
      <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto'>
        <h1 className='font-bold leading-normal text-xl sm:text-2xl md:text-2xl lg:text-4xl'>
          Driving Innovation in Online Education for{' '}
        </h1>
        <p className='max-w-[42rem] leading-normal text-muted-foreground text-xl sm:text-2xl md:text-2xl lg:text-4xl  sm:leading-8'>
          a Brighter Future{' '}
        </p>
        <div className='flex gap-x-2 *:*:gap-x-2 mt-8'>
          <Link href='/auth/register' rel='noreferrer'>
            <HoverBorderGradient
              onClick={() => router.push('/auth/register')}
              containerClassName='rounded-full'
              as='button'
              className='dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-10'
            >
              <span className=''>Join Us</span>
            </HoverBorderGradient>
          </Link>
        </div>

        <div className=' mt-8 relative overflow-hidden'>
          <img
            src='/img/dashboard.png'
            alt='hero'
            className='w-[60vw] opacity-70'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 from-20%' />
        </div>
        <div className='flex justify-center items-center gap-2  md:gap-4 lg:gap-8 absolute bottom-[20%] '>
          <h2 className='text-md md:text-3xl lg:text-4xl font-bold text-center'>
            Adobe
          </h2>
          <h2 className='text-md md:text-3xl lg:text-4xl font-bold text-center'>
            Adobe
          </h2>

          <h2 className='text-md md:text-3xl lg:text-4xl font-bold text-center'>
            Adobe
          </h2>
          <h2 className='text-md md:text-3xl lg:text-4xl font-bold text-center'>
            Adobe
          </h2>
          <h2 className='text-md md:text-3xl lg:text-4xl font-bold text-center'>
            Adobe
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
