import Link from "next/link";
import { useEffect, useState } from "react";
import { BlueTag } from "../common/BlueTag";

export const CaruselSection = ({ datas }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 3000;
  function handleprevfunction() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? datas?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function handleNextNews() {
    const isLastSlide = currentIndex === datas?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  useEffect(() => {
    const interval = setInterval(() => handleNextNews(), slideInterval);
    return () => clearInterval(interval);
  }, [currentIndex, datas]);
  return (
    <main className="w-screen flex justify-center">
      <div className="container max-w-screen-lg flex flex-col gap-4 rounded-2xl">
        <Link href={`/bloglist/${datas[currentIndex]?.id}`}>
          {
            <div
              className="bg-no-repeat w-full h-[400px] bg-center rounded-2xl relative"
              style={{
                backgroundImage: `url(${datas[currentIndex]?.cover_image}`,
                backgroundSize: "cover",
                height: "400px",
                width: "100%",
              }}
            >
              <div className="absolute bottom-4 left-4 text-white ">
                <BlueTag tags={datas[currentIndex]?.tag_list} />
                <p>{datas[currentIndex]?.title}</p>
              </div>
            </div>
          }
        </Link>
        <div className="flex justify-center gap-4 w-full">
          <button
            className="p-2 bg-[var(--blue)] rounded-md"
            onClick={handleprevfunction}
          >
            prev
          </button>
          <button
            className="p-2 bg-[var(--blue)] rounded-md"
            onClick={handleNextNews}
          >
            next
          </button>
        </div>
      </div>
    </main>
  );
};
