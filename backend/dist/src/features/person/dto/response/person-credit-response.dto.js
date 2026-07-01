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
exports.ResponsePersonCreditDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../../../../generated/prisma/enums");
class ResponsePersonCreditDto {
    id;
    movieId;
    personId;
    role;
    createdAt;
    updatedAt;
}
exports.ResponsePersonCreditDto = ResponsePersonCreditDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ResponsePersonCreditDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 25 }),
    __metadata("design:type", Number)
], ResponsePersonCreditDto.prototype, "movieId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5 }),
    __metadata("design:type", Number)
], ResponsePersonCreditDto.prototype, "personId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: enums_1.CreditRole,
        enumName: 'CreditRole',
        example: enums_1.CreditRole.ACTOR,
    }),
    __metadata("design:type", String)
], ResponsePersonCreditDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        format: 'date-time',
        example: '2026-07-01T10:30:00.000Z',
    }),
    __metadata("design:type", Date)
], ResponsePersonCreditDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        format: 'date-time',
        example: '2026-07-01T10:30:00.000Z',
    }),
    __metadata("design:type", Date)
], ResponsePersonCreditDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=person-credit-response.dto.js.map