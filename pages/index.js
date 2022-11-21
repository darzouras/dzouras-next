import client from '../client'
import BodyContent from '../components/body-content'

const Index = ({page}) => {
  const { body } = page
  return <BodyContent body={body} />
}

export async function getStaticProps() {
  // It's important to default the slug so that it doesn't return "undefined"
  const page = await client.fetch(`*[_type == "page" && slug.current == "home"][0]`)
  return {
    props: {
      page
    }
  }
}

export default Index;
