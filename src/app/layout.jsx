import { Alexandria, Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { Providers } from '@/components/Provider/Providers'
import { ProviderState } from '@/components/ProviderState/ProviderState'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/navBar/NavBar'


// const ciaro = Cairo({ subsets: ['arabic'], weight: ['400'] })
const alexandria = Alexandria({ subsets: ['arabic'], weight: ['300'] })

export const metadata = {
  title: 'موقع الجامعات الخاصة',
  description: 'الموقع الأول في سورية للجامعات السورية الخاصة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* set favIcone */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

      </head>
      <body className={`${alexandria.className} bg-default transition-all duration-600 p-0 m-0  `}>

        <ProviderState>{/* global stateMangment start */}

          <Providers>{/* sweitch theme start */}
            <NavBar />
            {children}
            <Analytics />
            <Footer />
          </Providers>{/* end of sweitch theme */}

        </ProviderState>{/* end of global stateMangment  */}

      </body>
    </html>
  )
}