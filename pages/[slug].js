import client from '../client'
import BodyContent from '../components/body-content'

const Page = ({page}) => {
  const { title, body } = page

  return (
    <article>
      <h1>{page?.slug?.current}</h1>
      <div>{title}</div>
      <BodyContent body={body} />
    </article>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "page" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const page = await client.fetch(`
    *[_type == "page" && slug.current == $slug][0]
  `, { slug })
  return {
    props: {
      page
    }
  }
}

export default Page
