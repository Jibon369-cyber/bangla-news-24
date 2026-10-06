import NewsCard from "@/app/components/NewsCard";
import { notFound } from "next/navigation";


const CategoryNews = async ({params}) => {
    const {categoryId} = await params;
    const res = await fetch(
      `https://news-api-v2.vercel.app/api/category/${categoryId}`,
    );
    const data = await res.json();
    const categoryNews = data.data;

    if (!categoryNews) {
        notFound();
      }
    
    return (
      <div>
        <h1 className='text-2xl font-bold border-b-2 border-red-700'>
          {data.title}
        </h1>
        <div className='grid grid-cols-3 gap-10 mt-5'>
          {categoryNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    );
};

export default CategoryNews;