'use client'
import React from 'react'
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './ModeToggle'

const MobileNav = () => {
  const pathName = usePathname();

  return (
    <header className='header'>
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src='imagesAndIcons/Artificial-Intelligence--Streamline-Free-Illustrations.svg' alt='logo' width={45} height={15} />
        <div className="flex justify-center text-2xl font-extrabold">Ai-Hub</div>
      </Link>
      <nav className='flex gap-2'>
        <SignedIn>
          <Sheet>
            <ModeToggle/>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src='imagesAndIcons/Artificial-Intelligence--Streamline-Free-Illustrations.svg'
                  alt="logo"
                  width={152}
                  height={23}
                />

                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathName

                    return (
                      <li
                        className={`${isActive && 'text-pink-300'} p-18 flex whitespace-nowrap text-white-700`}
                        key={link.route}
                      >
                        <Link className="sidebar-link cursor-pointer" href={link.route}>
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                  <UserButton afterSignOutUrl='/' showName ></UserButton>
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>


        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav