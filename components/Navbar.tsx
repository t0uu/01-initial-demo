import Link from "next/link"
import { ActiveLink } from "./ActiveLink"
import styles from './Navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/',
      index: '0'
  },
  {
      text: 'About',
      href: '/About',
      index: '1'
  },
  {
      text: 'Contact',
      href: '/Contact',
      index: '2'
  },
  {
      text: 'Pricing',
      href: '/pricing',
      index: '3'
  },
];
export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
     {menuItems.map(({text,href,index}) => <ActiveLink key={index} text={text} href={href} />
     )}
    </nav>
  )
}
