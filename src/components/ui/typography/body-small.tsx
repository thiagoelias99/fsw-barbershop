import React from 'react'
import { ITypographyProps } from './ITypographyProps'

/**
 * Font-Size = 12px
 * Font-Weight = 400
 */

const BodySmallText = ({ text, className }: ITypographyProps) => {
    return (
        <p className={`${className} text-xs font-normal`}>{text}</p>
    )
}

export default BodySmallText