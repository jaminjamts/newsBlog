import { useEffect, useState } from "react";
import { AllBlogSection, CaruselSection, TrendSection } from "../layout";

export default function HomePage() {
  const [caruselData, setCaruselData] = useState([]);
  const [trendData, setTrendData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [tagData, setTagData] = useState([]);
  const [caruselNews, setCaruselNews] = useState(1);
  const [page, setPage] = useState(1);
  const [tags, setTags] = useState("");

  const fetchCaruselData = () => {
    fetch(`https://dev.to/api/articles?top=1&per_page=4&page=${caruselNews}`)
      .then((response) => response.json())
      .then((data) => setCaruselData(data));
  };
  const fetchTrendData = () => {
    fetch("https://dev.to/api/articles?top=4&per_page=4")
      .then((response) => response.json())
      .then((data) => setTrendData(data));
  };

  const fetchAllData = () => {
    fetch(`https://dev.to/api/articles?per_page=9&page=${page}&tag=${tags}`)
      .then((response) => response.json())
      .then((data) => {
        if (page === 1) {
          setAllData(data);
        } else {
          setAllData((prevData) => [...prevData, ...data]);
        }
      });
  };

  const fetchTagData = async () => {
    const response = await fetch(`https://dev.to/api/tags`);
    const data = await response.json();
    setTagData(data);
  };

  const handleTagChange = (newTag) => {
    setTags(newTag);
    setPage(1);
  };

  const handlePagePLus = () => {
    setPage((prevPage) => prevPage + 1);
  };
  useEffect(() => {
    fetchCaruselData();
  }, []);
  useEffect(() => {
    fetchTrendData();
  }, []);
  useEffect(() => {
    fetchAllData();
  }, [page, tags]);

  useEffect(() => {
    fetchTagData();
  }, []);
  return (
    <main className="flex flex-col gap-4">
      <CaruselSection datas={caruselData} />
      <TrendSection datas={trendData} />
      <AllBlogSection
        allData={allData}
        tagData={tagData}
        handlePagePLus={handlePagePLus}
        handleTagChange={handleTagChange}
      />
    </main>
  );
}
