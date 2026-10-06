import Image from "next/image";
import Link from "next/link";

interface INews {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string; 
}


const MainNews = ({news}: {news: INews[]}) => {
    const [firstNews, ...otherNews] = news;
    // console.log(otherNews);

  
    return (
      <div className='flex gap-3'>
        <Link href={`/news/${firstNews.id}`}>
          <div className='card bg-base-100 w-96 shadow-sm'>
            <figure>
              <Image
                height={600}
                width={600}
                src={firstNews.imageUrl}
                alt={firstNews.imageAlt}
              />
            </figure>
            <div className='card-body'>
              <p className='text-red-600 font-semibold'>{firstNews.category}</p>
              <h2 className='card-title text-md'>{firstNews.title}</h2>
              <p className='text-sm'>{firstNews.description}</p>
            </div>
          </div>
        </Link>

        <div className='grid gap-2 mr-4'>
          {otherNews.slice(0, 4).map((news) => (
            <div
              key={news.id}
              className='card bg-base-100 border border-gray-300 p-3 flex justify-center'>
              <Link href={`/news/${news.id}`}>
                <p className='text-red-600 font-semibold flex'>
                  {firstNews.category}
                </p>
                <div>{news.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MainNews;