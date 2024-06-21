import { connectDb } from "@/components/leave/connectDb"
import { NextResponse } from "next/server";

export const GET = async ({ params }) => {
    const db = await connectDb();
    const bookingsCollection = db.collection("bookings");
    try {
        console.log('7777777777777777', params?.email);
        const bookings = await bookingsCollection.find({ email: params?.email }).toArray();
        return NextResponse.json({ bookings });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something Went Wrong", error });
    }
};