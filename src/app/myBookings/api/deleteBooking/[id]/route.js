import { connectDb } from "@/components/leave/connectDb"
import { ObjectId } from "mongodb";

export const DELETE = async ({ params }) => {
    const db = await connectDb();
    const bookingsCollection = db.collection('bookings');
    try {
        const resp = await bookingsCollection.deleteOne({ _id: new ObjectId(params?.id) });
        return Response.json({ message: "Booking Delete successfully", response: resp }, { status: 200 })
    }
    catch (error) {
        console.log(error);
        return Response.json({ message: "something went wrong" });
    }
}