"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Required = void 0;
const error_factory_1 = require("../errors/error_factory");
class Required {
    constructor(object) {
        this.keys = [];
        this.object = object;
    }
    addKey(key) {
        this.keys.push(key);
        return this;
    }
    getItems() {
        var _a;
        for (let i = 0; i < this.keys.length; i++) {
            if (!this.object.hasOwnProperty((_a = this.keys[i]) !== null && _a !== void 0 ? _a : "")) {
                throw error_factory_1.ErrorFactory.inputError("requrired : " + this.keys[i]);
            }
        }
        return this.object;
    }
}
exports.Required = Required;
