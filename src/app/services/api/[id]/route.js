import { connectDb } from "@/components/leave/connectDb"

export const GET = async (request, { params }) => {
    const db = await connectDb();
    const servicesCollection = db.collection('services');
    try {
        const services = await servicesCollection.findOne({ _id: params?.id });
        return Response.json(services);
    }
    catch (error) {
        console.log(error);
    }
};