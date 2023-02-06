import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder({
  projectId: 'o1olwwub',
  dataset: 'production'
})

function urlFor(source) {
  return builder.image(source)
}

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
          src={urlFor(value).fit('max').auto('format')}
          className="max-w-full mb-4 max-h-96 rounded-md border-2 border-violet dark:border-sand"
        />
      )
    }
  },
  marks: {
    small: ({children}) => {
      return <small>{children}</small>
    }
  },
  block: {
    normal: ({ children }) => {
      return <p className="mb-4">{children}</p>
    }
  },
  list: {
    bullet: ({ children }) => {
      return <ul className="list-disc ml-8 mb-4">{children}</ul>
    },
    numbers: ({ children }) => {
      return <ol className="list-decimal ml-8 mb-4">{children}</ol>
    }
  }
}

const RichtextWrapper = ({ body }) =>{
  return (
    <>
      { body &&
        <PortableText value={ body } components={ptComponents} />
      }
    </>
  )
}

export default RichtextWrapper