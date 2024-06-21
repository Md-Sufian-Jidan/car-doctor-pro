import { connectDb } from "@/components/leave/connectDb"
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await connectDb();
    const servicesCollection = db.collection('services');
    try {
        const services = await servicesCollection.find().toArray();
        return NextResponse.json(services);
    }
    catch (error) {
        console.log(error);
    }
};