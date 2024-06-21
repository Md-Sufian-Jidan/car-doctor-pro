"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';

const MyBookingsPage = () => {
    const { data } = useSession();
    const [bookings, setBookings] = useState([]);

    const loadData = async () => {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/myBookings/api/${data?.user?.email}`);
        const res = await resp.json();
        console.log(res);
        setBookings(res?.bookings)
    };

    const handleDelete = async (id) => {
        console.log('188888888888888888888888', id);
        const deleted = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/myBookings/api/booking${id}`, {
            method: "DELETE",
            body: JSON.stringify(id),
            headers: {
                "content-type": "application/json"
            }
        });
        const resp = await deleted.json();
        if (resp?.response?.deletedCount > 0) {
            toast.success(resp?.message);
            loadData();
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <div className="hero h-44 mb-3 relative text-white rounded-xl"
                style={{ backgroundImage: `url(/public/assets/images/about_us/person.jpg)` }}>
                <div className="hero-overlay bg-opacity-60 bg-gradient-to-br from-[#cad185] to-[#151515]"></div>
                <div className="hero-content">
                    <h4 className='text-5xl'>My Bookings</h4>
                </div>
            </div>
            <h2 className='text-3xl font-bold text-lime-500'>Welcome Back {data?.user?.name},sir </h2>

            <div className='my-5'>
                <h3 className='text-3xl text-center text-violet-400'>My Bookings</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Booking Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                bookings.length > 0 && bookings?.map((ser, idx) => <tr key={ser?._id}>
                                    <th>{idx + 1}</th>
                                    <td>{ser?.service?.title}</td>
                                    <td>{ser?.dueAmount}</td>
                                    <td>{ser?.date}</td>
                                    <td>
                                        <Link href={`/myBookings/update/${ser?._id}`}>
                                            <button className='btn btn-primary'>Edit</button>
                                        </Link>
                                        <button onClick={() => handleDelete(ser?._id)} className='btn btn-primary'><FaDeleteLeft /></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default MyBookingsPage;