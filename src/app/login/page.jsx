'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import SocialSignIn from '@/components/Shared/SocialSignIn';

const LoginPage = () => {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const resp = await signIn("credentials", {
            email,
            password,
            redirect: false
        })
        if (resp?.status === 200) {
            return router.push('/');
        }
        console.log(resp);
    };
    return (
        <div className='p-24'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-12'>
                <div>
                    <Image src={`/public/assets/images/login/login.svg`} height={500} width={500} alt='login img' />
                </div>
                <div className='border-2 border-orange-200 rounded-lg p-12'>
                    <h2 className='text-3xl text-center font-bold text-amber-500'>Sign In</h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider">Or Sign In With</div>
                    <SocialSignIn />
                    <p className='text-center my-2'>New To Cars Doctor? <Link href='/signUp' className='text-[#ff3811] font-bold hover:underline'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;