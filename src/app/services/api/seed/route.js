import { connectDb } from "@/components/leave/connectDb"
import { services } from "@/components/leave/services";

export const GET = async () => {
    const db = await connectDb();
    const servicesCollection = db.collection('services');
    try {
        await servicesCollection.deleteMany();
        const resp = await servicesCollection.insertMany(services);
        return Response.json({ message: "seeded successfully" });
    }
    catch (error) {
        console.log(error);
    }
};