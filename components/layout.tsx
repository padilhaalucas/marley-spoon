import Footer from './footer'

type Props = {
  children: React.ReactNode
  hasFooter?: boolean
}

const Layout = ({ children, hasFooter }: Props) => (
  <div className='min-h-screen'>
    <main className='p-8'>{children}</main>
    { hasFooter && <Footer /> }
  </div>
)

export default Layout