'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa6';

const SocialSignIn = () => {
    const router = useRouter();
    const session = useSession();
    const handleSocial = async (providers) => {
        const resp = await signIn(providers, { redirect: false });
    }
    if (session?.status === 'authenticated') return router.push('/');
    return (
        <div className='flex justify-center gap-10 my-5'>
            {/* <button><FaFacebook size={25} className='text-blue-500 hover:scale-110' /></button> */}
            <button><FaGithub onClick={() => handleSocial("github")} size={25} className='text-black hover:scale-110' /></button>
            <button><FaGoogle onClick={() => handleSocial("google")} size={25} className='text-green-500 hover:scale-110' /></button>
            {/* <button><FaLinkedin size={25} className='text-blue-400 hover:scale-110' /></button> */}
        </div>
    );
};

export default SocialSignIn;