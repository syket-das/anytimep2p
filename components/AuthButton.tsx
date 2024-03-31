'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { Dialog, DialogContent } from './ui/dialog'
import { useEffect, useState } from 'react'
import RegisterComponent from './auth/RegisterComponent'
import LoginComponent from './auth/LoginComponent'
import { usePathname, useRouter } from 'next/navigation'

export default function AuthButton() {
  const router = useRouter()

  const { data } = useSession()

  console.log(data?.user)

  return (
    <>
      {data?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={data?.user?.image!} alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{data?.user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href='#' onClick={() => signOut()}>
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className='flex flex-row gap-4'>
          <HoverBorderGradient
            onClick={() => router.push('/auth/login')}
            containerClassName='rounded-full'
            as='button'
            className='dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-8'
          >
            <span className=''>Join now</span>
          </HoverBorderGradient>
        </div>
      )}
    </>
  )
}
