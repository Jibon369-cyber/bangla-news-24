import Link from "next/link";

interface INavs {
  scrapable: boolean;
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
} 


const NavLinks = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await res.json();
    const navLinks: INavs[] = data.data;
    const navFiltered = navLinks.filter((link) => link.scrapable)
    
    return (
      <div className='flex items-center justify-center gap-4'>
        <Link href="/">হোম</Link>

        {navFiltered.map((link, i) => (
          <Link key={i} href={`/category/${link.slug}`}>
            {link.title}
          </Link>
        ))}
      </div>
    );
};

export default NavLinks;