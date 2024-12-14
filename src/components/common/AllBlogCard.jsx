export const AllBlogCard = ({ url, tags, description, time }) => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      <div className=" flex flex-col  w-[300px] gap-[16px] border-[1px] border-[#E8E8EA] p-4 rounded-xl">
        <div className="">
          <img
            className="h-[240px] rounded-[6px] object-cover"
            src={
              url
                ? url
                : "https://www.pikpng.com/pngl/m/106-1069399_iam-add-group1-sorry-no-image-available-clipart.png"
            }
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-[5px]">
              {tags.map((tag) => {
                return <div>{tag}</div>;
              })}
            </div>
            <div className="text-[24px]  leading-[28px] font-[600] line-clamp-3">
              {description}
            </div>
          </div>
          <div>{time}</div>
        </div>
      </div>
    </div>
  );
};
