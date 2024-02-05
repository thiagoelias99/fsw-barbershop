import { ClassNameValue } from "tailwind-merge"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Card, CardContent } from "../ui/card"
import BodyText from "../ui/typography/body"
import Header2 from "../ui/typography/header2"
import BookingTimeDisplay from "./booking-time-display"

interface IBookingCardProps {
    className?: ClassNameValue
    date: Date,
    serviceName: string,
    barbershopName: string,
    barbershopUrl: string
}

const BookingCard = ({ className, barbershopName, barbershopUrl, date, serviceName }: IBookingCardProps) => {
    return (
        <Card className={`${className} h-[112px]`}>
            <CardContent className="h-full px-4 py-0 flex flex-row items-center justify-between">
                <div className="h-full flex flex-col items-start justify-between py-2 flex-grow">
                    <Badge className="bg-purple-dark text-primary">Confirmado</Badge>
                    <Header2 text={serviceName} />
                    <div className="flex flex-row items-center justify-start">
                        <Avatar className="h-6 w-6">
                            <AvatarImage src={barbershopUrl} alt={barbershopName} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <BodyText text={barbershopName} className="ml-2" />
                    </div>
                </div>
                <BookingTimeDisplay date={date} className="w-[106px] border-l-2" />
            </CardContent>
        </Card>
    )
}

export default BookingCard