'use server'

import prisma from "@/prisma/prisma.service"

interface BookServiceParams {
    date: Date
    userId: string
    serviceId: string
}

export default async function createBooking({ date, userId, serviceId }: BookServiceParams) {
    await prisma.booking.create({
        data: {
            date,
            userId,
            serviceId
        }
    })
}