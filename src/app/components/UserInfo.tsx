'use client'
import { signOut, useSession } from "@/lib/auth-client";

import Link from "next/link";
import toast from "react-hot-toast";


const UserInfo = () => {
    const {data: session} = useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        await signOut();
        toast.success('Sign Out Successfully');
    }
    
    return (
      <div className='absolute right-65 top-5 flex gap-2'>
        {user ? (
          <div className='flex flex-col items-center gap-1'>
            <Link href='/profile' className='flex flex-col items-center gap-1'>
              <div className='avatar'>
                <div className='ring-primary ring-offset-base-100 w-10 rounded-md ring-2 ring-offset-2'>
                  <img
                    alt='Tailwind-CSS-Avatar-component'
                    src={user?.image as string}
                  />
                </div>
              </div>
              <h3>{user.name}</h3>
            </Link>

            <button
              onClick={handleSignOut}
              className='btn bg-red-700 hover:bg-red-800 border-none btn-sm text-white'>
              সাইন আউট
            </button>
          </div>
        ) : (
          <div>
            <Link href='/sign-in'>
              <button className='btn text-black'>সাইন ইন</button>
            </Link>

            <Link href='/sign-up'>
              <button className='btn bg-red-700 text-white hover:bg-red-800'>
                সাইন আপ
              </button>
            </Link>
          </div>
        )}
      </div>
    );
};

export default UserInfo;
