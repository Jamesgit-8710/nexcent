'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '@/assets/SVGs/Logo.svg'
import lightLogo from '@/assets/SVGs/lightLogo.svg'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes'
import light from '@/assets/images/contrast.png'
import dark from '@/assets/images/moon.png'

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [tab, setTab] = useState(0)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <div className='bg-header flex justify-between px-20 py-5'>
            <div>
                {
                    theme === 'light' ?
                        <Image src={logo} alt="Logo" /> :
                        <Image src={lightLogo} alt="Logo" height={25} />
                }
            </div>
            <div className='flex items-center'>
                <div className="flex space-x-10 text-dark-gray">
                    <Link href="/" className={`${tab === 0 ? 'font-bold' : ''}`} onClick={()=> {setTab(0)}}>
                        Home
                    </Link>
                    <Link href="/service" className={`${tab === 1 ? 'font-bold' : ''}`} onClick={()=> {setTab(1)}}>
                        Service
                    </Link>
                    <Link href="/feature" className={`${tab === 2 ? 'font-bold' : ''}`} onClick={()=> {setTab(2)}}>
                        Feature
                    </Link>
                    <Link href="/product" className={`${tab === 3 ? 'font-bold' : ''}`} onClick={()=> {setTab(3)}}>
                        Product
                    </Link>
                    <Link href="/testimonial" className={`${tab === 4 ? 'font-bold' : ''}`} onClick={()=> {setTab(4)}}>
                        Testimonial
                    </Link>
                    <Link href="/faq" className={`${tab === 5 ? 'font-bold' : ''}`} onClick={()=> {setTab(5)}}>
                        FAQ
                    </Link>
                </div>
                <div className="space-x-4 ml-20">
                    <Button variant="ghost">Login</Button>
                    <Button className='px-5'>Sign up</Button>
                </div>
                <div className='h-10 w-10 ml-8 border pt-2 pl-[7px] rounded-md' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    {
                        theme === 'light' ?
                        <Image src={light} alt="theme" height={25}/>
                        : <Image src={dark} alt="theme" height={25}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
