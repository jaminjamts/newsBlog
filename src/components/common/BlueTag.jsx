export const BlueTag = ({ tags }) => {
  return (
    <div className=" flex flex-wrap gap-2 ">
      {tags?.map((tag) => {
        return (
          <h1 className="bg-[var(--blue)] text-[var(--background)] rounded-md px-3 py-1">
            {tag}
          </h1>
        );
      })}
    </div>
  );
};
