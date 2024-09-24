import QueryProviders from '@/provider/queryProvider';
import './globals.css'
import Head from './head'
import './layout.scss';

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
          <main className="main">
            <div className="mobile-view">
              {children}
            </div>
          </main>
          <div id="modal" />
        </QueryProviders>
      </body>
    </html>
  )
}
