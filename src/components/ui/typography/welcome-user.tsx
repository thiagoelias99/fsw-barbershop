'use client'

import React from 'react'
import Header1 from './header1'
import { useSession } from 'next-auth/react'

export default function WelcomeUser() {
    const { data } = useSession()

    const message = data?.user ? `Olá ${data.user.name}!` : 'Bem-vindo a FSW Barber!'

  return (
    <Header1 text={message} />
  )
}
