import { signIn } from 'next-auth/react';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa6';

const SocialSignIn = () => {
    const handleSocial = async (providers) => {
        const resp = await signIn(providers)
    }
    return (
        <div>
            <button><FaFacebook size={25} className='text-blue-500 hover:scale-110' /></button>
            <button><FaGithub size={25} className='text-black hover:scale-110' /></button>
            <button><FaGoogle size={25} className='text-green-500 hover:scale-110' /></button>
            {/* <button><FaLinkedin size={25} className='text-blue-400 hover:scale-110' /></button> */}
        </div>
    );
};

export default SocialSignIn;