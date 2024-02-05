'use server'

import prisma from "@/prisma/prisma.service"
import { setHours, setMinutes } from "date-fns";

export default async function verifyIfTimeIsAvailable(
    times: string[],
    date: Date,
    serviceId: string,
) {
    const startTime = setMinutes(setHours(date, 0), 0); // Set start time to 00:00
    const endTime = setMinutes(setHours(date, 23), 59); // Set end time to 23:59

    const bookings = await prisma.booking.findMany({
        where: {
            serviceId,
            date: {
                gte: startTime,
                lte: endTime,
            }
        }
    })

    return times.filter(time => {
        const isAvailable = bookings.every(booking => {
            return booking.date.toLocaleTimeString().slice(0, -3) !== time
        })

        return isAvailable
    })
}