exportconst Tags = ({ tags }) => {
  const array = [];
  tags.forEach >
    ((tag) => {
      tag.forEach((t) => {
        array.push(t);
      });
    });
  return new Set(array);
};
