import Head from 'next/head'
import Link from 'next/link'
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
          <li key={post._id} className="border-2 rounded-md mb-4 px-4 border-violet bg-sand py-4 dark:bg-black">
            <p className="text-violet">{ publishDate(post.publishedAt) }</p>
            <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
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
      <p>If you are looking for blog posts from 2019 - 2021, see <a href="https://darzouras-gridsome.netlify.app/blog">this previous version of my website</a>.</p>
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