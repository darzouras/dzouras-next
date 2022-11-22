import Navigation from './navigation'

const Layout = ({ children, globalData }) => {
  return (
    <div className="min-h-screen min-w-screen p-8 bg-swamp text-plum">
      <div className="max-w-xl mx-auto">
        <Navigation navLinks={globalData.mainNav} />
        <main className='md:w-4/5 md:mr-0 md:ml-auto max-w-screen-sm'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout;
