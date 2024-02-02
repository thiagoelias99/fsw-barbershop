'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header3 from "@/components/ui/typography/header3"
import { signIn, useSession } from "next-auth/react"
import Image from "next/image"

interface ServiceCardProps {
    service: {
        name: string
        description: string
        price: number
        imageUrl: string
    }
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const { status } = useSession()

    function handleReserve() {
        if (status === "authenticated") {
            alert('Reservado com sucesso!')
        } else {
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
                        <Button 
                        variant="secondary"
                        onClick={handleReserve}
                        >Reservar</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
