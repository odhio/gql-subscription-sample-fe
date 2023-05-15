'use client'

import './globals.css'

import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
  url: 'http://127.0.0.1:8000/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider value={client}>
        <body>{children}</body>
      </Provider>
    </html>
  )
}
