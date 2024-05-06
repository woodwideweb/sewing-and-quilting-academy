import React from "react"
import "../base.css"

type Props = {
    children: React.ReactNode
    className?: string
}

const Paragraph: React.FC<Props> = ({ children, className = "" }) => {
    return <p className={className}>{children}</p>
}

export default Paragraph