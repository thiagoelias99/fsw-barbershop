import Header1 from "@/components/ui/typography/header1"
import Header4 from "@/components/ui/typography/header4"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import prisma from "@/prisma/prisma.service"
import BookingCard from "@/components/booking/booking-card"
import { setHours, setMinutes } from "date-fns"
import { NextResponse } from "next/server"

export default async function BookingsPage() {
    const session = await getServerSession(authOptions)
    let confirmedBookings: any[] = []
    let finalizedBookings: any[] = []
    const startTime = setMinutes(setHours(new Date(), 0), 0); // Set start time to 00:00

    if (session?.user) {
        confirmedBookings = await prisma.booking.findMany({
            where: {
                userId: session.user.id,
                date: {
                    gte: startTime
                }
            },
            include: {
                service: {
                    include: {
                        barbershop: true
                    }
                }
            }
        })

        finalizedBookings = await prisma.booking.findMany({
            where: {
                userId: session.user.id,
                date: {
                    lt: startTime
                }
            },
            include: {
                service: {
                    include: {
                        barbershop: true
                    }
                }
            }
        })
    } else {
  
    }

    return (
        <main className="p-4">
            <Header1 text="Agendamentos" />

            <section className="mt-4">
                <Header4 text="Confirmados" className='uppercase text-gray03' />
                {confirmedBookings.map(booking => (
                    <BookingCard
                        key={booking.id}
                        barbershopName={booking.service.barbershop.name}
                        serviceName={booking.service.name}
                        date={booking.date}
                        barbershopUrl={booking.service.barbershop.imageUrl}
                        className="mt-4"
                    />
                ))}
            </section>

            <section className="mt-4">
                <Header4 text="Finalizados" className='uppercase text-gray03' />
                {finalizedBookings.map(booking => (
                    <BookingCard
                        key={booking.id}
                        barbershopName={booking.service.barbershop.name}
                        serviceName={booking.service.name}
                        date={booking.date}
                        barbershopUrl={booking.service.barbershop.imageUrl}
                        className="mt-4"
                    />
                ))}
            </section>
        </main>
    )
}
