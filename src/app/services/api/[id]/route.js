import { connectDb } from "@/components/leave/connectDb"
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const db = await connectDb();
    const servicesCollection = db.collection('services');
    try {
        const services = await servicesCollection.findOne({ _id: params?.id });
        return NextResponse.json(services);
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something Went Wrong", error });
    }
};