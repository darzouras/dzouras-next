import Title from '../components/title'
import RichtextWrapper from '../components/richtext-wrapper'
import BubbleBorder from '../components/bubble-border.js'

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
            <BubbleBorder styleType='title' key={index}>
              <Title key={section._key} title={section.title} tag={section.tag} tagStyle={section.style} />
            </BubbleBorder>
          )
        case 'bodyContent':
          return (
            <BubbleBorder styleType='body' key={index}>
              <RichtextWrapper key={section._key} body={section.body} />
            </BubbleBorder>
          )
      }
    })
  )
}
