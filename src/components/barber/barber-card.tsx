import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import Header2 from '../ui/typography/header2'
import BodySmallText from '../ui/typography/body-small'
import { Button } from '../ui/button'
import { StarIcon } from 'lucide-react'
import { Barbershop } from '@prisma/client'
import NextLink from 'next/link'

interface BarberCardProps {
    barber: Barbershop
    className?: string
}

export default function BarberCard({ barber, className }: BarberCardProps) {
    return (
        <div className={`${className} min-w-[170px] max-w-[170px]`}>
            <Card className='h-full w-full'>
                <CardContent className='px-2 py-1'>
                    <div className='w-full h-[160px] relative rounded'>
                        <Image
                            src={barber.imageUrl}
                            alt=""
                            fill={true}
                            style={{
                                borderRadius: '5%',
                                zIndex: 0,
                                objectFit: 'cover',
                            }}
                        />
                        <Badge className='relative m-1 px-3 py-1 z-10 bg-[#221c3dbb]'>
                            <StarIcon size={10} className='fill-primary stroke-primary' />
                            <span className='text-white ml-2 text-xs font-bold'>4,9</span>
                        </Badge>
                    </div>
                    <Header2 text={barber.name} className="mt-2 h-12" />
                    <BodySmallText text={barber.address} className="text-gray03 my-1 overflow-ellipsis" />
                    <NextLink href={`/barbershops/${barber.id}`}>
                        <Button
                            variant="secondary"
                            className='w-full mt-2 hover:bg-primary mb-1'
                        >Reservar</Button>
                    </NextLink>
                </CardContent>
            </Card>
        </div>

    )
}
