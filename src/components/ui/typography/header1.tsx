import React from 'react'
import { ITypographyProps } from './ITypographyProps'

/**
 * Font size : 20px
 * Font weight : 700
 */

function Header1({ text, className }: ITypographyProps) {
    return (
        <h1 className={`${className} text-xl font-bold`}>{text}</h1>
    )
}

export default Header1