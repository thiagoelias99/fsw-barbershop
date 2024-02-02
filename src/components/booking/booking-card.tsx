import { ClassNameValue } from "tailwind-merge"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Card, CardContent } from "../ui/card"
import BodyText from "../ui/typography/body"
import Header2 from "../ui/typography/header2"
import BookingTimeDisplay from "./booking-time-display"

interface IBookingCardProps {
    className?: ClassNameValue
}

const BookingCard = ({ className }: IBookingCardProps) => {
    return (
        <Card className={`${className} h-[112px]`}>
            <CardContent className="h-full px-4 py-0 flex flex-row items-center justify-between">
                <div className="h-full flex flex-col items-start justify-between py-2 flex-grow">
                    <Badge className="bg-purple-dark text-primary">Confirmado</Badge>
                    <Header2 text="Corte de Cabelo" />
                    <div className="flex flex-row items-center justify-start">
                        <Avatar className="h-6 w-6">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <BodyText text="Thiago Marinho" className="ml-2" />
                    </div>
                </div>
                <BookingTimeDisplay date={new Date()} className="w-[106px] border-l-2" />
            </CardContent>
        </Card>
    )
}

export default BookingCard