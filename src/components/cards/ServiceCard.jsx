import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({service}) => {
    const {title, img,price } = service || {};
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    <Image src={img} height={150} width={300} alt="service image" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between items-center">
                    <p className='text-xl'>Price : <span>${price}</span></p>
                        <button className="btn btn-primary rounded-full"><FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;