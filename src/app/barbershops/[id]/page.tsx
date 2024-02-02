import HeaderBackButton from "@/components/header/header-back-button"
import BodyText from "@/components/ui/typography/body"
import Header1 from "@/components/ui/typography/header1"
import prisma from "@/prisma/prisma.service"
import Image from "next/image"
import { MapPin, StarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "../../../components/service/service-card"
import BarbershopPageContent from "./content"

interface BarbershopProps {
    params: {
        id?: string
    }
}

export default async function Barbershop({ params }: BarbershopProps) {
    if (!params.id) {
        //TODO: redirect to 404
        return (
            <div>404</div>
        )
    }

    const barbershop = await prisma.barbershop.findUnique({
        where: {
            id: params.id
        }
    })

    if (!barbershop) {
        return (
            <div>404</div>
        )
    }

    const services = await prisma.service.findMany({
        where: {
            barberShopId: barbershop.id
        }
    })

    return (
        <BarbershopPageContent
            barbershop={barbershop}
            services={services}
        />
    )
}
