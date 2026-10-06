import Image from "next/image";
import NavLinks from "./NavLinks";

import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className='max-w-7xl mx-auto'>
      {/* Top Row */}
      <div className='relative flex items-center justify-center p-4 min-h-20'>
        {/* Center: Logo + Brand */}
        <div className='flex items-center gap-3'>
          <Image
            src='/logo.webp'
            alt='Bangla News 24 Logo'
            width={40}
            height={40}
            className='w-10 h-10'
          />

          <div>
            <h1 className='text-xl font-bold text-red-600'>Bangla News 24</h1>

            <p className='text-sm text-gray-600'>{date}</p>
          </div>
        </div>
      </div>
      <UserInfo />


      {/* Bottom Row: Navigation */}
      <nav className='flex items-center justify-center p-2'>
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
