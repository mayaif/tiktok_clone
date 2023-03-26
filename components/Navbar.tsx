import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd } from 'react-icons/io'
import Logo from '../utils/tiktik-logo.png'
import { createOrGetUser } from '@/utils';



const Navbar = () => {
  const user = false
  return (
    <div className='w-fullflex justify-between 
      items-center border-b-2 border-gray-200 py-2 px-4' >
      <Link href="/">
        <div className='w-[100px] md:w-[130px]'>
          <Image 
            className='cursor-pointer'
            src={Logo}
            alt='TikTik'
            layout="responsive"
          />
        </div>
      </Link>
      <div>Search</div>
      <div>
        {user ? (
          <div>Logged in</div>
        ) : (
          <GoogleLogin 
            onSuccess={response => {
              createOrGetUser(response);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        )}
        </div>
    </div>
  )
}

export default Navbar