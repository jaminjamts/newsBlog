import Link from "next/link";
import { useState } from "react";

export const BlogPostHeader = ({ tagData, handleTagChange }) => {
  const [clickedTagNameButton, setClickedTagName] = useState("");

  return (
    <main className="flex flex-col gap-4">
      <div className="">
        <h1>All Blog Post</h1>
      </div>
      <div className="flex gap-1 justify-between">
        <div className="flex gap-1">
          {tagData.map((tag, index) => {
            return (
              <button
                className="bg-slate-300 py-2 px-4 rounded-2xl"
                key={index}
                onClick={() => handleTagChange(`${tag.name}`)}
              >
                {tag.name}
              </button>
            );
          })}
        </div>
        <div>
          <Link href={"/bloglist"}>View All</Link>
        </div>
      </div>
    </main>
  );
};
