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
exports.ResponsePersonDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResponsePersonDto {
    id;
    slug;
    name;
    bio;
    birthDate;
    createdAt;
    updatedAt;
}
exports.ResponsePersonDto = ResponsePersonDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5 }),
    __metadata("design:type", Number)
], ResponsePersonDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john-doe' }),
    __metadata("design:type", String)
], ResponsePersonDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    __metadata("design:type", String)
], ResponsePersonDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        nullable: true,
        example: 'John Doe is a fictional character often used to represent an anonymous person or a placeholder name in legal proceedings, medical cases, and other contexts where the true identity of an individual is unknown or must be withheld.',
    }),
    __metadata("design:type", Object)
], ResponsePersonDto.prototype, "bio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: String,
        format: 'date',
        nullable: true,
        example: '1974-11-11',
    }),
    __metadata("design:type", Object)
], ResponsePersonDto.prototype, "birthDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        format: 'date-time',
    }),
    __metadata("design:type", Date)
], ResponsePersonDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        format: 'date-time',
    }),
    __metadata("design:type", Date)
], ResponsePersonDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=person-response.dto.js.map