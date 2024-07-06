import Link from 'next/link'
import React from 'react'
import logo from '@/assets/SVGs/Logo.svg'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <div className='bg-light-blue flex justify-between px-20 py-5'>
            <div>
                <Image src={logo} alt="Logo" />
            </div>
            <div className='flex items-center'>
                <div className="flex space-x-10">
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
                    <Button variant="ghost">Ghost Button</Button>
                    <Button>Normal Button</Button>
                </div>
                <div className='h-8 w-8 bg-dark-gray ml-8'></div>
            </div>
        </div>
    )
}

export default Navbar
