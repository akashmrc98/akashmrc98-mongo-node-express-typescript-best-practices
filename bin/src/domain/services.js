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
exports.DomainServices = void 0;
const db_1 = require("../db");
const error_factory_1 = require("../global/errors/error_factory");
const { UserModel } = db_1.db;
class DomainServices {
}
exports.DomainServices = DomainServices;
_a = DomainServices;
DomainServices.createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield UserModel.create(user);
    }
    catch (e) {
        console.log(e);
        throw error_factory_1.ErrorFactory.typeError("bad request");
    }
});
