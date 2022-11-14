import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC, PropsWithChildren } from "react"


interface Props {
  text: string,
  href: string
}


export const ActiveLink:FC<Props> = ({text,href}) => {
    const {asPath} = useRouter()
    const style:CSSProperties ={
        color: '#0070f3',
        textDecoration: 'underline'
    }

  return (
    <Link legacyBehavior href={href}>
    <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
    )
}

