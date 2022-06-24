import { db, UserInterface } from '../db'
import { ErrorFactory } from "../global/errors/error_factory";

const { UserModel } = db

export class DomainServices {
    static createUser = async (user: UserInterface): Promise<UserInterface | Error> => {
        try {
            return await UserModel.create(user);
        } catch (e) {
            console.log(e);
            throw ErrorFactory.typeError("bad request");
        }
    }
}
