import mongoose from "mongoose";
import { User, UserModel, UserDoc, UserInterface } from "./domain/model";

export const db = { UserModel }
export const classes = {User}
export { UserDoc }
export { UserInterface }

mongoose
    .connect("mongodb://localhost:27017/", {
        autoCreate: true,
        dbName: "users",
        autoIndex: true,
        connectTimeoutMS:10000
    }).then().catch()

mongoose.connection
    .on("open", () => console.log(">> DB Connected"))
    .on("error", () => console.log(">> DB Connection Failed"))
    .on("disconnected", () => console.log(">> DB Disconnected"))
