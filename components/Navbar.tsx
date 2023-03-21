import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd } from 'react-icons/io'
import Logo from '../utils/tiktik-logo.png'



const Navbar = () => {
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
      <div className='px-2 py-2 xl:block'>
                <GoogleLogin 
                  onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </div>
    </div>
  )
}

export default Navbar