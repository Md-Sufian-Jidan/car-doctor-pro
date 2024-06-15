import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className="hero lg:h-[550px] bg-violet-200 my-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <Image src={`/assets/images/about_us/person.jpg`} width={500} height={400} className="w-3/4 rounded-lg shadow-2xl" alt='picture' />
                    <Image src={`/assets/images/about_us/parts.jpg`} width={500} height={400} className="w-1/2 rounded-lg shadow-2xl border-8 border-white absolute right-10 top-1/2" alt='picture' />
                </div>
                <div className='lg:w-1/2 space-y-3 p-4'>
                    <h3 className='text-3xl text-[#FF3811] font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified <br />& of experience <br />in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do  not look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn bg-[#ff3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;