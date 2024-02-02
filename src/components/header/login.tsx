'use client'

import { Button } from '../ui/button'
import { MenuIcon, CircleUserRound, LogInIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet'
import Menu from '../menu/menu'

export default function LoginButton() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <MenuIcon size={20} />
                </Button>
            </SheetTrigger>
            <Menu />
        </Sheet>
    )
}
