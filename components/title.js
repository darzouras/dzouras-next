const Title = ({ title, tag, tagStyle }) => {
  const Tag = tag || 'h2';

  switch (tagStyle) {
    case 'headline':
      tagStyle = 'text-xl font-normal'
    case 'subheadline':
      tagStyle = 'text-lg font-normal'
  }

  return (
    <Tag className={tagStyle}>{title}</Tag>
  );
}

export default Title;
