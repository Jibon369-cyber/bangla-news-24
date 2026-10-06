import NewsCard from "@/app/components/NewsCard";
import { notFound } from "next/navigation";

interface INews {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  category: string;
}

type Props = {
  params: Promise<{
    categoryId: string;
  }>;
};

const CategoryNews = async ({ params }: Props) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  const categoryNews: INews[] = data.data;

  if (!categoryNews || categoryNews.length === 0) {
    notFound();
  }

  return (
    <div>
      <h1 className='border-b-2 border-red-700 text-2xl font-bold'>
        {data.title}
      </h1>

      <div className='mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
