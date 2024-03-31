import React from 'react'
import BackgroundCard from '../BackgroundCard'

const Features = () => {
  return (
    <div className='max-w-7xl mx-auto p-4 mt-16'>
      <div className='w-full'>
        <div className='relative overflow-hidden rounded-lg border bg-background p-2 text-center'>
          <div className='flex h-[250px] flex-col justify-center gap-y-4 items-center rounded-md p-6'>
            <div className='space-y-2'>
              <h3 className='font-bold leading-normal'>React 18</h3>
              <p className='text-sm text-muted-foreground'>
                Server and Client Components.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto mt-8'>
        <BackgroundCard />
        <BackgroundCard />
        <BackgroundCard />
      </div>
    </div>
  )
}

export default Features
