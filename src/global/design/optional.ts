import { ErrorFactory} from "../errors/error_factory";

export class Optional {
    object: any;

    constructor(object: any) {
        this.object = object
    }

    public get(): any | Error {
        if (this.object === null)
            return ErrorFactory.objectNotFoundError("object not found")
        if (this.object === undefined)
            return ErrorFactory.accessingUndefinedError("accessing undefined")
        return this.object;
    }

}