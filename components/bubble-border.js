const getExtraStyles = (styleType) => {
  switch (styleType) {
    case 'title_h1':
      return 'text-plum pt-8 mb-4 text-center underline dark:text-swamp'
    case 'title_headline':
      return 'border-plum bg-plum text-sand py-2 dark:bg-black dark:border-sand dark:text-swamp'
    case 'title_subheadline':
      return 'text-plum mb-4 text-center dark:text-swamp'
    case 'body':
      return 'body-content border-violet bg-sand py-4 dark:bg-black dark:border-swamp dark:text-sand'
  }
  return ''
}

const BubbleBorder = ({ children, styleType }) => {
  let extraStyles = getExtraStyles(styleType)
  return (
    <div className={`mb-4 px-4 ${extraStyles}`}>
      { children }
    </div>
  )
}

export default BubbleBorder