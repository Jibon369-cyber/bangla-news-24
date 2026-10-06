"use client";

import { signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {
  const handleSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Sign In Successfully");
    }

    if (error) {
      toast.error("Something Went Wrong");
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await signIn.social({
      provider: "google",
    });
  };

  const handleGitHubSignIn = async () => {
    const data = await signIn.social({
      provider: "github",
    });
  };

  return (
    <main className='min-h-screen px-6 py-10'>
      <div className='mx-auto w-xl max-w-xl'>
        {/* Header */}
        <div className='mb-7'>
          <h1 className='text-4xl text-red-700 font-bold text-center'>
            সাইন ইন
          </h1>

          <p className='mt-2 text-lg text-slate-500 text-center'>
            আপনার অ্যাকাউন্ট তৈরি করুন
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='w-full space-y-5'>
          {/* Email */}
          <div className='w-full'>
            <label className='mb-2 block text-lg font-semibold text-slate-800'>
              ইমেইল
            </label>

            <input
              type='email'
              name='email'
              className='h-14 w-full rounded-lg border border-slate-300 bg-white px-5 text-lg'
            />
          </div>
          {/* Password */}
          <div className='w-full'>
            <label className='mb-2 block text-lg font-semibold text-slate-800'>
              পাসওয়ার্ড
            </label>

            <input
              type='password'
              name='password'
              className='h-14 w-full rounded-lg border border-slate-300 bg-white px-5 text-lg'
            />
          </div>
          {/* Button */}
          <button
            type='submit'
            className='h-14 w-full rounded-lg bg-red-700 px-6 text-lg font-semibold text-white transition hover:bg-red-800 cursor-pointer'>
            সাইন ইন করুন
          </button>
          <button
            onClick={handleGoogleSignIn}
            type='button'
            className='flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md active:scale-[0.98] cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='h-5 w-5'>
              <path
                fill='#4285F4'
                d='M21.35 12.23c0-.79-.07-1.55-.23-2.27H12v4.3h5.22a4.47 4.47 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.93-4.18 2.93-7.39Z'
              />
              <path
                fill='#34A853'
                d='M12 21.67c2.63 0 4.84-.87 6.45-2.35l-3.14-2.43c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.5A9.74 9.74 0 0 0 12 21.67Z'
              />
              <path
                fill='#FBBC05'
                d='M6.54 13.78A5.86 5.86 0 0 1 6.23 12c0-.62.11-1.22.31-1.78v-2.5H3.3A9.73 9.73 0 0 0 2.27 12c0 1.57.38 3.05 1.03 4.28l3.24-2.5Z'
              />
              <path
                fill='#EA4335'
                d='M12 6.19c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.27 14.63 2.33 12 2.33a9.74 9.74 0 0 0-8.7 5.39l3.24 2.5C7.31 7.91 9.46 6.19 12 6.19Z'
              />
            </svg>

            <span>গুগল দিয়ে সাইন ইন করুন</span>
          </button>

          <button
            type='button'
            onClick={handleGitHubSignIn}
            className='flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-slate-900 px-5 py-3.5 text-sm font-semibold cursor-pointer text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md active:scale-[0.98]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='h-5 w-5 fill-current'>
              <path d='M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.69-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z' />
            </svg>

            <span>GitHub দিয়ে সাইন ইন করুন</span>
          </button>
        </form>

        <p className='mt-6 text-center text-base text-slate-500'>
          {" "}
          অ্যাকাউন্ট নেই?{" "}
          <a
            href='/sign-up'
            className='font-semibold text-red-700 hover:underline'>
            {" "}
            সাইন আপ করুন{" "}
          </a>{" "}
        </p>
      </div>
    </main>
  );
};

export default SignInPage;
