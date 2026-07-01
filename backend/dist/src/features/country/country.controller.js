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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryController = void 0;
const common_1 = require("@nestjs/common");
const country_service_1 = require("./country.service");
const dto_1 = require("../../common/dto");
const dto_2 = require("./dto");
const dto_3 = require("./dto");
const interceptors_1 = require("../../common/interceptors");
const guards_1 = require("../../common/guards");
const decorators_1 = require("../../common/decorators");
const enums_1 = require("../../../generated/prisma/enums");
const swagger_1 = require("@nestjs/swagger");
const response_1 = require("./dto/response");
let CountryController = class CountryController {
    countryService;
    constructor(countryService) {
        this.countryService = countryService;
    }
    findOneBySlug(slug) {
        return this.countryService.findOneBySlug(slug);
    }
    findAll(query) {
        return this.countryService.findAll(query);
    }
    create(dto) {
        return this.countryService.create(dto);
    }
    update(slug, dto) {
        return this.countryService.update(slug, dto);
    }
    delete(slug) {
        return this.countryService.delete(slug);
    }
};
exports.CountryController = CountryController;
__decorate([
    (0, common_1.Get)(':slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a country by slug' }),
    (0, swagger_1.ApiOkResponse)({ type: response_1.CountryResponseDto, description: 'The country has been successfully retrieved.' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "findOneBySlug", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(interceptors_1.PaginationInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all countries' }),
    (0, decorators_1.ApiPaginatedResponse)(response_1.CountryResponseDto, 'The countries have been successfully retrieved.'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryDto]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(guards_1.SessionGuard, guards_1.RoleGuard),
    (0, decorators_1.Roles)(enums_1.UserRole.ADMIN, enums_1.UserRole.EDITOR),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new country' }),
    (0, swagger_1.ApiCreatedResponse)({ type: response_1.CountryResponseDto, description: 'The country has been successfully created.' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.CreateCountryDto]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':slug'),
    (0, common_1.UseGuards)(guards_1.SessionGuard, guards_1.RoleGuard),
    (0, decorators_1.Roles)(enums_1.UserRole.ADMIN, enums_1.UserRole.EDITOR),
    (0, swagger_1.ApiOperation)({ summary: 'Update a country by slug' }),
    (0, swagger_1.ApiOkResponse)({ type: response_1.CountryResponseDto, description: 'The country has been successfully updated.' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_3.UpdateCountryDto]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':slug'),
    (0, common_1.UseGuards)(guards_1.SessionGuard, guards_1.RoleGuard),
    (0, decorators_1.Roles)(enums_1.UserRole.ADMIN, enums_1.UserRole.EDITOR),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a country by slug' }),
    (0, swagger_1.ApiOkResponse)({ type: response_1.CountryResponseDto, description: 'The country has been successfully deleted.' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "delete", null);
exports.CountryController = CountryController = __decorate([
    (0, common_1.Controller)('countries'),
    (0, swagger_1.ApiTags)('Countries'),
    __metadata("design:paramtypes", [country_service_1.CountryService])
], CountryController);
//# sourceMappingURL=country.controller.js.map