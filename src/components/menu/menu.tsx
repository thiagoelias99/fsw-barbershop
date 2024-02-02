import { CircleUserRound, LogInIcon, HomeIcon, CalendarDaysIcon, Contact2Icon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { SheetContent, SheetHeader } from '../ui/sheet'
import MenuItem from './menu-item'

export default function Menu() {
    const menuItens = [
        {
            Icon: HomeIcon,
            label: 'Início'
        },
        {
            Icon: Contact2Icon,
            label: 'Perfil'
        },
        {
            Icon: CalendarDaysIcon,
            label: 'Agendamentos'
        }
    ]

    return (
        <SheetContent className='p-0 w-[95%]'>
            <SheetHeader className='p-4 border-b-2'>
                <p className='text-lg font-bold text-left'>Menu</p>
            </SheetHeader>
            <div className='p-4'>
                <div className='w-full flex flex-row items-center justify-start gap-2'>
                    <CircleUserRound size={40} className='stroke-gray03 stroke-1' />
                    <p className='text-base font-bold'>Olá, Faça seu login</p>
                </div>
                <Button variant="secondary" className='w-full mt-4 px-4 py-2 flex flex-row items-center justify-start gap-2'>
                    <LogInIcon size={16} />
                    <p>Fazer Login</p>
                </Button>
                <div className='w-full mt-8 flex flex-col gap-2'>
                    {menuItens.map((item, index) => (
                        <MenuItem key={index} Icon={item.Icon} label={item.label} />
                    ))}
                </div>
            </div>
        </SheetContent>
    )
}
