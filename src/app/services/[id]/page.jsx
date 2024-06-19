import { getServicesDetails } from '@/services/getServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export const metadata = {
    title: "Service Detail",
    description: "Details of services",
};

const singleServicePage = async ({ params }) => {
    console.log(params.id);
    const details = await getServicesDetails(params?.id)
    const { img, price, title, description, facility, _id } = details
    // console.log(details);
    return (
        <>
            <div className="hero h-44 mb-3 relative text-white rounded-xl" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60 bg-gradient-to-br from-[#151515ff] to-[#15151500]"></div>
                <div className="hero-content">
                    <h4 className='text-5xl'>Service Details </h4>
                </div>
                <div className='absolute bottom-0 bg-[#FF3811] p-3 rounded-t-xl'>Home/Service</div>
            </div>
            <div className='flex items-center gap-5 mb-3'>
                <div className="max-w-4xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <Image src={img} width={1000} height={400} alt="Article" />

                    <div className="p-6">
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Price : {price}</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{title}</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                    </div>
                </div>
                <div>
                    <div>
                        {
                            facility?.map((fac) => <div key={fac?.name} className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md my-2 dark:bg-gray-800 border border-t-2  border-t-orange-500">
                                <div className="flex items-center justify-between">
                                    <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-pink-200 rounded-full dark:bg-pink-300 dark:text-blue-900">* Facility</span>
                                </div>

                                <div>
                                    <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{fac?.name}</h1>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{fac?.details}</p>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className='w-full text-center my-4 space-y-3 bg-slate-300 p-5 rounded'>
                        <div class="mt-4">
                            <div className="hero h-20 rounded" style={{ backgroundImage: `url(${img})` }}>
                                <h2 className='text-3xl text-lime-300 text-left'>Price : ${price}</h2>
                            </div>
                        </div>
                        <Link href={`/payment/${_id}`} className='btn btn-primary w-full'>Proceed Checkout</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default singleServicePage;