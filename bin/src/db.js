"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classes = exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const model_1 = require("./domain/model");
exports.db = { UserModel: model_1.UserModel };
exports.classes = { User: model_1.User };
mongoose_1.default
    .connect("mongodb://localhost:27017/", {
    autoCreate: true,
    dbName: "users",
    autoIndex: true,
    connectTimeoutMS: 10000
}).then().catch();
mongoose_1.default.connection
    .on("open", () => console.log(">> DB Connected"))
    .on("error", () => console.log(">> DB Connection Failed"))
    .on("disconnected", () => console.log(">> DB Disconnected"));
