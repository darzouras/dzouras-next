import Navigation from './navigation'
import { useThemeContext } from '../context/theme'

const Layout = ({ children, globalData }) => {
  const [theme, setTheme] = useThemeContext()
  return (
    <div className={ theme == 'dark' ? 'dark' : '' }>
      <div className="relative min-h-screen min-w-screen bg-swamp text-plum pb-8 dark:bg-black dark:text-swamp">
        <Navigation navLinks={globalData.mainNav} />
        <main className='main-window dark:border-swamp max-w-lg-max md:mx-auto md:dark:bg-plum'>
          {children}
        </main>

        <div className="fixed z-1 bottom-0 right-0 mb-2 mr-2 bg-sand border-2 border-violet rounded-full p-2 leading-none flex items-center justify-center">
          <button
            className="bg-sand bg-opacity-0 border-0 p-0 m-0"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={theme === "light" ? "Set the website to Dark Mode" : "Set the website to Light Mode"}
          >
            { theme === "dark" ? 
              <img src="/dawn.png" alt="An image of a Dawn Stone from the Pokemon games" />
              : <img src="/dusk.png" alt="An image of a Dusk Stone from the Pokemon games" />
      }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Layout;
