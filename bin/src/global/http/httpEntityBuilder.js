"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponseEntityBuilder = void 0;
class HttpResponseEntityBuilder {
    constructor(httpResponseEntity) {
        this.httpResponseEntity = httpResponseEntity;
    }
    setStatus(status) {
        this.httpResponseEntity.status = status;
        return this;
    }
    setData(data) {
        this.httpResponseEntity.data = data;
        return this;
    }
    setResponseEntity(responseEntity) {
        this.httpResponseEntity.responseEntity = responseEntity;
        return this;
    }
    getResponseEntity() {
        var _a, _b;
        const httpResponseEntity = this.httpResponseEntity;
        return (_a = this.httpResponseEntity
            .responseEntity) === null || _a === void 0 ? void 0 : _a.status((_b = httpResponseEntity.status) !== null && _b !== void 0 ? _b : 500).json(Object.assign({}, httpResponseEntity.data));
    }
}
exports.HttpResponseEntityBuilder = HttpResponseEntityBuilder;
