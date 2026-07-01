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
exports.CountryResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CountryResponseDto {
    id;
    slug;
    name;
    code;
    createdAt;
    updatedAt;
}
exports.CountryResponseDto = CountryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The unique identifier of the country',
        example: 1,
    }),
    __metadata("design:type", Number)
], CountryResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The slug of the country',
        example: 'united-states',
    }),
    __metadata("design:type", String)
], CountryResponseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the country',
        example: 'United States',
    }),
    __metadata("design:type", String)
], CountryResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The code of the country',
        example: 'US',
    }),
    __metadata("design:type", String)
], CountryResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The creation date of the country',
        example: '2023-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], CountryResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The last update date of the country',
        example: '2023-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], CountryResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=country-response.dto.js.map