"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseMultipartJsonInterceptor = void 0;
const common_1 = require("@nestjs/common");
let ParseMultipartJsonInterceptor = class ParseMultipartJsonInterceptor {
    fieldName;
    constructor(fieldName = 'data') {
        this.fieldName = fieldName;
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const value = request.body?.[this.fieldName];
        if (typeof value !== 'string') {
            throw new common_1.BadRequestException(`Field "${this.fieldName}" must be a JSON string`);
        }
        try {
            const parsed = JSON.parse(value);
            if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
                throw new common_1.BadRequestException(`Field "${this.fieldName}" must contain a JSON object`);
            }
            request.body[this.fieldName] = parsed;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException(`Field "${this.fieldName}" contains invalid JSON`);
        }
        return next.handle();
    }
};
exports.ParseMultipartJsonInterceptor = ParseMultipartJsonInterceptor;
exports.ParseMultipartJsonInterceptor = ParseMultipartJsonInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], ParseMultipartJsonInterceptor);
//# sourceMappingURL=parse-multipart-json.interceptor.js.map