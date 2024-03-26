'use client'
import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BackgroundGradientAnimation } from '../ui/background-gradient-animation'
import { Button } from '../ui/button'
import { ModeToggle } from './ModeToggle'

const Sidebar = () => {
    const pathName = usePathname()
    return (
        <aside className='sidebar'>
            <div className='flex size-full flex-col gap-4'>
                <Link href='/' className='sidebar-logo'>
                    <Image src='imagesAndIcons/Artificial-Intelligence--Streamline-Free-Illustrations.svg' alt='image' width={120} height={20} />
                </Link>

                {/* create a nav links */}
                <nav className='sidebar-nav'>
                    {/* we only want the logic in here to render if the user is signed in */}

                    <SignedIn>
                        <ul className='sidebar-nav_elements'>
                            {navLinks.slice(0, 6).map((link) => {
                                const isActive = link.route === pathName
                                return (
                                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-gradient-to-br from-[#ffc49d] to-[#f58ac0]' : ''}`}>
                                        <Link className="sidebar-link" href={link.route}>
                                            <Image
                                                src={link.icon}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                                className={`${isActive && 'brightness-200'}`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        <ul className="sidebar-nav_elements">
                            {navLinks.slice(6).map((link) => {
                                const isActive = link.route === pathName

                                return (
                                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-gradient-to-br from-[#ffc49d] to-[#f58ac0]' : 'text-white-700'
                                        }`}>
                                        <Link className="sidebar-link" href={link.route}>
                                            <Image
                                                src={link.icon}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                                className={`${isActive && 'brightness-200'}`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}

                            <li className="flex-center cursor-pointer gap-2 p-4">
                                <UserButton afterSignOutUrl='/' showName />
                            </li>
                            <ModeToggle />
                        </ul>
                        
                    </SignedIn>

                    <SignedOut>
                        <Button asChild className="button bg-purple-gradient bg-cover">
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar