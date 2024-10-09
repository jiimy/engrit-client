import QueryProviders from '@/provider/queryProvider';
import './layout.scss';
import './globals.css'
import Head from './head'
import CookiesRootProvider from '@/util/cookieProvider';
import LoginCheck from '@/components/loginCheck/LoginCheck';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <Head />
      <body>
        <QueryProviders>
          <CookiesRootProvider>
            <main className="main">
              <div className="mobile-view">
                {children}
              </div>
            </main>
            <LoginCheck />
          </CookiesRootProvider>
        </QueryProviders>
        <div id="modal" />
      </body>
    </html>
  )
}
