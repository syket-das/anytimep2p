import React from 'react'

const BackgroundCard = () => {
  return (
    <div>
      <div className='relative overflow-hidden rounded-lg border bg-background p-2 text-center'>
        <div className='flex h-[180px] flex-col justify-center gap-y-4 items-center rounded-md p-6'>
          <div className='space-y-2'>
            <h3 className='font-bold leading-normal'>React 18</h3>
            <p className='text-sm text-muted-foreground'>
              Server and Client Components.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundCard
