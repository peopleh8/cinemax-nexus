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
exports.MovieCreditsResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../../../../generated/prisma/enums");
class MovieCreditsResponseDto {
    id;
    movieId;
    personId;
    role;
}
exports.MovieCreditsResponseDto = MovieCreditsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The unique identifier of the movie credit',
        example: 1,
    }),
    __metadata("design:type", Number)
], MovieCreditsResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The ID of the movie associated with the credit',
        example: 1,
    }),
    __metadata("design:type", Number)
], MovieCreditsResponseDto.prototype, "movieId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The ID of the person associated with the credit',
        example: 1,
    }),
    __metadata("design:type", Number)
], MovieCreditsResponseDto.prototype, "personId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The role of the person in the movie',
        example: enums_1.CreditRole.ACTOR,
    }),
    __metadata("design:type", String)
], MovieCreditsResponseDto.prototype, "role", void 0);
//# sourceMappingURL=movie-credits-response.dto.js.map