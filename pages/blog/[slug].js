import Head from 'next/head'
import client from '../../client'
import RichtextWrapper from '../../components/richtext-wrapper'
import Title from '../../components/title'

const Page = ({globalData, post}) => {
  const { body } = post || ''

  return (
    <>
      <Head>
        <title>{post && `${globalData.siteName} Blog | ${post.title}`}</title>
      </Head>
      <div className="border-2 rounded-md mb-4 px-4 border-plum bg-plum text-sand py-2">
        <Title tag="h1" tagStyle="headline" title={post.title} />
      </div>
      { body &&
        <RichtextWrapper body={body} />
      }
    </>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, { slug })
  return {
    props: {
      post
    }
  }
}

export default Page
