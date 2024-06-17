'use client'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IoCartOutline, IoSearch } from 'react-icons/io5'
const Navbar = () => {
    const session = useSession();
    console.log(session);

    return (
        <div className="navbar bg-violet-100 rounded-2xl text-black fixed max-w-7xl mx-auto z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks?.map(item => <Link href={item?.path} key={item?.path}>{item?.title}</Link>)}
                    </ul>
                </div>
                <Link href="/">
                    <Image src={`/public/assets/logo.svg`} height={50} width={50} alt='logo' />
                </Link>
                <Link href="/" className="text-xl">CarDoctor</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks?.map(item => <Link className='text-lg mx-2 font-semibold duration-300 hover:text-primary' href={item?.path} key={item?.path}>{item?.title}</Link>)}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex items-center gap-4 mr-2'>
                    <IoCartOutline size={30} />
                    <IoSearch size={30} />
                </div>
                <Link href={'/'} className="btn btn-outline btn-primary mr-2 duration-300">Appointment</Link>
                {!session?.data ?
                    <Link href={`/login`} className="btn btn-primary duration-300">Login</Link>
                    : <button onClick={() => signOut()} className="btn bg-pink-500 text-black hover:text-white hover:bg-indigo-300 duration-300">Log out</button>
                }
            </div>
        </div>
    );
};

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Services',
        path: '/services'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
];

export default Navbar;