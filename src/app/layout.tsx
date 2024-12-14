import QueryProviders from '@/provider/queryProvider';
import './layout.scss';
import './globals.css'
import Head from './head'
import CookiesRootProvider from '@/util/cookieProvider';
import LoginCheck from '@/components/loginCheck/LoginCheck';
import { SnackbarProvider } from '@/provider/snackbarProvider';
import Script from 'next/script';

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="ko">
      <Head />
      <body>
        <QueryProviders>
          <CookiesRootProvider>
            <SnackbarProvider>
              <main className="main">
                <div className="mobile-view">
                  {children}
                </div>
              </main>
              <LoginCheck />
            </SnackbarProvider>
          </CookiesRootProvider>
        </QueryProviders>
        <div id="modal" />
      </body>
    </html>
  )
}
