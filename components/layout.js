import Navigation from './navigation'

const Layout = ({ children, globalData }) => {
  return (
    <div className="min-h-screen min-w-screen p-10 bg-khaki text-olive">
      <Navigation navLinks={globalData.mainNav} />
      <main>{children}</main>
    </div>
  )
}

export default Layout;
