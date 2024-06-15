import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IoCartOutline, IoSearch } from 'react-icons/io5'
const Navbar = () => {
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

    return (
        <div class="navbar bg-violet-100 rounded-2xl text-black fixed max-w-7xl mx-auto z-50">
            <div class="navbar-start">
                <Link href="/">
                    <Image src={`/public/assets/logo.svg`} height={50} width={100} alt='logo' />
                </Link>
                <div class="dropdown">
                    <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks?.map(item => <Link href={item?.path} key={item?.path}>{item?.title}</Link>)}
                    </ul>
                </div>
                <Link href="/" className="text-xl">CarDoctor</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    {navLinks?.map(item => <Link className='text-lg mx-2 font-semibold duration-300 hover:text-primary' href={item?.path} key={item?.path}>{item?.title}</Link>)}
                </ul>
            </div>
            <div class="navbar-end">
                <div className='flex items-center gap-4 mr-2'>
                    <IoCartOutline size={30} />
                    <IoSearch size={30} />
                </div>
                <a class="btn btn-outline btn-primary">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;