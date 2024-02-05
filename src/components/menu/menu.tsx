'use client'

import { CircleUserRound, LogInIcon, LogOutIcon, HomeIcon, CalendarDaysIcon, Contact2Icon, MenuIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import MenuItem from './menu-item'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function Menu() {
    const [showSheet, setShowSheet] = React.useState(false)

    const menuItens = [
        {
            Icon: HomeIcon,
            label: 'Início',
            link: '/'
        },
        {
            Icon: Contact2Icon,
            label: 'Perfil',
            link: '/profile'
        },
        {
            Icon: CalendarDaysIcon,
            label: 'Agendamentos',
            link: '/bookings'
        }
    ]

    const { data } = useSession()
    async function handleLoginClick() {
        await signIn()
    }

    async function handleLogoutClick() {
        await signOut()
    }

    return (
        <Sheet open={showSheet} onOpenChange={setShowSheet}>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <MenuIcon size={20} />
                </Button>
            </SheetTrigger>
            <SheetContent className='p-0 w-[95%]'>
                <SheetHeader className='p-4 border-b-2'>
                    <SheetTitle className='text-lg font-bold text-left'>FSW Menu</SheetTitle>
                </SheetHeader>
                <div className='p-4'>
                    {!data?.user && (
                        <>
                            <div className='w-full flex flex-row items-center justify-start gap-2'>
                                <CircleUserRound size={40} className='stroke-gray03 stroke-1' />
                                <p className='text-base font-bold'>Olá, Faça seu login</p>
                            </div>
                            <Button
                                variant="secondary"
                                onClick={handleLoginClick}
                                className='w-full mt-4 px-4 py-2 flex flex-row items-center justify-start gap-2'>
                                <LogInIcon size={16} />
                                <p>Fazer Login</p>
                            </Button>
                        </>
                    )}
                    {data?.user && (
                        <div className='w-full flex flex-row items-center justify-between'>
                            <div className='flex flex-row items-center justify-start gap-2'>
                                <Avatar>
                                    <AvatarImage src={data.user.image || undefined} alt={data.user.name || undefined} />
                                    <AvatarFallback>{data.user.name?.slice(0, 1)}</AvatarFallback>
                                </Avatar>
                                <p className=''>{data.user.name}</p>
                            </div>
                            <Button
                                variant='secondary'
                                size='icon'
                                onClick={handleLogoutClick}
                            >
                                <LogOutIcon size={16} />
                            </Button>
                        </div>
                    )}



                    <div className='w-full mt-8 flex flex-col gap-2'>
                        {menuItens.map((item, index) => (
                            <MenuItem key={index} Icon={item.Icon} label={item.label} link={item.link} setShowSheet={setShowSheet} />
                        ))}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
