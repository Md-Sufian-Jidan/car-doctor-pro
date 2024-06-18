import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service || {};
    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    <Image src={img} height={150} width={300} alt="service image" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between items-center">
                        <p className='text-xl'>Price : <span>${price}</span></p>
                        <Link href={`/services/${_id}`} className="btn btn-primary rounded-full"><FaArrowRight /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;