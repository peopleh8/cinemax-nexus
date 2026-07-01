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
exports.GenreResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class GenreResponseDto {
    id;
    slug;
    name;
    description;
    createdAt;
    updatedAt;
}
exports.GenreResponseDto = GenreResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The unique identifier of the genre',
        example: 1,
    }),
    __metadata("design:type", Number)
], GenreResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The slug of the genre',
        example: 'action',
    }),
    __metadata("design:type", String)
], GenreResponseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the genre',
        example: 'Action',
    }),
    __metadata("design:type", String)
], GenreResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The description of the genre',
        example: 'Action movies are characterized by a lot of excitement, physical activity, and fast-paced sequences.',
    }),
    __metadata("design:type", String)
], GenreResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The date and time when the genre was created',
        example: '2023-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], GenreResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The date and time when the genre was last updated',
        example: '2023-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], GenreResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=genre-response.dto.js.map