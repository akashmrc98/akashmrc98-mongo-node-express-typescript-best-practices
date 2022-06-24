import { ErrorType } from './error_types'

export class ErrorFactory {

    static objectNotFoundError(message: string): Error {
        throw {
            message: message,
            name: ErrorType.OBJECT_NOT_FOUND_ERROR.toString(),
        }
    }

    static accessingUndefinedError(message: string): Error {
        throw {
            message: message,
            name: ErrorType.ACCESSING_UNDEFINED_ERROR.toString(),
        }
    }

    static typeError(message: string): Error {
        throw {
            message: message,
            name: ErrorType.TYPE_ERROR.toString(),
        }
    }

    static inputError(message: string): Error {
        throw {
            message: message,
            name: ErrorType.INPUT_ERROR.toString(),
        }
    }

}