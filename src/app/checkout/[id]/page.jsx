'use client'
import { getServicesDetails } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const PaymentPage = ({ params }) => {
    const { data } = useSession();
    const [service, setService] = useState({});

    const loadService = async () => {
        const details = await getServicesDetails(params?.id);
        return setService(details);
    };
    const { img, price } = service;
    
    const handleBooking = async (e) => {
        e.preventDefault();
        const newBooking = {
            name: data?.user?.name,
            email: data?.user?.email,
            date: e.target.date.value,
            dueAmount: parseFloat(e.target.dueAmount.value),
            phone: e.target.phone.value,
            presentAddress: e.target.address.value,
            service: { ...service }
        };
        console.log(newBooking);
        const res = await fetch(`${process.env.NEXT_PUBLIC_CHECKOUT_API}`, {
            method: "POST",
            body: JSON.stringify(newBooking),
            headers: {
                "content-type": "application/json"
            }
        })
        console.log(res);
        // const data = await res.json();
    };

    useEffect(() => {
        loadService();
    }, [params]);

    return (
        <div>
            <div className="hero h-44 mb-3 relative text-white rounded-xl"
                style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60 bg-gradient-to-br from-[#151515ff] to-[#15151500]"></div>
                <div className="hero-content">
                    <h4 className='text-5xl'>Checkout</h4>
                </div>
                <div className='absolute bottom-0 bg-[#FF3811] p-3 rounded-t-xl'>Home/Checkout</div>
            </div>
            <div className="card shrink-0 w-full max-w-5xl mx-auto shadow-xl bg-[#F3F3F3] p-10 my-3">
                <form onSubmit={handleBooking} className="card-body">
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input defaultValue={data?.user?.name} type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input defaultValue={new Date().toLocaleDateString()} type="date" placeholder="Date" name='date' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" defaultValue={data?.user?.email} placeholder="Your Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input defaultValue={price} type="number" placeholder="Due amount" name='dueAmount' className="input input-bordered" required readOnly />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="number" placeholder="Your Phone" name='phone' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Present Address</span>
                            </label>
                            <input type="text" placeholder="Present Address" name='address' className="input input-bordered" required />
                        </div>

                    </div>
                    <textarea placeholder='Your Message' className='textarea textarea-bordered textarea-lg w-full mt-3'></textarea>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;