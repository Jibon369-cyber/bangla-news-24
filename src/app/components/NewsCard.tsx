import Image from "next/image";
import Link from "next/link";

interface INews {
    id: string;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
}

const NewsCard = ({news}: {news: INews}) => {
    // console.log(news);
    
  return (
    <Link href={`/news/${news.id}`}>
      <div className='card bg-base-100 shadow-sm'>
        <figure>
          <Image
            height={600}
            width={600}
            src={news.imageUrl}
            alt={news.imageAlt}
          />
        </figure>
        <div className='card-body'>
          <p className='text-red-600 font-semibold'>{news.category}</p>
          <h2 className='card-title text-md'>{news.title}</h2>
          <p className='text-sm'>{news.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
