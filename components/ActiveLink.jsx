import Link from "next/link"
import { useRouter } from "next/router"

export const ActiveLink = ({text,href}) => {
    const {asPath} = useRouter()
    const style ={
        color: '#0070f3',
        textDecoration: 'underline'
    }

  return (
    <Link legacyBehavior href={href}>
    <a style={asPath === href ? style : null}>{text}</a>
    </Link>
    )
}

