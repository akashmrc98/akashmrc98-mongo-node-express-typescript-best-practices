"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Optional = void 0;
const error_factory_1 = require("../errors/error_factory");
class Optional {
    constructor(object) {
        this.object = object;
    }
    get() {
        if (this.object === null)
            return error_factory_1.ErrorFactory.objectNotFoundError("object not found");
        if (this.object === undefined)
            return error_factory_1.ErrorFactory.accessingUndefinedError("accessing undefined");
        return this.object;
    }
}
exports.Optional = Optional;
