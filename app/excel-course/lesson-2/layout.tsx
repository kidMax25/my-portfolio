// app/layout.tsx
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Excel Course: Session 2 - Data Entry & Essential Functions',
  description: 'Excel Mastery Course - Session 2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script src="https://cdn.tailwindcss.com" />
      </body>
    </html>
  )
}