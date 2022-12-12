import Head from 'next/head'
import client from '../../client'
import BodyContent from '../../components/body-content'

const publishDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en-US', options)
}

const Posts = ({ posts }) => {
  if (posts === undefined || posts.length === 0)
    return
  
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post._id} className="mb-4">
            <strong className="text-lake">{ publishDate(post.publishedAt) }</strong><br />
            <a href={`/blog/${post.slug.current}`}>{post.title}</a>
          </li>
        )
      })}
    </ul>
  )
}

const BlogIndex = ({globalData, page, posts}) => {
  const { body } = page

  return (
    <>
      <Head>
        <title>{`${globalData.siteName} | ${page.title}`}</title>
      </Head>
      <BodyContent body={body} />
      <Posts posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  // It's important to default the slug so that it doesn't return "undefined"
  const page = await client.fetch(`*[_type == "page" && slug.current == "blog-index"][0]`)
  const posts = await client.fetch(`*[_type == "post"]`)
  return {
    props: {
      page,
      posts
    }
  }
}

export default BlogIndex;