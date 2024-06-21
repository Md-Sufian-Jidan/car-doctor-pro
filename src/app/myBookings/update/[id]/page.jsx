'use client'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const UpdatePage = ({ params }) => {
    const { data } = useSession();
    const [booking, setBooking] = useState([]);

    const loadDetails = async () => {
        const bookingDetail = await fetch(`${process.env.NEXT_PUBLIC_BOOKINGS_API}/${params?.id}`, {
            method: "GET"
        });
        const resp = await bookingDetail.json();
        console.log(resp);
        return setBooking(resp?.response);
    };

    useEffect(() => {
        loadDetails()
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedValue = {
            date: e.target.date.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
        };
        const resp = await fetch(`${process.env.NEXT_PUBLIC_BOOKINGS_API}/${params?.id}`, {
            method: "PATCH",
            body: JSON.stringify(updatedValue),
            headers: {
                "content-type": "application/json"
            }
        });
        // const res = await resp.json();
        if (resp?.status === 200) {
            toast.success(resp?.message)
        }
        console.log('update');
    };
    return (
        <div className="card shrink-0 w-full max-w-5xl mx-auto shadow-xl bg-gradient-to-bl from-red-300 to-violet-300 p-10 my-3">
            <form onSubmit={handleUpdate} className="card-body">
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
                        <input type="number" placeholder="Due amount" name='dueAmount' className="input input-bordered" required readOnly />
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
                    <button type='submit' className="btn btn-primary">Update Booking</button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePage;