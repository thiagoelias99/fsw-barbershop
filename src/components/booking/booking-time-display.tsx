import { ClassNameValue } from "tailwind-merge"

interface BookingTimeDisplayProps {
    date: Date
    className?: ClassNameValue
}

const BookingTimeDisplay = ({ date, className }: BookingTimeDisplayProps) => {
    const month = date.toLocaleString('pt-BR', { month: 'long' })
    const day = date.toLocaleString('pt-BR', { day: '2-digit' })
    const time = date.toLocaleString('pt-BR', { hour: '2-digit', minute: '2-digit' })

    return (
        <div className={`${className} h-full flex flex-col items-center justify-center`}>
            <p className="text-xs font-normal capitalize">{month}</p>
            <p className="text-2xl font-normal">{day}</p>
            <p className="text-xs font-normal">{time}</p>
        </div>
    )
}

export default BookingTimeDisplay