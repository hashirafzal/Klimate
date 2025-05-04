import  type { PropsWithChildren } from 'react'
import Header from '@/components/header.tsx'
const Layout = ({children} : PropsWithChildren)=>
{ return (

    
    <div className=' bg-gradient-to-br from-background to-muted'>
       
       <Header />
       <main className='min-h-screen container mx-auto px-4 py-8'>
            {children}
        </main>

        <footer className='border-t backdrop-blur py-10 supports-[backdrop-filter]:bg-background/30'>
            <div className='container mx-auto px-4 text-center text-gray-400'>    
                <p>Made with 💗 by HashirDev</p>
            </div>
        </footer>
    </div>
)}

export default Layout
