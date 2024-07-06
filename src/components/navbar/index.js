'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '@/assets/SVGs/Logo.svg'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes'

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <div className='bg-header flex justify-between px-20 py-5'>
            <div>
                <Image src={logo} alt="Logo" />
            </div>
            <div className='flex items-center'>
                <div className="flex space-x-10 text-dark-gray">
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/service">
                        Service
                    </Link>
                    <Link href="/feature">
                        Feature
                    </Link>
                    <Link href="/product">
                        Product
                    </Link>
                    <Link href="/testimonial">
                        Testimonial
                    </Link>
                    <Link href="/faq">
                        FAQ
                    </Link>
                </div>
                <div className="space-x-4 ml-20">
                    <Button variant="ghost">Login</Button>
                    <Button className='px-5'>Sign up</Button>
                </div>
                <div className='h-8 w-20 ml-8' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>click me</div>
            </div>
        </div>
    )
}

export default Navbar
