import React from 'react'
import { Button } from '../ui/button'
import { LucideIcon, LucideProps } from 'lucide-react'

interface MenuItemProps {
    Icon?: LucideIcon
    label: string
}

export default function MenuItem({ Icon, label }: MenuItemProps) {
    return (
        <Button variant="outline" className='w-full px-4 py-2 flex flex-row items-center justify-start gap-2'>
            {Icon && <Icon size={16} />}
            <p>{label}</p>
        </Button>
    )
}
