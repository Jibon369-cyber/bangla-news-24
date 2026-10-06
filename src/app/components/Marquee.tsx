
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface IHeadlines {
    id: string;
    title: string;
}


const Marquee = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=9");
    const data = await res.json();
    const marqueeData: IHeadlines[] = data.data;
    
    return (
      <div className='bg-red-700 text-white flex mt-4'>
        <div className='max-w-7xl mx-auto flex'>
          <div className='bg-red-800 py-2 px-4'>সর্বশেষ</div>
          <MarqueeText direction='right' duration={6} className='py-2'>
            {marqueeData.map((headNews) => (
              <span key={headNews.id}>
                <Link href={`/news/${headNews.id}`}>
                  <span>{headNews.title}</span>
                  <span className='mx-5'>•</span>
                </Link>
              </span>
            ))}
          </MarqueeText>
        </div>
      </div>
    );
};

export default Marquee;