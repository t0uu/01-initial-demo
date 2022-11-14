import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Contact(){
    return (
<MainLayout>
            <h1>Contact Page</h1>
            <h1 className={'title'}>
             {/* Ir a <a href="/About">About</a> */}
             Ir a<Link href={'/'}> Home</Link>
            </h1>
    
            <p className={'description'}>
              Get started by editing{' '}
              <code className={'code'}>pages/Contact.jsx</code>
            </p>
</MainLayout>
        
      )
    }