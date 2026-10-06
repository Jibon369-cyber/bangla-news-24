
const Loading = () => {
  return (
    <main className='flex min-h-screen items-center justify-center bg-[#faf7f2] px-6'>
      <div className='relative flex w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/70 bg-white/80 px-8 py-14 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl'>

        {/* Decorative Blurs */}
        <div className='absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-200/40 blur-3xl' />
        <div className='absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl' />

        {/* Loader */}
        <div className='relative'>
          <span className='loading loading-spinner loading-xl text-red-700' />
        </div>

        {/* Loading Text */}
        <h2 className='relative mt-7 text-2xl font-bold text-slate-900'>
          একটু অপেক্ষা করুন...
        </h2>

        <p className='relative mt-2 text-sm leading-6 text-slate-500 sm:text-base'>
          আপনার তথ্য লোড করা হচ্ছে। অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন।
        </p>
      </div>
    </main>
  );
};

export default Loading;

