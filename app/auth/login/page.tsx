'use client'
import React from 'react'
import LoginComponent from '@/components/auth/LoginComponent'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

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
      <LoginComponent />
      <div className='w-full mt-2 mx-auto text-center'>
        <span className='text-sm'>Don't have an account?</span>
        <Button
          onClick={() => router.push('/auth/register')}
          variant='link'
          className='px-4'
        >
          Sign up &rarr;
        </Button>
      </div>
    </div>
  )
}

export default Page
