"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class APIError extends Error {
    constructor(name, message, status, properties, internalProperties) {
        super();
        this.status = status;
        this.properties = properties;
        this.internalProperties = internalProperties;
        this.name = name;
        this.message = message;
    }
    publicVersion() {
        return new PublicError(this);
    }
}
exports.APIError = APIError;
class PublicError {
    constructor(err) {
        this.name = err.name;
        this.message = err.message;
        this.status = err.status;
        this.properties = err.properties;
    }
}
exports.PublicError = PublicError;
class PublicInfo {
    constructor(message, status, properties) {
        this.message = message;
        this.status = status;
        this.properties = properties;
    }
    ;
}
exports.PublicInfo = PublicInfo;
