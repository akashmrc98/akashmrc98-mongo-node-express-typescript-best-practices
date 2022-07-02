"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.TestRoutes = router;
const controller_1 = require("./controller");
router.post("/", controller_1.DomainController.operationOne);
router.get("/fork", controller_1.DomainController.forkExample);
