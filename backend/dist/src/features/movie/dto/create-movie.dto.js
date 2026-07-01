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
exports.CreateMovieDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../../generated/prisma/enums");
const create_movie_credits_input_dto_1 = require("./create-movie-credits-input.dto");
const swagger_1 = require("@nestjs/swagger");
class CreateMovieDto {
    title;
    originalTitle;
    description;
    releaseDate;
    releaseYear;
    ageRating;
    status;
    isFeatured;
    genreIds;
    countryIds;
    credits;
}
exports.CreateMovieDto = CreateMovieDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 255),
    (0, swagger_1.ApiProperty)({
        description: 'The title of the movie',
        example: 'Inception',
    }),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 255),
    (0, swagger_1.ApiProperty)({
        description: 'The original title of the movie',
        example: 'Inception',
    }),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "originalTitle", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'The description of the movie',
        example: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    }),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({
        description: 'The release date of the movie',
        example: '2010-07-16',
    }),
    __metadata("design:type", Date)
], CreateMovieDto.prototype, "releaseDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsPositive)(),
    (0, swagger_1.ApiProperty)({
        description: 'The release year of the movie',
        example: 2010,
    }),
    __metadata("design:type", Number)
], CreateMovieDto.prototype, "releaseYear", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: 'The age rating of the movie',
        example: 'PG-13',
    }),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "ageRating", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.MovieStatus),
    (0, swagger_1.ApiProperty)({
        description: 'The status of the movie',
        example: enums_1.MovieStatus.PUBLISHED,
    }),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Boolean),
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({
        description: 'Indicates if the movie is featured',
        example: true,
    }),
    __metadata("design:type", Boolean)
], CreateMovieDto.prototype, "isFeatured", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.IsPositive)({ each: true }),
    (0, swagger_1.ApiProperty)({
        description: 'The IDs of the genres associated with the movie',
        example: [1, 2, 3],
    }),
    __metadata("design:type", Array)
], CreateMovieDto.prototype, "genreIds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.IsPositive)({ each: true }),
    (0, swagger_1.ApiProperty)({
        description: 'The IDs of the countries associated with the movie',
        example: [1, 2, 3],
    }),
    __metadata("design:type", Array)
], CreateMovieDto.prototype, "countryIds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_movie_credits_input_dto_1.CreateMovieCreditInputDto),
    (0, class_validator_1.ArrayUnique)((credit) => `${credit.personId}-${credit.role}`),
    (0, swagger_1.ApiProperty)({
        description: 'The credits associated with the movie',
        type: [create_movie_credits_input_dto_1.CreateMovieCreditInputDto],
    }),
    __metadata("design:type", Array)
], CreateMovieDto.prototype, "credits", void 0);
//# sourceMappingURL=create-movie.dto.js.map