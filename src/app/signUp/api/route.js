import { connectDb } from "@/components/leave/connectDb";

export const POST = async (request) => {
    const newUser = await request?.json();
    try {
        const db = await connectDb();
        const userCollection = db.collection('users');
        const existUser = await userCollection.findOne({ email: newUser?.email });
        if (existUser) return Response?.json({ message: "User Existed" }, { status: 304 })
        const resp = await userCollection?.insertOne(newUser);
        return Response.json({ message: "user created" }, { status: 200 });
    }
    catch (err) {
        console.log(err);
        return Response.json({ message: "Something went wrong", err }, { status: 500 });
    }
}