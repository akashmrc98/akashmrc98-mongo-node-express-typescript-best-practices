"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainController = void 0;
const db_1 = require("../db");
const optional_1 = require("../global/design/optional");
const error_types_1 = require("../global/errors/error_types");
const http_1 = require("../global/http/http");
const services_1 = require("./services");
const required_1 = require("../global/design/required");
const path = require("path");
const { fork } = require("child_process");
const { User } = db_1.classes;
// controller should contain only high level code
// while low level code should be written in services
class DomainController {
    static forkExample(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.baseUrl);
                const forkPath = path.join(__dirname, "process", "sum.js");
                const forked = fork(forkPath);
                forked.send("start");
                forked.on("message", (sum) => console.log(sum));
                return http_1.HttpFactory.STATUS_200_OK({ data: { ok: "ok" } }, res);
            }
            catch (e) {
                return http_1.HttpFactory.STATUS_400_BAD_REQUEST({ messagrr: e }, res);
            }
        });
    }
}
exports.DomainController = DomainController;
_a = DomainController;
DomainController.operationOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // getting request body and checking for required fileds
        // check Required class
        const { firstname, lastname, username } = new required_1.Required(req.body)
            .addKey("firstname")
            .addKey("lastname")
            .addKey("username")
            .getItems();
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
            const query = yield services_1.DomainServices.createUser(userInput);
            // using optional 
            // optionals throws errors
            // try  breaking code with below statements can be able to catch 
            // const optional = new Optional(null);
            // const optional = new Optional(undefined);
            const optional = new optional_1.Optional(query);
            // either get data or throw error
            // typecasting data to user interface
            const data = optional.get();
            // returning response
            return http_1.HttpFactory.STATUS_200_OK(data, res);
        }
        catch (e) {
            // catching query errors
            const err = e;
            if (err.name === error_types_1.ErrorType.OBJECT_NOT_FOUND_ERROR.toString()) {
                return http_1.HttpFactory.STATUS_404_NOT_FOUND({ message: err.message }, res);
            }
            if (err.name === error_types_1.ErrorType.ACCESSING_UNDEFINED_ERROR.toString()) {
                return http_1.HttpFactory.STATUS_503_SERVICE_UNAVAILABLE({ message: err.message }, res);
            }
        }
    }
    catch (e) {
        // catching request errors
        const err = e;
        if (err.name === error_types_1.ErrorType.INPUT_ERROR.toString()) {
            return http_1.HttpFactory.STATUS_400_BAD_REQUEST({ message: err.message }, res);
        }
    }
    finally {
        return http_1.HttpFactory.STATUS_500_INTERNAL_SERVER_ERROR({ message: "" }, res);
    }
});
