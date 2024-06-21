'use client'
import SocialSignIn from '@/components/Shared/SocialSignIn';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';
// import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa6';

const SignUpPage = () => {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const newUser = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
        };
        console.log(newUser);
        const resp = await fetch("http://localhost:3000/signUp/api", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json"
            }
        })
        const confirm = await resp.json();
        console.log(confirm);
        
        if (confirm?.resp?.insertedId) {
            router?.push('/')
            return toast.success(confirm?.resp?.message);
        }
    };

    return (
        <div className='p-24'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-12'>
                <div className='border-2 border-orange-200 rounded-lg p-12'>
                    <SocialSignIn />
                    <div className="divider">Or Sign In With</div>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
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
                            <button type='submit' className="btn btn-primary">Sign Up</button>
                        </div>
                        <p className='text-center my-2'>New To Cars Doctor? <Link href='/login' className='text-[#ff3811] font-bold hover:underline'>Login</Link></p>
                    </form>
                </div>
                <div>
                    <Image src={`/public/assets/images/login/login.svg`} height={500} width={500} alt='login img' />
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;