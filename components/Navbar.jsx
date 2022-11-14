import Link from "next/link"
import { ActiveLink } from "./ActiveLink"
import styles from './Navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/About'
  },
  {
      text: 'Contact',
      href: '/Contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];
export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
     {menuItems.map(({text,href}) => <ActiveLink text={text} href={href} />
     )}
    </nav>
  )
}
