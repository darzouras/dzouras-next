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
        />
      )
    }
  },
  marks: {
    small: ({children}) => {
      console.log('hello? small?')
      return <small>{children}</small>
    }
  }
}

export default function BodyContent(props) {
  const { body } = props
  console.log(body)
  
  if (!Array.isArray(body)) {
    console.error('Body content is not an array')
    return null
  }

  return body.map((section) => {
    switch (section._type) {
      case 'title':
        return <h1 key={section._key}>{section.title}</h1>
      case 'bodyContent':
        return <PortableText key={section._key} value={section.body} components={ptComponents} />
    }
  })
}
