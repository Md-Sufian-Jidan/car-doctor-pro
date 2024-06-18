import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import { getServices } from '@/services/getServices';

const Services = async () => {

    const data = await getServices();
    console.log(data);
    return (
        <div className='text-slate-800'>
            <div className='container mx-auto text-center space-y-4'>
                <h3 className='text-2xl font-bold text-orange-500'>Our Services</h3>
                <h2 className='text-5xl'>Our Services Area</h2>
                <p className='max-w-4xl mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {
                    data?.map((ser) => <ServiceCard key={ser?._id} service={ser} />)
                }
            </div>
        </div>
    );
};

export default Services;