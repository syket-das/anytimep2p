'use client'
import Link from 'next/link'

import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { useSession } from 'next-auth/react'
import AuthButton from './AuthButton'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const { data } = useSession()

  if (pathname === '/auth/register' || pathname === '/auth/login') {
    return null
  }

  return (
    <header className='bg-white dark:bg-transparent '>
      <div className='max-w-7xl mx-auto flex items-center justify-between py-2 px-4'>
        <Link className='font-bold text-2xl' href={'/'}>
          Linux Socials
        </Link>

        <NavigationMenu className='hidden md:flex'>
          <NavigationMenuList className='gap-4'>
            <NavigationMenuItem>
              <NavigationMenuLink href='/'>Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href='/about'>Q cards</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href='/contact'>Resume</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href='/contact'>About</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList className='gap-2'>
            <NavigationMenuItem>
              <AuthButton />
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <ThemeToggle />
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
export default Navbar
