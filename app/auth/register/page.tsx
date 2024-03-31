'use client'
import RegisterComponent from '@/components/auth/RegisterComponent'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
  const router = useRouter()
  return (
    <div className='w-full max-w-2xl mx-auto mt-[10vh]'>
      <div className='w-full mb-[5vh]'>
        <Button
          onClick={() => router.replace('/')}
          variant='default'
          className='px-4'
        >
          &larr; Go Back
        </Button>
      </div>
      <RegisterComponent />
      <div className='w-full mt-2 mx-auto text-center'>
        <span className='text-sm'>Already have an account?</span>
        <Button
          onClick={() => router.push('/auth/login')}
          variant='link'
          className='px-4'
        >
          Log in &rarr;
        </Button>
      </div>
    </div>
  )
}

export default Page
