import React from 'react'
import { ITypographyProps } from './ITypographyProps'

function Header3({ text, className }: ITypographyProps) {
    return (
        <h3 className={`${className} text-sm font-bold`}>{text}</h3>
    )
}

export default Header3