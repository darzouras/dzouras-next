import Title from '../components/title'
import RichtextWrapper from '../components/richtext-wrapper'

export default function BodyContent(props) {
  const { body } = props

  const sectionClasses = 'border-2 rounded-md mb-4 px-4'
  
  if (!Array.isArray(body)) {
    console.error('Body content is not an array')
    return null
  }

  return (
    body.map((section, index) => {
      switch (section._type) {
        case 'title':
          return (
            <div className={`${sectionClasses} border-plum bg-plum text-sand py-2`} key={index}>
              <Title key={section._key} title={section.title} tag={section.tag} tagStyle={section.style} />
            </div>
          )
        case 'bodyContent':
          return (
            <div className={`body-content ${sectionClasses} border-violet bg-sand py-4`} key={index}>
              <RichtextWrapper key={section._key} body={section.body} />
            </div>
          )
      }
    })
  )
}
