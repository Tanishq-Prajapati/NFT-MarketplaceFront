import './globals.css';
import type { Metadata } from 'next';
import { headers } from 'next/headers';

import { cookieToInitialState } from 'wagmi';

import { config } from '@/config';
import { ContextProvider } from '@/context';
import ContractStorageProvider from '@/contexts/ContractStorage';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body>
        <ContractStorageProvider>
          <ContextProvider initialState={initialState}>{children}</ContextProvider>
        </ContractStorageProvider>
      </body>
    </html>
  )
}