import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import Menu from '../menu/menu'

function Header() {
    return (
        <header className='h-20 w-screen'>
            <Card className='h-full w-full flex flex-row px-8 justify-between items-center'>
                <Image src='/assets/logo.png' alt='logo' height={28} width={140} />
                <Menu />
            </Card>
        </header>
    )
}

export default Header