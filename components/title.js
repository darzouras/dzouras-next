const Title = ({ title, tag, tagStyle }) => {
  console.log('tagStyle', tagStyle)
  const Tag = tag || 'h2';

  let styleClasses = 'text-xl font-normal'

  switch (tagStyle) {
    case 'headline':
      styleClasses = 'text-xl font-normal'
      break
    case 'subheadline':
      styleClasses = 'text-lg font-normal'
      break
  }
  console.log('styleClasses', styleClasses)

  return (
    <Tag className={styleClasses}>{title}</Tag>
  );
}

export default Title;
