import Link from "next/link";
import { useEffect, useState } from "react";
import { BlogListCard } from "../common/BlogListCard";

export default function BlogListPage() {
  const [blogDatas, setBlogDatas] = useState([]);
  const [dataNumber, setDataNumber] = useState(12);
  const fetchBlogData = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?per_page=${dataNumber}`
    );
    const data = await response.json();
    setBlogDatas(data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <main className="w-screen flex justify-center">
      <div className="container max-w-screen-lg">
        <h1>All Blog Post</h1>
        <div className="flex flex-wrap justify-between">
          {blogDatas.map((blogData) => {
            return (
              <Link href={`/bloglist/${blogData.id}`}>
                <BlogListCard
                  url={
                    blogData?.cover_image
                      ? blogData?.cover_image
                      : "noImage.png"
                  }
                  title={blogData.title}
                  tag={blogData.tag_list ? blogData.tag_list[0] : "no tag"}
                  publishedUrl={blogData?.user.profile_image_90}
                  publisherName={blogData?.user.name}
                  publishedAt={blogData?.published_at}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
