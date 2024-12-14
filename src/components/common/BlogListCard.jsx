export const BlogListCard = ({
  url,
  title,
  tag,
  publishedUrl,
  publisherName,
  publishedAt,
}) => {
  return (
    <div className="flex flex-wrap max-w-60 h-60">
      <div>
        <img src={`${url}`} alt="" className="rounded-md w-full" />
        <p>{title}</p>
        <p>{tag}</p>
      </div>
      <div className="flex">
        <img src={`${publishedUrl}`} className="rounded-full w-6" />
        <p>{publisherName}</p>
        <p>{publishedAt}</p>
      </div>
    </div>
  );
};
