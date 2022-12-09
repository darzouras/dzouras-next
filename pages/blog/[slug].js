import Head from 'next/head'
import client from '../../client'
import {PortableText} from '@portabletext/react'

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
          className="max-w-full"
        />
      )
    }
  },
  marks: {
    small: ({children}) => {
      return <small>{children}</small>
    }
  }
}

const Page = ({globalData, post}) => {
  const { body } = post || ''

  return (
    <>
      <Head>
      <title>{post && `${globalData.siteName} Blog | ${post.title}`}</title>
      </Head>
      { body &&
        <PortableText value={body} components={ptComponents} />
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
