import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SinglePostPage() {
  const router = useRouter();
  const [singleData, setSingleData] = useState({});
  const id = router.query.singlepost;
  const imageUrl = singleData?.cover_image;

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dev.to/api/articles/${id}`);
      const data = await response.json();
      setSingleData(data);
    } catch (error) {
      console.log("error");
    }
  };

  console.log(singleData);

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <main className="w-screen flex justify-center">
      <div className="container max-w-screen-lg flex justify-center flex-col gap-4 font-bold">
        <h1 className="text-3xl">{singleData?.title}</h1>
        <div className="flex justify-center">
          {imageUrl ? (
            <img src={`${imageUrl}`} className="rounded-xl border" />
          ) : (
            <Image src={"/noImage.png"} width={500} height={100} />
          )}
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl">Title</h1>
            <div>{singleData.title}</div>
          </div>
          <div>
            <p>Published At</p>
            <h3>{singleData.readable_publish_date}</h3>
          </div>
        </div>
        <h1 className="text-2xl">Description</h1>
        <div>{singleData.description}</div>
      </div>
    </main>
  );
}
