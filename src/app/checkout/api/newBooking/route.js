import { connectDb } from "@/components/leave/connectDb"
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const newBooking = await request.json();
    const db = await connectDb();
    const bookingsCollection = db.collection('bookings');
    try {
        const res = await bookingsCollection.insertOne(newBooking)
        return NextResponse.json({ message: "Service Booked successfully" }, { status: 200 });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something Went Wrong" }, { status: 400 });
    };
};