import { Request, Response } from 'express'
import { UserInterface, classes } from '../db'

import { Optional } from '../global/design/optional'
import { ErrorType } from '../global/errors/error_types';
import { HttpFactory } from '../global/http/http';
import { DomainServices } from './services'
import { Required } from '../global/design/required'

const path = require("path");
const { fork } = require("child_process");

const { User } = classes

// controller should contain only high level code
// while low level code should be written in services
export class DomainController {
    static operationOne = async (req: Request, res: Response) => {
        try {
            // joi package string validations, json validations
            // getting request body and checking for required fileds
            // check Required class
            const { firstname, lastname, username } = new Required(req.body)
                .addKey("firstname")
                .addKey("lastname")
                .addKey("username")
                .getItems() as UserInterface;

            // using builder pattern
            // easy to read and understand code
            // on top we can able access whole instance methods, attributes at any time
            const userInput = new User({})
                .setFirstname(firstname)
                .setLastname(lastname)
                .setUsername(username)
                .get();
            try {
                // creating db query
                // low level logic should be ideal to written in services
                const query = await DomainServices.createUser(userInput)
                // using optional 
                // optionals throws errors
                // try  breaking code with below statements can be able to catch 
                // const optional = new Optional(null);
                // const optional = new Optional(undefined);
                const optional = new Optional(query);

                // either get data or throw error
                // typecasting data to user interface
                const data = optional.get() as UserInterface;

                // returning response
                return HttpFactory.STATUS_200_OK(data, res);
            } catch (e) {
                // catching query errors
                const err = e as Error;
                if (err.name === ErrorType.OBJECT_NOT_FOUND_ERROR.toString()) {
                    return HttpFactory.STATUS_404_NOT_FOUND({ message: err.message }, res)
                }
                if (err.name === ErrorType.ACCESSING_UNDEFINED_ERROR.toString()) {
                    return HttpFactory.STATUS_503_SERVICE_UNAVAILABLE({ message: err.message }, res)
                }
            }
        } catch (e) {
            // catching request errors
            const err = e as Error;
            if (err.name === ErrorType.INPUT_ERROR.toString()) {
                return HttpFactory.STATUS_400_BAD_REQUEST({ message: err.message }, res)
            }
        } finally {
            return HttpFactory.STATUS_500_INTERNAL_SERVER_ERROR({ message: "" }, res)
        }
    }

    // faster then usual depends upon cpus & threads 
    static async forkExample(req: Request, res: Response) {
        try {
            console.log(req.baseUrl)
            const forkPath = path.join(__dirname, "process", "sum.js");
            const forked = fork(forkPath);
            forked.send("start");
            forked.on("message", (sum: any) => console.log(sum));
            return HttpFactory.STATUS_200_OK({ data: { ok: "ok" } }, res)
        } catch (e) {
            return HttpFactory.STATUS_400_BAD_REQUEST({ messagrr: e }, res)
        }
    }

}