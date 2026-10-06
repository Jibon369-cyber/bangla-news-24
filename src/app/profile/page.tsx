
'use client';

import { updateUser, useSession } from '@/lib/auth-client';
import { useState } from 'react';

const ProfilePage = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [show, setShow] = useState(false);

  const handleUpdateProfile = async (
    e: React.SubmitEvent<HTMLElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    await updateUser({
      ...newUser,
    });
  };

  const handleShowForm = () => {
    setShow(!show);
  };

  return (
    <main className='min-h-screen bg-[#faf7f2] px-5 py-12 sm:px-8'>
      <div className='mx-auto max-w-4xl'>

        {/* Page Header */}
        <div className='mb-10 text-center'>
          <p className='mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-700'>
            Account
          </p>

          <h1 className='text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl'>
            Your Profile
          </h1>

          <p className='mx-auto mt-3 max-w-xl text-base text-slate-500 sm:text-lg'>
            আপনার প্রোফাইলের তথ্য দেখুন এবং প্রয়োজন অনুযায়ী পরিবর্তন করুন।
          </p>
        </div>

        {/* Main Profile Card */}
        <div className='overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl'>

          {/* Cover */}
          <div className='relative h-40 overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-orange-500 sm:h-52'>
            <div className='absolute -right-10 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl' />

            <div className='absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl' />
          </div>

          {/* Profile Content */}
          <div className='relative px-6 pb-10 sm:px-10'>

            {/* Avatar */}
            <div className='-mt-20 flex justify-center sm:-mt-24'>
              <div className='rounded-full border-8 border-white bg-white shadow-2xl'>
                <div className='h-36 w-36 overflow-hidden rounded-full bg-slate-100 sm:h-44 sm:w-44'>
                  {user?.image ? (
                    <img
                      src={user.image}
                      alt={user.name || 'Profile'}
                      className='h-full w-full object-cover'
                    />
                  ) : (
                    <div className='flex h-full w-full items-center justify-center bg-red-100 text-5xl font-bold text-red-700'>
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* User Info */}
            <div className='mt-6 text-center'>
              <h2 className='text-3xl font-bold text-slate-900'>
                {user?.name}
              </h2>

              <p className='mt-2 text-base text-slate-500'>
                {user?.email}
              </p>

              <div className='mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700'>
                <span className='h-2 w-2 rounded-full bg-green-500' />
                Active Account
              </div>
            </div>

            {/* Profile Information */}
            <div className='mt-10 grid gap-5 sm:grid-cols-2'>

              {/* Name */}
              <div className='rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md'>
                <p className='text-sm font-medium text-slate-400'>
                  নাম
                </p>

                <p className='mt-2 text-lg font-semibold text-slate-800'>
                  {user?.name || 'Not available'}
                </p>
              </div>

              {/* Email */}
              <div className='rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md'>
                <p className='text-sm font-medium text-slate-400'>
                  ইমেইল
                </p>

                <p className='mt-2 break-all text-lg font-semibold text-slate-800'>
                  {user?.email || 'Not available'}
                </p>
              </div>

              {/* Email Verification */}
              <div className='rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md'>
                <p className='text-sm font-medium text-slate-400'>
                  ইমেইল ভেরিফিকেশন
                </p>

                <p
                  className={`mt-2 text-lg font-semibold ${
                    user?.emailVerified
                      ? 'text-green-600'
                      : 'text-orange-500'
                  }`}
                >
                  {user?.emailVerified
                    ? 'Verified ✓'
                    : 'Not Verified'}
                </p>
              </div>

              {/* Account Status */}
              <div className='rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md'>
                <p className='text-sm font-medium text-slate-400'>
                  অ্যাকাউন্ট স্ট্যাটাস
                </p>

                <p className='mt-2 text-lg font-semibold text-green-600'>
                  Active
                </p>
              </div>
            </div>

            {/* Edit Profile Button */}
            <div className='mt-8'>
              <button
                onClick={handleShowForm}
                className='h-14 w-full rounded-xl bg-red-700 px-6 text-lg font-semibold text-white shadow-lg shadow-red-700/20 transition duration-200 hover:bg-red-800 hover:shadow-xl active:scale-[0.99]'
              >
                {show ? 'Close Edit Profile' : 'Edit Profile'}
              </button>
            </div>

            {/* Edit Profile Form */}
            {show && (
              <div className='mt-8 rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8'>

                {/* Form Header */}
                <div className='mb-7'>
                  <h3 className='text-2xl font-bold text-slate-900'>
                    Edit Profile
                  </h3>

                  <p className='mt-1 text-sm text-slate-500'>
                    আপনার নাম এবং profile image পরিবর্তন করুন।
                  </p>
                </div>

                <form
                  onSubmit={handleUpdateProfile}
                  className='w-full space-y-6'
                >

                  {/* Name */}
                  <div className='w-full'>
                    <label className='mb-2 block text-base font-semibold text-slate-800'>
                      নাম
                    </label>

                    <input
                      type='text'
                      name='name'
                      defaultValue={user?.name || ''}
                      placeholder='আপনার নাম লিখুন'
                      className='h-14 w-full rounded-xl border border-slate-300 bg-white px-5 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-600 focus:ring-4 focus:ring-red-100'
                    />
                  </div>

                  {/* Image */}
                  <div className='w-full'>
                    <label className='mb-2 block text-base font-semibold text-slate-800'>
                      Image URL
                    </label>

                    <input
                      type='url'
                      name='image'
                      defaultValue={user?.image || ''}
                      placeholder='https://example.com/image.jpg'
                      className='h-14 w-full rounded-xl border border-slate-300 bg-white px-5 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-600 focus:ring-4 focus:ring-red-100'
                    />
                  </div>

                  {/* Update Button */}
                  <button
                    type='submit'
                    className='h-14 w-full rounded-xl bg-red-700 px-6 text-lg font-semibold text-white shadow-lg shadow-red-700/20 transition hover:bg-red-800 hover:shadow-xl active:scale-[0.99]'
                  >
                    Update Profile
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;

