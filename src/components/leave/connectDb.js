import { MongoClient, ServerApiVersion } from "mongodb";

export const connectDb = async () => {
    let db;
    if (db) return db;
    try {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI
        console.log(uri);
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });
        db = client.db('pro-car-doctor');
        return db;
    }
    catch (err) {
        return console.log(err);
    };
};