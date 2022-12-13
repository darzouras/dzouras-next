import { ThemeProvider } from '../context/theme'
import client from '../client'
import Layout from '../components/layout'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps, globalData }) => {
  return (
    <ThemeProvider>
      <Layout globalData={globalData}>
        <Component {...pageProps} globalData={globalData} />
      </Layout>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (props) => {
  const globalData = await client.fetch(`*[_type == "global" && slug.current == "personal-website"][0]`)
  return { globalData }
}

export default MyApp
