import { Button } from "../ui/button"
import { ChevronLeft, MenuIcon } from "lucide-react"
import NextLink from 'next/link'

export default function HeaderBackButton() {
    return (
        <header className="h-20 w-screen px-8 flex flex-row flex-nowrap items-center justify-between">
            <NextLink href="/">
                <Button size="icon" variant="secondary">
                    <ChevronLeft />
                </Button>
            </NextLink>
            <Button size="icon" variant="secondary">
                <MenuIcon />
            </Button>
        </header>
    )
}
