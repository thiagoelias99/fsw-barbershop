'use client'

import { ptBR } from 'date-fns/locale'
import React, { useMemo, useState } from 'react'
import { SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
import { Calendar } from '../ui/calendar'
import { generateDayTimeList } from './hours'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { format, setHours, setMinutes } from 'date-fns'
import createBooking from './book-service'
import { useSession } from 'next-auth/react'

interface ServiceCardProps {
    service: {
        id: string
        name: string
        description: string
        price: number
        imageUrl: string
    },
    barbershop: {
        id: string
        name: string
    }
}

export default function ServiceBooking({ service, barbershop }: ServiceCardProps) {
    const session = useSession()
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)

    const timelist = useMemo(() => {
        if (!date) return []
        return generateDayTimeList(date)
    }, [date])

    function handleTimeSelection(time: string) {
        setSelectedTime(time)
    }

    function handleDateSelection(date: Date | undefined) {
        setDate(date)
        setSelectedTime(undefined)
    }

    async function handleConfirm() {
        let bookingDate = setHours(date!, parseInt(selectedTime!.split(':')[0]))
        bookingDate = setMinutes(bookingDate, parseInt(selectedTime!.split(':')[1]))

        await createBooking({
            date: bookingDate,
            userId: session.data?.user?.id as string,
            serviceId: service.id
        })
    }

    return (
        <SheetContent className="w-[95%] p-0">
            <SheetHeader className="p-4">
                <SheetTitle className="text-left text-lg font-bold">Fazer Reserva</SheetTitle>
            </SheetHeader>
            <div className="border-t-2 mt-4 pt-4">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={date => handleDateSelection(date)}
                    locale={ptBR} //date-fns
                    fromDate={new Date()} //Data mínima para selecionar
                    styles={{
                        head_cell: { // Dias da semana
                            width: '100%',
                            textTransform: 'capitalize'
                        },
                        cell: { // Dias do mês
                            width: '100%'
                        },
                        button: { // Botões qnd selecionado
                            width: '100%'
                        },
                        nav_button_previous: {
                            width: '36px',
                            height: '36px'
                        },
                        nav_button_next: {
                            width: '36px',
                            height: '36px'
                        },
                        caption: {// Nome do mês
                            textTransform: 'capitalize'
                        }
                    }}
                />
            </div>
            <div className='w-full mt-4 flex flex-row flex-nowrap gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden'>
                <div className=""></div>
                {timelist.map((time, index) => (
                    <Button
                        key={index}
                        variant={time === selectedTime ? 'default' : 'outline'}
                        className='rounded-full'
                        onClick={() => handleTimeSelection(time)}
                    >{time}</Button>
                ))}
                <div className=""></div>
            </div>
            <Card className='m-4 p-4'>
                <CardContent className='flex flex-col p-0 gap-4'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-base font-bold'>{service.name}</p>
                        <p className='text-sm font-bold'>R$ {service.price}</p>
                    </div>
                    {date && selectedTime && (
                        <>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-sm text-gray03'>Data</p>
                                <p className='text-sm capitalize'>{format(date, "d 'de' MMMM", { locale: ptBR })}</p>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-sm text-gray03'>Horário</p>
                                <p className='text-sm'>{selectedTime}</p>
                            </div>
                        </>
                    )}

                    <div className='w-full flex items-center justify-between'>
                        <p className='text-sm text-gray03'>Barbearia</p>
                        <p className='text-sm'>{barbershop.name}</p>
                    </div>
                </CardContent>
            </Card>
            {date && selectedTime && (
                <div className='w-full p-4 mt-8'>
                    <Button
                        onClick={handleConfirm}
                        className='w-full'>
                        Confirmar
                    </Button>
                </div>
            )}

        </SheetContent>
    )
}
