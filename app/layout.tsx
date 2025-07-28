import './globals.css'
import { Providers } from './providers'
import Dashboard from './page'

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Dashboard />
        </Providers>
      </body>
    </html>
  )
}
