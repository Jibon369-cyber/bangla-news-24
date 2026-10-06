import Link from "next/link";
import MainNews from "./components/MainNews";

import Mostread from "./components/Mostread";
import NewsCard from "./components/NewsCard";

interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

const Home = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sectionData = data.data;
  const mainNews = sectionData[0].articles;
  const otherSections: IOtherSection[] = sectionData.slice(1);
  // console.log(otherSections);

  return (
    <div>
      <div className='grid grid-cols-3 p-5 gap-5'>
        <div className='col-span-2'>
          <MainNews news={mainNews} />

          <div className='grid gap-5 mt-5'>
            {otherSections.map((os) => (
              <div className='' key={os.curationId}>
                <h1 className='font-bold text-xl mt-5 border-b-2 pb-1 border-red-700'>
                  {os.title}
                </h1>

                <div className='grid grid-cols-3 gap-2 m-4'>
                  {os.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* most read section */}
        <div className='col-span-1'>
          <Mostread />
        </div>
      </div>
    </div>
  );
};

export default Home;
