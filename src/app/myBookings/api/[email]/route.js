import { connectDb } from "@/components/leave/connectDb"

export const GET = async ({ params }) => {
    const db = await connectDb();
    const bookingsCollection = db.collection("bookings");
    try {
        console.log('7777777777777777', params?.email);
        const bookings = await bookingsCollection.find({ email: params?.email }).toArray();
        return Response.json({ bookings });
    }
    catch (error) {
        console.log(error);
    }
};