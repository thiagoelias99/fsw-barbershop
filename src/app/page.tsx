import BarberCard from "@/components/barber/barber-card";
import BookingCard from "@/components/booking/booking-card";
import Search from "@/components/search/search";
import BodyText from "@/components/ui/typography/body";
import Header4 from "@/components/ui/typography/header4";
import WelcomeUser from "@/components/ui/typography/welcome-user";
import prisma from "@/prisma/prisma.service";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const date = format(new Date(), "E',' d 'de' MMMM", { locale: ptBR })

  const barbershops = await prisma.barbershop.findMany({})
  const session = await getServerSession(authOptions)
  let bookings: any[] = []

  if (session?.user) {
    bookings = await prisma.booking.findMany({
      where: {
        userId: session.user.id
      },
      include: {
        service: {
          include: {
            barbershop: true
          }
        }
      }
    })
  }

  return (
    <main>
      <section className="p-4">
        <WelcomeUser />
        <BodyText text={date} className="capitalize" />
      </section>
      <section className="p-4">
        <Search placeholder="Buscar" />
      </section>
      <section className="p-4">
        <Header4 text="Agendamentos" className="text-gray03 uppercase" />
        {bookings.map(booking => (
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
      <section className="py-4">
        <Header4 text="Recomendados" className="text-gray03 uppercase px-4" />
        <div className="mt-4 flex flex-row flex-nowrap gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <div></div>
          {barbershops.map((barber) => (
            <BarberCard key={barber.id} barber={barber} />
          ))}
          <div></div>
        </div>
      </section>
    </main>
  );
}
