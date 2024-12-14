import Link from "next/link";
import { TrendCard } from "../common/TrendCard";

export const TrendSection = ({ datas }) => {
  return (
    <main className="w-screen flex justify-center py-[100px]">
      <div className="container max-w-screen-lg ">
        <div>
          <h1>Trending</h1>
          <div className="flex justify-between gap-5 flex-wrap">
            {datas.map((data) => (
              <Link href={`/bloglist/${data?.id}`}>
                <div className="h-[320px] w-60">
                  <TrendCard
                    url={data?.cover_image}
                    tags={data?.tag_list}
                    title={data?.title}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
