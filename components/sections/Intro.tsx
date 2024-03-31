import Image from 'next/image'
import React from 'react'
import { BackgroundBeams } from '../ui/background-beams'

const Intro = () => {
  return (
    <section className='my-8 relative antialiased'>
      <div className='max-w-7xl mx-auto p-4 flex justify-between items-center'>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-4'>
            <p className='text-4xl font-bold text-muted-foreground'>
              Contribution to
            </p>
            <span className='text-4xl font-bold'>Open Dev</span>
          </div>
          <h2 className='text-4xl font-bold'>Community ODC</h2>

          <p className='text-lg text-muted-foreground max-w-lg text-wrap break-all mt-4'>
            Open Dev Community is a community of developers, designers, and
            creators who are passionate about open-source and contributing to
            the community.
          </p>
        </div>
        <div className='z-10'>
          <Image
            src='/img/tabs.png'
            alt='dashboard'
            className=' opacity-70 z-50'
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className='max-w-7xl mx-auto p-4 flex justify-between items-center mt-16'>
        <div className=''>
          <h3 className='text-2xl font-bold'>Our Vision</h3>
          <p className='text-md text-muted-foreground max-w-lg text-wrap break-all mt-4'>
            With this vision in mind, we set out on a journey to create an
            e-learning platform that would revolutionize the way people learn.
            Our team of dedicated experts worked tirelessly to develop a robust
            and intuitive platform that combines cutting-edge technology with
            engaging content, fostering a dynamic and interactive learning
            experience.
          </p>
        </div>
        <div className=''>
          <h3 className='text-2xl font-bold'>Our Mission</h3>
          <p className='text-md text-muted-foreground max-w-lg text-wrap break-all mt-4'>
            Our mission goes beyond just delivering courses online. We wanted to
            create a vibrant community of learners, where individuals can
            connect, collaborate, and learn from one another. We believe that
            knowledge thrives in an environment of sharing and dialogue, and we
            foster this spirit of collaboration through forums, live sessions,
            and networking opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro
