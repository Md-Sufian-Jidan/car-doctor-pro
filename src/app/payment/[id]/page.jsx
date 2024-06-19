import { getServicesDetails } from '@/services/getServices';
import React from 'react';

const PaymentPage = async ({ params }) => {
    const details = await getServicesDetails(params?.id);
    const { img, _id } = details;
    return (
        <div>
            <div className="hero h-44 mb-3 relative text-white rounded-xl" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60 bg-gradient-to-br from-[#151515ff] to-[#15151500]"></div>
                <div className="hero-content">
                    <h4 className='text-5xl'>Checkout Details</h4>
                </div>
                <div className='absolute bottom-0 bg-[#FF3811] p-3 rounded-t-xl'>Home/Service</div>
            </div>
            <div className="card shrink-0 w-full max-w-5xl mx-auto shadow-xl bg-[#F3F3F3] p-10 my-3">
                <form className="card-body space-y-5">
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" placeholder="First Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" placeholder="Last Name" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="number" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                    </div>
                    <textarea placeholder='Your Message' className='textarea textarea-bordered textarea-lg w-full'></textarea>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;