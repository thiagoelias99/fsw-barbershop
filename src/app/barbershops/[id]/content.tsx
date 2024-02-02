import { Button } from "@/components/ui/button"
import BodyText from "@/components/ui/typography/body"
import Header1 from "@/components/ui/typography/header1"
import { MapPin, StarIcon } from "lucide-react"
import Image from "next/image"
import ServiceCard from "./service-card"
import { Barbershop, Service } from "@prisma/client"
import HeaderBackButton from "@/components/header/header-back-button"

interface BarbershopProps {
    barbershop: Barbershop,
    services: Service[]
}

export default function BarbershopPageContent({barbershop, services} : BarbershopProps) {
    return (
        <main className="w-full">
            <HeaderBackButton />
            <section className="w-full">
                <div className="h-[250px] w-full relative">
                    <Image src={barbershop.imageUrl} alt={barbershop.name} fill />
                </div>
                <div className="p-4 flex flex-col items-start justify-start gap-2">
                    <Header1 text={barbershop.name} />
                    <div className="flex flex-row items-center justify-start gap-2">
                        <MapPin className="stroke-primary" />
                        <BodyText text={barbershop.address} />
                    </div>
                    <div className="flex flex-row items-center justify-start gap-2">
                        <StarIcon className="stroke-primary fill-primary" />
                        <BodyText text="5,0 (889 avaliações)" />
                    </div>
                </div>
            </section>
            <section className="w-full px-4 py-6 border-t-2 mt-2">
                <div className="w-full flex flex-row items-start gap-4">
                    <Button>Serviços</Button>
                    <Button variant="secondary">Informações</Button>
                </div>
                <div className="flex flex-col gap-4 mt-6">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </section>
        </main>
    )
}
