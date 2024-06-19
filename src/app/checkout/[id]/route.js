import { connectDb } from "@/components/leave/connectDb"

export const POST = async (request) => {
    const booking = await request.json();
    const db = await connectDb();
    const bookingsCollection = db.collection('bookings');
    try {
        const services = await bookingsCollection.insertOne(booking)
        return Response.json({ message: "Service Booked successfully" });
    }
    catch (error) {
        console.log(error);
    };
}