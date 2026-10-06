import Link from "next/link";

interface IMostreadNews {
    id: string;
    title: string;
}

const Mostread = async () => {
    const res = await fetch(
      "https://news-api-v2.vercel.app/api/news/most-read",
    );
    const data = await res.json();
    const mostreadNews: IMostreadNews[] = data.data;
    console.log('mostreadNews', mostreadNews);
    
    return (
      <div className='card p-2 bg-base-100 border border-gray-300'>
        <h1 className='text-2xl font-bold text-red-700 mb-3'>সর্বাধিক পঠিত</h1>
        <div className='grid gap-3'>
          {mostreadNews.map((news, i) => (
            <div
              className='flex gap-2  border border-red-400 p-2 rounded-md'
              key={news.id}>
              <Link href={`/news/${news.id}`}>
                <p className='text-xl font-bold text-red-500'>{i + 1}</p>
                <h2>{news.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Mostread;