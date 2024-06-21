import { connectDb } from "@/components/leave/connectDb"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async ({ params }) => {
    const db = await connectDb();
    const bookingsCollection = db.collection('bookings');
    try {
        const resp = await bookingsCollection.deleteOne({ _id: new ObjectId(params?.id) });
        return NextResponse.json({ message: "Booking Updated successfully", response: resp }, { status: 200 })
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "something went wrong", error });
    }
};

export const PATCH = async ({ params }) => {
    const db = await connectDb();
    const bookingsCollection = db.collection('bookings');
    const update = await request.json();
    const filter = { _id: new ObjectId(params?.id) }
    const updateDoc = {
        $set: {
            ...update
        }
    };
    try {
        const resp = await bookingsCollection.updateOne(filter, updateDoc);
        return NextResponse.json({ message: "Booking Updated successfully", response: resp }, { status: 200 })
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "something went wrong", error });
    }
};

export const GET = async ({ params }) => {
    const db = await connectDb();
    const bookingsCollection = db.collection('bookings');
    try {
        console.log(params?.id);
        const resp = await bookingsCollection.findOne({ _id: new ObjectId(params?.id) });
        return NextResponse.json({ message: "Booking Found", response: resp }, { status: 200 })
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "something went wrong", error });
    }
};