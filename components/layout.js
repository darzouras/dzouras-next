import Navigation from './navigation'

const Layout = ({ children, globalData }) => {
  return (
    <div className="min-h-screen min-w-screen py-8 bg-swamp text-plum md:flex md:items-center md:justify-center">
      <div className="w-11/12 w-max-w-xl mx-auto md:flex md:items-end md:justify-center md:gap-3">
        <Navigation navLinks={globalData.mainNav} />
        <main className='main-window max-w-screen-sm md:w-full md:h-96 md:overflow-scroll md:border-2 md:border-violet md:rounded-md md:p-5 md:bg-sand md:flex-1'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout;
