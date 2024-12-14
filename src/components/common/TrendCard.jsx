import Image from "next/image";
import { BlueTag } from "./BlueTag";

export const TrendCard = ({ tags, title, url }) => {
  return (
    <cardmain className="w-full h-full">
      <div className="w-full h-full relative overflow-hidden ">
        {url ? (
          <div
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(20, 22, 36, 0.40), rgba(20, 22, 36, 0.40)), url(${url})`,
              height: "100%",
              width: "100%",
            }}
            className=" gap-4 pb-7 bg-cover bg-center rounded-lg"
          ></div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src="/noImage.png"
              width={500}
              height={500}
              sizes="(max-width=500) 100%, 100%"
              style={{ backgroundPosition: "cover" }}
            />
          </div>
        )}
        <div className="absolute top-1/2 px-2">
          <div className="flex gap-2">
            <BlueTag tags={tags} />
          </div>
          {url ? (
            <p className="text-[var(--background)] drop-shadow-2xl">{title}</p>
          ) : (
            <p className="text-[var(--foreground)] drop-shadow-2xl">{title}</p>
          )}
        </div>
      </div>
    </cardmain>
  );
};
