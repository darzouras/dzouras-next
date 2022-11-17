const Title = ({ title, tag, tagStyle }) => {
  const Tag = tag || 'h2';
  return (
    <Tag className={tagStyle}>{title}</Tag>
  );
}

export default Title;
