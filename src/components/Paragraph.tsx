import React from "react"
import cx from "../classnames"
import "../base.css"

type Props = {
    children: React.ReactNode
    textColor?: 'white' | 'black';
    className?: string
}

const Paragraph: React.FC<Props> = ({ children, textColor = "white", className = "" }) => {
    return <p className={cx(`text-${textColor} p-8 sm:p-12 md:text-[17px] lg:p-14 xl:p-16 xl:text-lg`, className)}>{children}</p>
}

export default Paragraph