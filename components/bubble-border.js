const getExtraStyles = (styleType) => {
  switch (styleType) {
    case 'title':
      return 'border-plum bg-plum text-sand py-2'
    case 'body':
      return 'body-content border-violet bg-sand py-4'
  }
  return ''
}

const BubbleBorder = ({ children, styleType }) => {
  let extraStyles = getExtraStyles(styleType)
  return (
    <div className={`border-2 rounded-md mb-4 px-4 ${extraStyles}`}>
      { children }
    </div>
  )
}

export default BubbleBorder