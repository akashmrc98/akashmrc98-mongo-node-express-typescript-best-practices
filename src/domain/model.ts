import mongoose, { Schema, Model, Document } from "mongoose"

export interface UserInterface {
    firstname?: string, lastname?: string, username?: string
}

export interface UserDoc extends UserInterface, Document { }

export class User {
    user:UserInterface;
    constructor(user:UserInterface) {
        this.user = user;
    }
    setFirstname(firstname:UserInterface["firstname"]){
        this.user.firstname =firstname 
        return this;
    }

    setLastname(lastname:UserInterface["lastname"]){
        this.user.lastname = lastname;
        return this;
    }
    setUsername(username:UserInterface["username"]){
        this.user.username = username
        return this;
    }
}

const userSchema = new Schema({
    firstname: { type: Schema.Types.String },
    lastname: { type: Schema.Types.String },
    username: { type: Schema.Types.String }
})

export const UserModel: Model<UserDoc> = mongoose.model<UserDoc>("USER", userSchema);

