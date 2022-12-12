const Title = ({ title, tag, tagStyle }) => {
  const Tag = tag || 'h2';

  switch (tagStyle) {
    case 'headline':
      tagStyle = 'text-xl font-bold'
    case 'hubheadline':
      tagStyle = 'text-lg font-bold'
  }

  return (
    <Tag className={tagStyle}>{title}</Tag>
  );
}

export default Title;
