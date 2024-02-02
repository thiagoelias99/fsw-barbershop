'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header3 from "@/components/ui/typography/header3"
import { signIn, useSession } from "next-auth/react"
import Image from "next/image"
import { Sheet, SheetTrigger } from "../ui/sheet"
import ServiceBooking from "./service-booking"

interface ServiceCardProps {
    service: {
        id: string
        name: string
        description: string
        price: number
        imageUrl: string
    },
    barbershop: {
        id: string
        name: string
    }
}

export default function ServiceCard({ service, barbershop }: ServiceCardProps) {
    const { status } = useSession()

    function handleReserve() {
        if (status !== "authenticated") {
            signIn()
        }
    }

    return (
        <Card className="p-4">
            <CardContent className="h-full flex flex-row gap-4 items-center justify-start p-0">
                <div className="w-[110px] h-[110px] relative">
                    <Image
                        src={service.imageUrl}
                        alt={service.name}
                        fill
                        style={{ borderRadius: '10px' }}
                    />
                </div>
                <div className="flex-1">
                    <Header3 text={service.name} />
                    <p className="text-sm text-gray03 overflow-ellipsis">{service.description}</p>
                    <div className="w-full flex flex-row items-center justify-between">
                        <p className="text-base text-primary font-bold">{`R$ ${service.price.toFixed(2).replace(".", ",")}`}</p>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="secondary"
                                    onClick={handleReserve}
                                >Reservar</Button>
                            </SheetTrigger>
                            <ServiceBooking service={service} barbershop={barbershop} />
                        </Sheet>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
