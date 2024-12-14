import Link from "next/link";
import MainButton from "../common/MainButton";
import { MagnifyIcon } from "../Icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const HeaderSection = () => {
  const router = useRouter();
  const [dataSearch, setDataSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const fetchSearchData = async () => {
    try {
      const response = await fetch(`https://dev.to/api/articles?per_page=100`);
      const data = await response.json();
      setDataSearch(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchSearchData(), [];
  });
  const filteredTitles = dataSearch?.filter((item) =>
    item?.title?.toLowerCase().includes(searchValue)
  );

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <main className="w-screen flex justify-center py-8">
      <div className="container max-w-screen-lg flex justify-between ">
        <Link href={"/"}>
          <div className="p-2">Logo</div>
        </Link>
        <div className="flex gap-10">
          <div className="flex gap-5 p-2">
            <MainButton link={"/"} title={"Home"} />
            <MainButton link={"/bloglist"} title={"Blog"} />
            <MainButton link={"/contact"} title={"Contact"} />
          </div>
          <div className="flex flex-col bg-[var(--secondary-100)] rounded justify-between w-[220px] items-center relative">
            <div className="flex w-full justify-between items-center h-full p-2">
              <input
                className="bg-[var(--secondary-100)]"
                type="text"
                placeholder="Search"
                onChange={handleInputChange}
              />
              <div className="flex justify-center items-center">
                <MagnifyIcon />
              </div>
            </div>
            <div className="z-10">
              {searchValue && (
                <SearchDropDown
                  filteredTitles={filteredTitles}
                  searchValue={searchValue}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const SearchDropDown = ({ filteredTitles, searchValue }) => {
  filteredTitles.length = 5;
  return (
    <div
      className={`${
        searchValue ? "visible" : "invisible"
      } flex flex-col absolute transition-all duration-200 top-11 left-0 bg-[var(--secondary-100)] rounded-md`}
    >
      {filteredTitles?.map((data) => {
        return (
          <Link
            key={data.id}
            className="hover:cursor-pointer hover:underline hover:text-[var(--blue)] m-1 rounded-md p-1 bg-[var(--background)]"
            href={`/bloglist/${data?.id}`}
          >
            <div className="w-full">{data.title}</div>
          </Link>
        );
      })}
    </div>
  );
};
