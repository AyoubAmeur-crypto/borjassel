import "./globals.css";
import NavBar from "./NavBar";

import { Raleway } from 'next/font/google'
import './globals.css'
import BackgroundComponent from "./backgroundComponent";

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Borj Assel - Restaurant Gastronomique',
  description: 'Haute Gastronomie - Fusion Asiatique-Marocaine',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={raleway.variable}>
      <body>
        <BackgroundComponent/>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
