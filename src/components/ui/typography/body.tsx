import React from 'react'
import { ITypographyProps } from './ITypographyProps'

/**
 * Font-Size = 14px
 * Font-Weight = 400
 */

const BodyText = ({ text, className }: ITypographyProps) => {
    return (
        <p className={`${className} text-sm font-normal`}>{text}</p>
    )
}

export default BodyText