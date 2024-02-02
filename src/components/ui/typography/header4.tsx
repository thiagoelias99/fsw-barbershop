import React from 'react'
import { ITypographyProps } from './ITypographyProps'

function Header4({ text, className }: ITypographyProps) {
    return (
        <h3 className={`${className} text-xs font-bold`}>{text}</h3>
    )
}

export default Header4