import Link from "next/link";
import { AllBlogCard } from "../common/AllBlogCard";
import { BlogPostHeader } from "../common/BlogPostHeader";

export const AllBlogSection = ({
  tagData,
  allData,
  handlePlusPage,
  handleTagChange,
}) => {
  return (
    <main className="w-screen flex justify-center">
      <div className="container max-w-screen-lg flex flex-col gap-4">
        <BlogPostHeader tagData={tagData} handleTagChange={handleTagChange} />
        <div className="flex flex-wrap justify-between gap-4">
          {allData.map((data) => {
            return (
              <Link href={`/bloglist/${data.id}`}>
                <AllBlogCard
                  url={data?.cover_image}
                  tags={data?.tag_list}
                  description={data?.description}
                  time={data?.published_at}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};
