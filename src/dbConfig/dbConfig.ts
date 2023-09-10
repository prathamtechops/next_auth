import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.once("connected", () => {
            console.log(">>> DB is connected");
        });

        connection.on("error", (err) => {
            console.log(err);
            process.exit(0);
        });

        console.log(">>> DB is connected");
    } catch (error: any) {
        console.log("Something went wrong");
        console.log(error.message);
    }
}
