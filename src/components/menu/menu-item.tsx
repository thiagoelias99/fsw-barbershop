import React from 'react'
import { Button } from '../ui/button'
import { LucideIcon } from 'lucide-react'
import NextLink from 'next/link'

interface MenuItemProps {
    Icon?: LucideIcon
    label: string
    link: string
    setShowSheet: (value: boolean) => void
}

export default function MenuItem({ Icon, label, link, setShowSheet }: MenuItemProps) {
    return (
        <NextLink 
        href={link} 
        passHref
        onClick={() => setShowSheet(false)}
        >
            <Button variant="outline" className='w-full px-4 py-2 flex flex-row items-center justify-start gap-2'>
                {Icon && <Icon size={16} />}
                <p>{label}</p>
            </Button>
        </NextLink>

    )
}
