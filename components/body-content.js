import {PortableText} from '@portabletext/react'
import Title from '../components/title'

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

export default function BodyContent(props) {
  const { body } = props
  // console.log(body)
  
  if (!Array.isArray(body)) {
    console.error('Body content is not an array')
    return null
  }

  return body.map((section) => {
    switch (section._type) {
      case 'title':
        return <Title key={section._key} title={section.title} tag={section.tag} tagStyle={section.style} />
      case 'bodyContent':
        return <PortableText key={section._key} value={section.body} components={ptComponents} />
    }
  })
}
