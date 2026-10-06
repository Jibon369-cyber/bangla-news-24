
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <main className='flex min-h-screen items-center justify-center bg-[#faf7f2] px-6 py-12'>
      <div className='relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/70 bg-white/80 px-6 py-14 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-10 sm:py-20'>

        {/* Decorative Blurs */}
        <div className='absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-200/40 blur-3xl' />
        <div className='absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-orange-200/40 blur-3xl' />

        {/* 404 */}
        <div className='relative'>
          <h1 className='text-8xl font-black tracking-tight text-red-700 sm:text-9xl'>
            404
          </h1>

          <div className='mx-auto mt-2 h-1.5 w-20 rounded-full bg-red-700' />

          {/* Title */}
          <h2 className='mt-8 text-3xl font-bold text-slate-900 sm:text-4xl'>
            পেজটি খুঁজে পাওয়া যায়নি
          </h2>

          {/* Description */}
          <p className='mx-auto mt-4 max-w-lg text-base leading-7 text-slate-500 sm:text-lg'>
            দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে,
            নাম পরিবর্তন করা হয়েছে অথবা এই মুহূর্তে উপলভ্য নেই।
          </p>

          {/* Button */}
          <div className='mt-9'>
            <Link
              href='/'
              className='inline-flex h-14 items-center justify-center rounded-xl bg-red-700 px-8 text-base font-semibold text-white shadow-lg shadow-red-700/20 transition duration-200 hover:bg-red-800 hover:shadow-xl active:scale-[0.98]'
            >
              হোম পেজে ফিরে যান
            </Link>
          </div>

          {/* Small Message */}
          <p className='mt-6 text-sm text-slate-400'>
            অথবা ফিরে গিয়ে অন্য কোনো পেজ চেষ্টা করুন।
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;

