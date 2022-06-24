import { Response } from "express";
import { HttpStatus } from "./http_status";
import { HttpResponseEntityBuilder } from './httpEntityBuilder'

export class HttpFactory {
    static STATUS_404_NOT_FOUND(data: any, responseEntity: Response) {
        return new HttpResponseEntityBuilder({})
            .setData(data)
            .setResponseEntity(responseEntity)
            .setStatus(HttpStatus.NOT_FOUND)
            .getResponseEntity();
    }

    static STATUS_200_OK(data: any, responseEntity: Response) {
        return new HttpResponseEntityBuilder({})
            .setData(data)
            .setResponseEntity(responseEntity)
            .setStatus(HttpStatus.OK)
            .getResponseEntity();
    }

    static STATUS_500_INTERNAL_SERVER_ERROR(data: any, responseEntity: Response) {
        return new HttpResponseEntityBuilder({})
            .setData(data)
            .setResponseEntity(responseEntity)
            .setStatus(HttpStatus.INTERNAL_SERVER_ERROR)
            .getResponseEntity();
    }

    static STATUS_503_SERVICE_UNAVAILABLE(data: any, responseEntity: Response) {
        return new HttpResponseEntityBuilder({})
            .setData(data)
            .setResponseEntity(responseEntity)
            .setStatus(HttpStatus.SERVICE_UNAVAILABLE)
            .getResponseEntity();
    }

    static STATUS_400_BAD_REQUEST(data: any, responseEntity: Response) {
        return new HttpResponseEntityBuilder({})
            .setData(data)
            .setResponseEntity(responseEntity)
            .setStatus(HttpStatus.BAD_REQUEST)
            .getResponseEntity();
    }
}