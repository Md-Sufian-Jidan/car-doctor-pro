import { connectDb } from "@/components/leave/connectDb"
import { services } from "@/components/leave/services";
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await connectDb();
    const servicesCollection = db.collection('services');
    try {
        await servicesCollection.deleteMany();
        const resp = await servicesCollection.insertMany(services);
        return NextResponse.json({ message: "seeded successfully" });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Data Not Push", error });
    }
};