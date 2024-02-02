import prisma from "@/prisma/prisma.service"
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
