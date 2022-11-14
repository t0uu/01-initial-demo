import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
export default function Home() {
  return (
    <MainLayout>

       <h1>Home Page</h1>
        <h1 className={'title'}>
         {/* Ir a <a href="/About">About</a> */}
         Ir a<Link href={'/About'}> About</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>
    </MainLayout>
  )
}
