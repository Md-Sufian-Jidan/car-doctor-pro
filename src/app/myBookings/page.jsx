"use client"
import { useSession } from 'next-auth/react';
import React from 'react';

const MyBookingsPage = () => {
    const { data } = useSession();
    return (
        <div>
            <div className="hero h-44 mb-3 relative text-white rounded-xl"
                style={{ backgroundImage: `url(/public/assets/images/about_us/person.jpg)` }}>
                <div className="hero-overlay bg-opacity-60 bg-gradient-to-br from-[#cad185] to-[#151515]"></div>
                <div className="hero-content">
                    <h4 className='text-5xl'>My Bookings</h4>
                </div>
            </div>
            <div>
                <h2 className='text-3xl font-bold text-lime-500'>Welcome Back {data?.user?.name},sir </h2>
                <h3>My Bookings</h3>
            </div>

            <div className='my-5'>
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
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookingsPage;