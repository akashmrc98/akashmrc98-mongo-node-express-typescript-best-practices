"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpFactory = void 0;
const http_status_1 = require("./http_status");
const httpEntityBuilder_1 = require("./httpEntityBuilder");
class HttpFactory {
    static STATUS_404_NOT_FOUND(data, responseEntity) {
        return new httpEntityBuilder_1.HttpResponseEntityBuilder({})
            .setData(data)
            .setResponseEntity(responseEntity)
            .setStatus(http_status_1.HttpStatus.NOT_FOUND)
            .getResponseEntity();
    }
    static STATUS_200_OK(data, responseEntity) {
        return new httpEntityBuilder_1.HttpResponseEntityBuilder({})
            .setData(data)
            .setResponseEntity(responseEntity)
            .setStatus(http_status_1.HttpStatus.OK)
            .getResponseEntity();
    }
    static STATUS_500_INTERNAL_SERVER_ERROR(data, responseEntity) {
        return new httpEntityBuilder_1.HttpResponseEntityBuilder({})
            .setData(data)
            .setResponseEntity(responseEntity)
            .setStatus(http_status_1.HttpStatus.INTERNAL_SERVER_ERROR)
            .getResponseEntity();
    }
    static STATUS_503_SERVICE_UNAVAILABLE(data, responseEntity) {
        return new httpEntityBuilder_1.HttpResponseEntityBuilder({})
            .setData(data)
            .setResponseEntity(responseEntity)
            .setStatus(http_status_1.HttpStatus.SERVICE_UNAVAILABLE)
            .getResponseEntity();
    }
    static STATUS_400_BAD_REQUEST(data, responseEntity) {
        return new httpEntityBuilder_1.HttpResponseEntityBuilder({})
            .setData(data)
            .setResponseEntity(responseEntity)
            .setStatus(http_status_1.HttpStatus.BAD_REQUEST)
            .getResponseEntity();
    }
}
exports.HttpFactory = HttpFactory;
