import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className="carousel w-full rounded-xl bg-red-100">
                {
                    banners?.map((banner, index) => <div
                        style={{
                            backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3), url(/public/assets/banner/${index + 1}.jpg))`
                        }} key={index} id={`slide${index + 1}`} className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat bg-cover">
                        <div className='h-full w-full flex items-center pl-20 text-gray-600'>
                            <div className='space-y-5'>
                                <h1 className='text-5xl font-bold'>{banner?.title}</h1>
                                <p className='max-w-xl'>{banner?.description}</p>
                                <button className='btn btn-primary mr-2'>Discover More</button>
                                <button className='btn btn-outline'>Latest Project</button>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform bottom-12 right-12 gap-5 ">
                            <a href={banner?.previous} className="btn btn-circle hover:btn-primary">❮</a>
                            <a href={banner?.next} className="btn btn-circle hover:btn-primary">❯</a>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

const banners = [
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide2",
        previous: "#slide4",
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide3",
        previous: "#slide1",
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide4",
        previous: "#slide2",
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide1",
        previous: "#slide3",
    },
];
export default Banner;