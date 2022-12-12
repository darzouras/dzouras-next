import { PortableText } from '@portabletext/react'

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