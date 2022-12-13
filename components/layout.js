import Navigation from './navigation'
import { useThemeContext } from '../context/theme'

const Layout = ({ children, globalData }) => {
  const [theme, setTheme] = useThemeContext()
  return (
    <div className={ theme == 'dark' ? 'dark' : '' }>
      <div className="relative min-h-screen min-w-screen py-8 bg-swamp text-plum md:flex md:items-center md:justify-center dark:bg-black dark:text-swamp">
        <div className="relative z-0 w-11/12 w-max-w-xl mx-auto md:flex md:items-end md:justify-center md:gap-3">
          <Navigation navLinks={globalData.mainNav} />
          <main className='main-window max-w-screen-sm md:w-full md:h-96 md:overflow-scroll md:border-2 md:border-violet md:rounded-md md:p-5 md:bg-sand md:flex-1 dark:border-swamp md:dark:bg-plum'>
            {children}
          </main>
        </div>

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
