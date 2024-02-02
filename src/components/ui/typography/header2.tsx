import React from 'react'
import { ITypographyProps } from './ITypographyProps'

/**
 * Font size: 16px
 * Font Weight: 700
 */

function Header2({ text, className }: ITypographyProps) {
    return (
        <h2 className={`${className} text-base font-bold`}>{text}</h2>
    )
}

export default Header2