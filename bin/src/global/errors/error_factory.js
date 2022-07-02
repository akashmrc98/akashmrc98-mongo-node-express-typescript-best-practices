"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFactory = void 0;
const error_types_1 = require("./error_types");
class ErrorFactory {
    static objectNotFoundError(message) {
        throw {
            message: message,
            name: error_types_1.ErrorType.OBJECT_NOT_FOUND_ERROR.toString(),
        };
    }
    static accessingUndefinedError(message) {
        throw {
            message: message,
            name: error_types_1.ErrorType.ACCESSING_UNDEFINED_ERROR.toString(),
        };
    }
    static typeError(message) {
        throw {
            message: message,
            name: error_types_1.ErrorType.TYPE_ERROR.toString(),
        };
    }
    static inputError(message) {
        throw {
            message: message,
            name: error_types_1.ErrorType.INPUT_ERROR.toString(),
        };
    }
}
exports.ErrorFactory = ErrorFactory;
