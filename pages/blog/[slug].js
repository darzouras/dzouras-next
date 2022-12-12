import Head from 'next/head'
import client from '../../client'
import RichtextWrapper from '../../components/richtext-wrapper'
import Title from '../../components/title'
import BubbleBorder from '../../components/bubble-border'

const publishDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en-US', options)
}

const Page = ({globalData, post}) => {
  const { body } = post || ''

  return (
    <>
      <Head>
        <title>{post && `${globalData.siteName} Blog | ${post.title}`}</title>
      </Head>
      <BubbleBorder styleType="title">
        <Title tag="h1" tagStyle="headline" title={post?.title} />
      </BubbleBorder>
      { post && 
        <p className="text-plum mb-4 text-center">Posted on { publishDate(post?.publishedAt) }</p>
      }
      { body &&
        <BubbleBorder styleType="body">
          <RichtextWrapper body={body} />
        </BubbleBorder>
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
